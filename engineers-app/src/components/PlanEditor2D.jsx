import { useEffect, useRef } from 'react';
import {
  PPM, snap, clientToPlanMeters, hitTestWalls, hitTestOpenings, openingMarkPoints,
  drawRoomDimensions, drawDoorSwing
} from '../lib/planGeometry.js';
import { DOOR_W, WIN_W, WALL_T } from '../lib/build3d.js';

// A fresh, intentionally simple 2D editor — Phase 1 scope is rectangular
// rooms on a single floor, so this does NOT port architect-studio-360's
// ArchitectStudio.jsx (which also handled polygon rooms, multi-floor,
// furniture placement, and undo/redo all in one component). It reuses
// that app's plan-geometry *math* (lib/planGeometry.js, lib/build3d.js's
// constants) for snapping, wall hit-testing, dimension lines, and the
// door-swing symbol, so the numbers/visuals match what the ported
// lib/build3d.js will later render in 3D.
const MIN_ROOM_SIZE = 1.5;
const ROOM_COLORS = ['#cfd6cf', '#d8cfc2', '#c9d3df', '#dccfd6', '#cfd8d3'];

export default function PlanEditor2D({
  rooms,
  gridW = 20,
  gridH = 16,
  mode,
  selectedRoomId,
  selectedOpening,
  onAddRoom,
  onMoveRoom,
  onResizeRoom,
  onSelectRoom,
  onAddOpening,
  onSelectOpening
}) {
  const canvasRef = useRef(null);
  const dragRef = useRef(null); // { kind: 'new-room'|'move'|'resize', startX, startY, roomId? }

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

    rooms.forEach((room, i) => {
      const isSelected = room.id === selectedRoomId;
      ctx.fillStyle = room.color || ROOM_COLORS[i % ROOM_COLORS.length];
      ctx.fillRect(room.gx * PPM, room.gy * PPM, room.gw * PPM, room.gh * PPM);
      ctx.strokeStyle = isSelected ? '#c9a96e' : '#4b5563';
      ctx.lineWidth = Math.max(2, WALL_T * PPM);
      ctx.strokeRect(room.gx * PPM, room.gy * PPM, room.gw * PPM, room.gh * PPM);

      ctx.fillStyle = '#1b1e22';
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(room.name, (room.gx + room.gw / 2) * PPM, (room.gy + room.gh / 2) * PPM);

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

      // Resize handle, bottom-right corner, only when selected.
      if (isSelected) {
        ctx.fillStyle = '#c9a96e';
        const hx = (room.gx + room.gw) * PPM, hy = (room.gy + room.gh) * PPM;
        ctx.fillRect(hx - 6, hy - 6, 12, 12);
      }
    });

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

  function roomAt(cx, cy) {
    return rooms.find((r) => cx >= r.gx && cx <= r.gx + r.gw && cy >= r.gy && cy <= r.gy + r.gh);
  }

  function handlePointerDown(e) {
    const { x: cx, y: cy } = toPlan(e);

    if (mode === 'room') {
      dragRef.current = { kind: 'new-room', startX: snap(cx), startY: snap(cy), curX: cx, curY: cy };
      draw();
      return;
    }

    if (mode === 'door' || mode === 'window') {
      const width = mode === 'door' ? DOOR_W : WIN_W;
      const hit = hitTestWalls(rooms, cx, cy, width, mode);
      if (hit) onAddOpening(hit.roomId, mode, hit.wall, hit.position);
      return;
    }

    // select mode: openings first (small targets), then room body/handle.
    const openingHit = hitTestOpenings(rooms, cx, cy);
    if (openingHit) {
      onSelectOpening({ roomId: openingHit.roomId, openingId: openingHit.id });
      return;
    }
    onSelectOpening(null);

    const room = roomAt(cx, cy);
    if (!room) {
      onSelectRoom(null);
      return;
    }
    onSelectRoom(room.id);

    const handleX = room.gx + room.gw, handleY = room.gy + room.gh;
    const isHandle = Math.abs(cx - handleX) < 0.25 && Math.abs(cy - handleY) < 0.25;
    dragRef.current = isHandle
      ? { kind: 'resize', roomId: room.id, startGx: room.gx, startGy: room.gy }
      : { kind: 'move', roomId: room.id, offsetX: cx - room.gx, offsetY: cy - room.gy };
  }

  function handlePointerMove(e) {
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
    if (drag.kind === 'resize') {
      const gw = snap(Math.max(MIN_ROOM_SIZE, cx - drag.startGx));
      const gh = snap(Math.max(MIN_ROOM_SIZE, cy - drag.startGy));
      onResizeRoom(drag.roomId, gw, gh);
    }
  }

  function handlePointerUp() {
    const drag = dragRef.current;
    if (drag && drag.kind === 'new-room') {
      const x = snap(Math.min(drag.startX, drag.curX));
      const y = snap(Math.min(drag.startY, drag.curY));
      const w = Math.max(MIN_ROOM_SIZE, snap(Math.abs(drag.curX - drag.startX)));
      const h = Math.max(MIN_ROOM_SIZE, snap(Math.abs(drag.curY - drag.startY)));
      onAddRoom({ gx: x, gy: y, gw: w, gh: h });
    }
    dragRef.current = null;
    draw();
  }

  return (
    <canvas
      ref={canvasRef}
      width={gridW * PPM}
      height={gridH * PPM}
      style={{ background: '#fff', touchAction: 'none', cursor: mode === 'select' ? 'default' : 'crosshair' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    />
  );
}
