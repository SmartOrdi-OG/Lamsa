import { useEffect, useRef, useState } from 'react';
import {
  PPM, snap, clientToPlanMeters, hitTestWalls, hitTestOpenings, openingMarkPoints,
  drawRoomDimensions, drawDoorSwing, pointInPolygon, hitTestStairs, hitTestGridForStair,
  floorToFloorHeight, stairEffectiveFootprint, drawStairSymbol
} from '../lib/planGeometry.js';
import { DOOR_W, WIN_W, WALL_T, stairFootprint, COLUMN_SIZE } from '../lib/build3d.js';

// A fixed meters-based hit tolerance shrinks to almost nothing in actual
// screen pixels once the canvas is scaled down to fit a phone-width
// container (see PlanEditor2D's canvas style) — a 0.35m target that's a
// comfortable 11px at full desktop resolution becomes ~6px on a phone,
// which is well under a fingertip and made closing a polygon or grabbing
// a column nearly impossible by touch. TOUCH_TOLERANCE_PX is a constant
// *screen*-pixel target instead, converted to meters against the canvas's
// actual displayed size at hit-test time, so it stays a real fingertip's
// worth of target on any device/zoom level.
const TOUCH_TOLERANCE_PX = 24;

// Phase 1 scope was rectangular rooms on a single floor. Phase 2 adds
// multi-floor editing (one floor shown/edited at a time, via `activeFloor`),
// free-form polygon rooms (click-to-add-vertices), and stairs — all three
// reuse geometry/hit-testing already ported into lib/planGeometry.js and
// lib/build3d.js (this file never had to invent new math for them).
const MIN_ROOM_SIZE = 1.5;
const ROOM_COLORS = ['#cfd6cf', '#d8cfc2', '#c9d3df', '#dccfd6', '#cfd8d3'];

