import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { computeCenter, computeFloorBaseYMap, rebuildGroup } from '../lib/build3d.js';
import { clamp } from '../lib/planGeometry.js';

// "Render view" floating room-name labels — plain canvas-texture sprites,
// same lightweight texture-painting approach materials.js already uses for
// wall surfaces, not a text-rendering library. depthTest stays on so a
// label is correctly hidden behind a wall from angles where the room isn't
// actually visible (matches how a real cutaway render reads).
function makeRoomLabelSprite(text) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const fontSize = 40;
  ctx.font = `700 ${fontSize}px Tajawal, sans-serif`;
  const textWidth = ctx.measureText(text).width;
  const padX = 22, padY = 14;
  canvas.width = Math.ceil(textWidth + padX * 2);
  canvas.height = fontSize + padY * 2;
  // Measuring resets the context's font, so set it again post-resize.
  ctx.font = `700 ${fontSize}px Tajawal, sans-serif`;
  ctx.fillStyle = 'rgba(17,20,26,0.72)';
  const r = 14;
  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.arcTo(canvas.width, 0, canvas.width, canvas.height, r);
  ctx.arcTo(canvas.width, canvas.height, 0, canvas.height, r);
  ctx.arcTo(0, canvas.height, 0, 0, r);
  ctx.arcTo(0, 0, canvas.width, 0, r);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  const material = new THREE.SpriteMaterial({ map: texture, depthWrite: false, transparent: true });
  const sprite = new THREE.Sprite(material);
  const WORLD_UNITS_PER_PX = 0.014;
  sprite.scale.set(canvas.width * WORLD_UNITS_PER_PX, canvas.height * WORLD_UNITS_PER_PX, 1);
  return sprite;
}

// Ported from architect-studio-360's components/Viewport3D.jsx, adapted
// only for this app's lack of Tailwind/lucide-react (plain inline styles
// and a text button instead) — the orbit-camera, pinch/wheel-zoom, and
// render-loop logic is otherwise unchanged. This component owns its own
// Three.js scene/camera/renderer entirely in refs; it takes plain props
// and calls rebuildGroup(...) from lib/build3d.js whenever they change —
// it has no coupling to the app's project store.
const DOLLHOUSE_PHI = 0.62;
const DOLLHOUSE_THETA = Math.PI / 4;

