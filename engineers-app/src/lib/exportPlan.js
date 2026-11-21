import { drawFloorPlanImage } from './planGeometry.js';

// Client-side only — no backend involvement. drawFloorPlanImage already
// returns a ready PNG data URL for the given floor's rooms.
export function exportPlanImage(rooms, gridW, gridH, meta) {
  return drawFloorPlanImage(rooms, gridW, gridH, meta);
}