export default function PlanEditor2D({
  rooms,       // ALL floors — height/stair calcs need the full list
  stairs,      // ALL floors
  columns = [], // ALL floors
  wallHeight,
  gridW = 20,
  gridH = 16,
  mode,
  activeFloor = 0,
  selectedRoomId,
  selectedOpening,
  selectedStairId,
  selectedColumnId,
  onAddRoom,
  onAddPolygonRoom,
  onMoveRoom,
  onResizeRoom,
  onMovePolygonRoom,
  onSelectRoom,
  onAddOpening,
  onSelectOpening,
  onAddStair,
  onMoveStair,
  onSelectStair,
  onAddColumn,
  onMoveColumn,
  onSelectColumn
}) {
  const canvasRef = useRef(null);
  const dragRef = useRef(null); // { kind: 'new-room'|'move'|'resize'|'move-polygon'|'move-stair', ... }
  const [polyPoints, setPolyPoints] = useState(null); // vertices being placed in 'polygon' mode
  const [cursor, setCursor] = useState(null);

  const floorRooms = rooms.filter((r) => (r.floor ?? 0) === activeFloor);
  const floorStairs = stairs.filter((s) => (s.floor ?? 0) === activeFloor);
  const floorColumns = columns.filter((c) => (c.floor ?? 0) === activeFloor);
  const floorToFloorH = floorToFloorHeight(rooms, activeFloor, wallHeight);

  // Leaving polygon-drawing mid-shape (switching tools) should not leave a
  // half-drawn polygon lying around.
  useEffect(() => {
    if (mode !== 'polygon') setPolyPoints(null);
  }, [mode]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape' && polyPoints) setPolyPoints(null);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [polyPoints]);

  function drawRoomShape(ctx, room, isSelected, fillColor) {
    if (room.points) {
      ctx.beginPath();
      room.points.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p.x * PPM, p.y * PPM);
        else ctx.lineTo(p.x * PPM, p.y * PPM);
      });
      ctx.closePath();
      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.strokeStyle = isSelected ? '#c9a96e' : '#4b5563';
      ctx.lineWidth = Math.max(2, WALL_T * PPM);
      ctx.stroke();
    } else {
      ctx.fillStyle = fillColor;
      ctx.fillRect(room.gx * PPM, room.gy * PPM, room.gw * PPM, room.gh * PPM);
      ctx.strokeStyle = isSelected ? '#c9a96e' : '#4b5563';
      ctx.lineWidth = Math.max(2, WALL_T * PPM);
      ctx.strokeRect(room.gx * PPM, room.gy * PPM, room.gw * PPM, room.gh * PPM);
    }
  }

  function draw() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Grid background.
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let x = 0; x <= gridW; x++) {
      ctx.beginPath();
      ctx.moveTo(x * PPM, 0);
      ctx.lineTo(x * PPM, gridH * PPM);
      ctx.stroke();
    }
    for (let y = 0; y <= gridH; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * PPM);
      ctx.lineTo(gridW * PPM, y * PPM);
      ctx.stroke();
    }

    floorRooms.forEach((room, i) => {
      const isSelected = room.id === selectedRoomId;
      drawRoomShape(ctx, room, isSelected, room.color || ROOM_COLORS[i % ROOM_COLORS.length]);

      const cx = room.points ? room.points.reduce((s, p) => s + p.x, 0) / room.points.length : room.gx + room.gw / 2;
      const cy = room.points ? room.points.reduce((s, p) => s + p.y, 0) / room.points.length : room.gy + room.gh / 2;
      ctx.fillStyle = '#1b1e22';
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(room.name, cx * PPM, cy * PPM);

      drawRoomDimensions(ctx, room, { line: '#9ca3af', text: '#6b7280' });

      (room.openings || []).forEach((o) => {
        const width = o.kind === 'door' ? DOOR_W : WIN_W;
        const m = openingMarkPoints(room, o, width);
        const isOpeningSelected = selectedOpening && selectedOpening.roomId === room.id && selectedOpening.openingId === o.id;
        ctx.save();
        ctx.strokeStyle = isOpeningSelected ? '#c9a96e' : (o.kind === 'door' ? '#8b5e34' : '#3b82f6');
        ctx.lineWidth = Math.max(3, WALL_T * PPM + 2);
        ctx.beginPath();
        ctx.moveTo(m.x1 * PPM, m.y1 * PPM);
        ctx.lineTo(m.x2 * PPM, m.y2 * PPM);
        ctx.stroke();
        ctx.restore();
        if (o.kind === 'door') drawDoorSwing(ctx, room, o, isOpeningSelected ? '#c9a96e' : '#8b5e34');
      });

      // Resize handle, bottom-right corner, only for rectangular rooms when selected.
      if (isSelected && !room.points) {
        ctx.fillStyle = '#c9a96e';
        const hx = (room.gx + room.gw) * PPM, hy = (room.gy + room.gh) * PPM;
        ctx.fillRect(hx - 6, hy - 6, 12, 12);
      }
    });

    floorStairs.forEach((s) => {
      const rotation = s.rotation || 0;
      const { w, d } = stairEffectiveFootprint(floorToFloorH, rotation);
      const isSelected = s.id === selectedStairId;
      const x0 = (s.x - w / 2) * PPM, y0 = (s.y - d / 2) * PPM;
      ctx.strokeStyle = isSelected ? '#c9a96e' : '#6b5e3a';
      ctx.lineWidth = 2;
      ctx.strokeRect(x0, y0, w * PPM, d * PPM);
      drawStairSymbol(ctx, x0, y0, w, d, rotation, stairFootprint(floorToFloorH).numSteps, isSelected ? '#c9a96e' : '#6b5e3a');
    });

    floorColumns.forEach((c) => {
      const isSelected = c.id === selectedColumnId;
      const half = COLUMN_SIZE / 2;
      ctx.fillStyle = isSelected ? '#c9a96e' : '#6b7280';
      ctx.fillRect((c.x - half) * PPM, (c.y - half) * PPM, COLUMN_SIZE * PPM, COLUMN_SIZE * PPM);
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 1;
      ctx.strokeRect((c.x - half) * PPM, (c.y - half) * PPM, COLUMN_SIZE * PPM, COLUMN_SIZE * PPM);
    });

    // Live preview while placing a polygon room.
    if (polyPoints && polyPoints.length) {
      ctx.strokeStyle = '#c9a96e';
      ctx.lineWidth = 2;
      ctx.beginPath();
      polyPoints.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p.x * PPM, p.y * PPM);
        else ctx.lineTo(p.x * PPM, p.y * PPM);
      });
      if (cursor) ctx.lineTo(cursor.x * PPM, cursor.y * PPM);
      ctx.stroke();
      ctx.fillStyle = '#c9a96e';
      polyPoints.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x * PPM, p.y * PPM, 4, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    const drag = dragRef.current;
    if (drag && drag.kind === 'new-room') {
      const x = Math.min(drag.startX, drag.curX), y = Math.min(drag.startY, drag.curY);
      const w = Math.abs(drag.curX - drag.startX), h = Math.abs(drag.curY - drag.startY);
      ctx.strokeStyle = '#c9a96e';
      ctx.setLineDash([6, 4]);
      ctx.lineWidth = 2;
      ctx.strokeRect(x * PPM, y * PPM, w * PPM, h * PPM);
      ctx.setLineDash([]);
    }
  }

  useEffect(draw);

  function toPlan(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    return clientToPlanMeters(e.clientX, e.clientY, rect, gridW, gridH);
  }

  function touchToleranceMeters() {
    const rect = canvasRef.current && canvasRef.current.getBoundingClientRect();
    if (!rect || !rect.width) return TOUCH_TOLERANCE_PX / PPM;
    return TOUCH_TOLERANCE_PX / (rect.width / gridW);
  }

  function roomAt(cx, cy) {
    return floorRooms.find((r) =>
      r.points ? pointInPolygon(r.points, cx, cy) : (cx >= r.gx && cx <= r.gx + r.gw && cy >= r.gy && cy <= r.gy + r.gh)
    );
  }

  function handlePointerDown(e) {
    const { x: cx, y: cy } = toPlan(e);

    if (mode === 'room') {
      dragRef.current = { kind: 'new-room', startX: snap(cx), startY: snap(cy), curX: cx, curY: cy };
      draw();
      return;
    }

    if (mode === 'polygon') {
      const pt = { x: snap(cx), y: snap(cy) };
      if (polyPoints && polyPoints.length >= 3) {
        const first = polyPoints[0];
        if (Math.hypot(pt.x - first.x, pt.y - first.y) <= touchToleranceMeters()) {
          onAddPolygonRoom(polyPoints);
          setPolyPoints(null);
          return;
        }
      }
      setPolyPoints((prev) => (prev ? [...prev, pt] : [pt]));
      return;
    }

    if (mode === 'door' || mode === 'window') {
      const width = mode === 'door' ? DOOR_W : WIN_W;
      const hit = hitTestWalls(floorRooms, cx, cy, width, mode);
      if (hit) onAddOpening(hit.roomId, mode, hit.wall, hit.edgeIndex, hit.position);
      return;
    }

    if (mode === 'stairs') {
      const placed = hitTestGridForStair(gridW, gridH, snap(cx), snap(cy), floorToFloorH, 0);
      if (placed) onAddStair({ floor: activeFloor, x: placed.x, y: placed.y, rotation: 0 });
      return;
    }

    if (mode === 'column') {
      onAddColumn({ floor: activeFloor, x: snap(cx), y: snap(cy) });
      return;
    }

    // select mode: openings, then stairs, then columns, then room body/handle.
    const openingHit = hitTestOpenings(floorRooms, cx, cy);
    if (openingHit) {
      onSelectOpening({ roomId: openingHit.roomId, openingId: openingHit.id });
      onSelectStair(null);
      onSelectColumn(null);
      return;
    }
    onSelectOpening(null);

    const stairHit = hitTestStairs(floorStairs, rooms, wallHeight, cx, cy);
    if (stairHit) {
      onSelectStair(stairHit.id);
      onSelectColumn(null);
      onSelectRoom(null);
      dragRef.current = { kind: 'move-stair', stairId: stairHit.id, offsetX: cx - stairHit.x, offsetY: cy - stairHit.y, rotation: stairHit.rotation };
      return;
    }
    onSelectStair(null);

    const colTolerance = touchToleranceMeters();
    const columnHit = floorColumns.find((c) => Math.hypot(cx - c.x, cy - c.y) <= colTolerance);
    if (columnHit) {
      onSelectColumn(columnHit.id);
      onSelectRoom(null);
      dragRef.current = { kind: 'move-column', columnId: columnHit.id, offsetX: cx - columnHit.x, offsetY: cy - columnHit.y };
      return;
    }
    onSelectColumn(null);

    const room = roomAt(cx, cy);
    if (!room) {
      onSelectRoom(null);
      return;
    }
    onSelectRoom(room.id);

    if (room.points) {
      dragRef.current = { kind: 'move-polygon', roomId: room.id, startPoints: room.points, offsetX: cx, offsetY: cy };
      return;
    }

    const handleX = room.gx + room.gw, handleY = room.gy + room.gh;
    const isHandle = Math.abs(cx - handleX) < 0.25 && Math.abs(cy - handleY) < 0.25;
    dragRef.current = isHandle
      ? { kind: 'resize', roomId: room.id, startGx: room.gx, startGy: room.gy }
      : { kind: 'move', roomId: room.id, offsetX: cx - room.gx, offsetY: cy - room.gy };
  }

  function handlePointerMove(e) {
    if (mode === 'polygon' && polyPoints) {
      const { x: cx, y: cy } = toPlan(e);
      setCursor({ x: snap(cx), y: snap(cy) });
      return;
    }

    const drag = dragRef.current;
    if (!drag) return;
    const { x: cx, y: cy } = toPlan(e);

    if (drag.kind === 'new-room') {
      drag.curX = cx;
      drag.curY = cy;
      draw();
      return;
    }
    if (drag.kind === 'move') {
      const room = rooms.find((r) => r.id === drag.roomId);
      if (!room) return;
      const gx = snap(Math.max(0, Math.min(gridW - room.gw, cx - drag.offsetX)));
      const gy = snap(Math.max(0, Math.min(gridH - room.gh, cy - drag.offsetY)));
      onMoveRoom(drag.roomId, gx, gy);
      return;
    }
    if (drag.kind === 'move-polygon') {
      const dx = snap(cx - drag.offsetX), dy = snap(cy - drag.offsetY);
      if (dx === 0 && dy === 0) return;
      const translated = drag.startPoints.map((p) => ({ x: p.x + dx, y: p.y + dy }));
      onMovePolygonRoom(drag.roomId, translated);
      return;
    }
    if (drag.kind === 'resize') {
      const gw = snap(Math.max(MIN_ROOM_SIZE, cx - drag.startGx));
      const gh = snap(Math.max(MIN_ROOM_SIZE, cy - drag.startGy));
      onResizeRoom(drag.roomId, gw, gh);
      return;
    }
    if (drag.kind === 'move-stair') {
      const placed = hitTestGridForStair(gridW, gridH, snap(cx - drag.offsetX), snap(cy - drag.offsetY), floorToFloorH, drag.rotation);
      if (placed) onMoveStair(drag.stairId, placed.x, placed.y, drag.rotation);
      return;
    }
    if (drag.kind === 'move-column') {
      const x = snap(Math.max(0, Math.min(gridW, cx - drag.offsetX)));
      const y = snap(Math.max(0, Math.min(gridH, cy - drag.offsetY)));
      onMoveColumn(drag.columnId, x, y);
    }
  }

  function handlePointerUp() {
    const drag = dragRef.current;
    if (drag && drag.kind === 'new-room') {
      const x = snap(Math.min(drag.startX, drag.curX));
      const y = snap(Math.min(drag.startY, drag.curY));
      const w = Math.max(MIN_ROOM_SIZE, snap(Math.abs(drag.curX - drag.startX)));
      const h = Math.max(MIN_ROOM_SIZE, snap(Math.abs(drag.curY - drag.startY)));
      onAddRoom({ gx: x, gy: y, gw: w, gh: h, floor: activeFloor });
    }
    dragRef.current = null;
    draw();
  }

  return (
    <canvas
      ref={canvasRef}
      width={gridW * PPM}
      height={gridH * PPM}
      style={{
        background: '#fff', touchAction: 'none', cursor: mode === 'select' ? 'default' : 'crosshair',
        // The canvas's pixel grid stays fixed (gridW/gridH * PPM) so drawing
        // math never changes, but it's allowed to shrink to fit a narrow
        // container instead of overflowing — clientToPlanMeters() already
        // maps clicks by ratio against the canvas's *displayed* rect, so
        // this scaling never throws off hit-testing or room placement.
        maxWidth: '100%', height: 'auto', display: 'block'
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    />
  );
}