export default function Viewport3D({ rooms, stairs, columns = [], wallHeight, wallColor, wallMaterial, autoRotate, dollhouse = false, floorGap = 0, renderView = false, t = (s) => s }) {
  const mountRef = useRef(null);
  const stateRef = useRef({});
  const flagsRef = useRef({ autoRotate });
  const limitsRef = useRef({ maxRadius: 50 });
  const wasDollhouseRef = useRef(dollhouse);
  const textureCacheRef = useRef(new Map());
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => { flagsRef.current.autoRotate = autoRotate; }, [autoRotate]);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f2);
    scene.fog = new THREE.Fog(0xf0f0f2, 22, 60);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xbfd6ff, 0x1a1f2b, 0.95));
    const dir = new THREE.DirectionalLight(0xfff2e0, 1.0);
    dir.position.set(10, 18, 8);
    dir.castShadow = true;
    dir.shadow.mapSize.set(2048, 2048);
    dir.shadow.bias = -0.0015;
    scene.add(dir);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(300, 300),
      new THREE.MeshStandardMaterial({ color: 0xd4d4d8, roughness: 1 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.03;
    ground.receiveShadow = true;
    scene.add(ground);

    const grid = new THREE.GridHelper(300, 150, 0xa1a1aa, 0xd4d4d8);
    grid.position.y = -0.02;
    scene.add(grid);

    const group = new THREE.Group();
    scene.add(group);

    const center0 = computeCenter(rooms, wallHeight);
    const orbit = {
      theta: DOLLHOUSE_THETA,
      phi: dollhouse ? DOLLHOUSE_PHI : 1.0,
      radius: center0.radius,
      target: new THREE.Vector3(0, center0.targetY, 0)
    };

    function updateCamera() {
      const { theta, phi, radius, target } = orbit;
      camera.position.set(
        target.x + radius * Math.sin(phi) * Math.sin(theta),
        target.y + radius * Math.cos(phi),
        target.z + radius * Math.sin(phi) * Math.cos(theta)
      );
      camera.lookAt(target);
    }

    // One finger = rotate, two fingers = pinch zoom (in addition to mouse wheel).
    let dragging = false, lastX = 0, lastY = 0;
    const pointers = new Map();
    let pinchDist = null;

    function distanceBetweenPointers() {
      const [p1, p2] = [...pointers.values()];
      return Math.hypot(p1.x - p2.x, p1.y - p2.y);
    }
    function onDown(e) {
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) {
        dragging = true; lastX = e.clientX; lastY = e.clientY;
      } else if (pointers.size === 2) {
        dragging = false;
        pinchDist = distanceBetweenPointers();
      }
    }
    function onMove(e) {
      if (!pointers.has(e.pointerId)) { if (!dragging) return; }
      else pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

      if (pointers.size >= 2) {
        const dist = distanceBetweenPointers();
        if (pinchDist) {
          orbit.radius = clamp(orbit.radius * (pinchDist / dist), 3, limitsRef.current.maxRadius);
          updateCamera();
        }
        pinchDist = dist;
        return;
      }
      if (!dragging) return;
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      lastX = e.clientX; lastY = e.clientY;
      orbit.theta -= dx * 0.006;
      orbit.phi = clamp(orbit.phi - dy * 0.006, 0.15, 1.5);
      updateCamera();
    }
    function onUp(e) {
      pointers.delete(e.pointerId);
      pinchDist = null;
      if (pointers.size === 1) {
        const [[, pt]] = pointers;
        dragging = true; lastX = pt.x; lastY = pt.y;
      } else if (pointers.size === 0) {
        dragging = false;
      }
    }
    function onWheel(e) {
      e.preventDefault();
      orbit.radius = clamp(orbit.radius * (1 + e.deltaY * 0.001), 3, limitsRef.current.maxRadius);
      updateCamera();
    }

    const dom = renderer.domElement;
    dom.style.cursor = 'grab';
    dom.style.touchAction = 'none';
    dom.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    dom.addEventListener('wheel', onWheel, { passive: false });

    function resize() {
      const w = mount.clientWidth, h = mount.clientHeight;
      // A zero-size measurement can happen transiently before layout
      // settles; calling renderer.setSize with a zero dimension can
      // permanently break the WebGL context on some drivers, so skip it
      // and wait for the next real measurement instead.
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    updateCamera();

    const animState = { progress: 0, playing: true, meshes: [] };
    let raf;
    function render() {
      raf = requestAnimationFrame(render);
      if (flagsRef.current.autoRotate && !dragging) {
        orbit.theta += 0.0028;
        updateCamera();
      }
      if (animState.playing) {
        animState.progress = Math.min(1, animState.progress + 0.025);
        animState.meshes.forEach(({ mesh, height, baseY, delay }) => {
          const local = clamp((animState.progress - delay) / (1 - delay), 0, 1);
          const eased = 1 - Math.pow(1 - local, 3);
          mesh.scale.y = Math.max(eased, 0.001);
          mesh.position.y = baseY + (height * eased) / 2;
        });
        if (animState.progress >= 1) animState.playing = false;
      }
      renderer.render(scene, camera);
    }
    render();

    stateRef.current = {
      scene, group, orbit, updateCamera, animState, dirLight: dir,
      center: center0, defaultRadius: center0.radius, defaultTargetY: center0.targetY
    };
    limitsRef.current.maxRadius = Math.max(50, center0.radius * 2);

    return () => {
      cancelAnimationFrame(raf);
      dom.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      dom.removeEventListener('wheel', onWheel);
      ro.disconnect();
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const s = stateRef.current;
    if (!s.group) return;
    const effectiveWallMaterial = renderView ? 'brick' : wallMaterial;
    rebuildGroup(s.group, rooms, stairs, wallHeight, wallColor, s.center, s.animState, textureCacheRef.current, effectiveWallMaterial, { hideRoofs: dollhouse, floorGap, columns });

    if (renderView) {
      const floorBaseYMap = computeFloorBaseYMap(rooms, wallHeight, Math.max(0, ...(stairs || []).map((st) => (st.floor ?? 0) + 1)), floorGap);
      rooms.forEach((r) => {
        if (!r.name) return;
        const roomWallHeight = r.wall_height ?? wallHeight;
        const floorBaseY = floorBaseYMap.get(r.floor ?? 0) ?? 0;
        const cx = r.gx + r.gw / 2 - s.center.x;
        const cz = r.gy + r.gh / 2 - s.center.z;
        const sprite = makeRoomLabelSprite(r.name);
        sprite.position.set(cx, floorBaseY + roomWallHeight * 0.55, cz);
        s.group.add(sprite);
      });
    }

    if (s.dirLight) {
      const radius = s.defaultRadius;
      s.dirLight.position.set(radius * 0.6, Math.max(14, radius * 0.9), radius * 0.45);
      const cam = s.dirLight.shadow.camera;
      cam.left = -radius;
      cam.right = radius;
      cam.top = radius;
      cam.bottom = -radius;
      cam.near = 1;
      const maxWallHeight = Math.max(wallHeight, ...rooms.map((r) => r.wall_height ?? wallHeight));
      cam.far = radius * 3 + maxWallHeight * 2;
      cam.updateProjectionMatrix();
    }
  }, [rooms, stairs, columns, wallHeight, wallColor, wallMaterial, dollhouse, floorGap, renderView]);

  useEffect(() => {
    const s = stateRef.current;
    if (!s.orbit || !s.updateCamera) return;
    const framing = computeCenter(rooms, wallHeight, floorGap);
    s.defaultRadius = framing.radius;
    s.defaultTargetY = framing.targetY;
    s.orbit.target.y = framing.targetY;
    s.orbit.radius = framing.radius;
    limitsRef.current.maxRadius = Math.max(50, framing.radius * 2);
    if (s.scene?.fog) s.scene.fog.far = Math.max(60, framing.radius * 2.6);

    if (dollhouse !== wasDollhouseRef.current) {
      wasDollhouseRef.current = dollhouse;
      if (dollhouse) {
        s.orbit.phi = DOLLHOUSE_PHI;
        s.orbit.theta = DOLLHOUSE_THETA;
      }
    }
    s.updateCamera();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dollhouse, floorGap]);

  useEffect(() => {
    if (resetKey === 0) return;
    const s = stateRef.current;
    if (!s.orbit) return;
    s.orbit.theta = DOLLHOUSE_THETA;
    s.orbit.phi = dollhouse ? DOLLHOUSE_PHI : 1.0;
    s.orbit.radius = s.defaultRadius;
    s.orbit.target.y = s.defaultTargetY ?? s.orbit.target.y;
    s.updateCamera();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      <button
        type="button"
        onClick={() => setResetKey((k) => k + 1)}
        style={{
          position: 'absolute', bottom: 12, right: 12,
          fontSize: 12, fontWeight: 600, color: '#e2e8f0',
          background: 'rgba(15,23,42,0.9)', border: '1px solid #334155',
          borderRadius: 8, padding: '6px 12px', cursor: 'pointer'
        }}
      >
        {t('Reset camera')}
      </button>
    </div>
  );
}
