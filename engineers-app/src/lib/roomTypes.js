// Per-room-type minimum dimensions. Where a real building code sets a
// number, it's used and cited (IRC — International Residential Code, same
// reference already used for door/window/wall sizes in build3d.js):
//
//  - IRC R304.2: a habitable room (bedroom, living room, dining room,
//    office/den — anything "used for living, sleeping, eating") must not
//    have any horizontal dimension less than 7 ft (2.13 m). R304.1 also
//    sets a 70 sq ft (6.5 sqm) minimum floor area for these rooms, which a
//    2.13 x 2.13 minimum already clears (4.54 sqm is below that — the
//    defaultW/defaultH below are sized to comfortably clear the area rule
//    too, since this tool only enforces the dimension rule directly).
//  - IRC R311.6: a corridor/hallway must be at least 36 in (0.91 m) wide.
//
// Kitchens, bathrooms, closets and garages have no code-mandated room
// dimension in the IRC (only fixture clearances, which this tool doesn't
// model) — those minimums below are common practical/buildable sizes, not
// a legal requirement, and are labeled as such in the editor.
export const ROOM_TYPES = [
  { id: 'bedroom', label: 'Bedroom', minW: 2.13, minH: 2.13, defaultW: 3.5, defaultH: 3.5, codeBased: true, codeRef: 'IRC R304.2' },
  { id: 'living_room', label: 'Living Room', minW: 2.13, minH: 2.13, defaultW: 4.5, defaultH: 4, codeBased: true, codeRef: 'IRC R304.2' },
  { id: 'dining_room', label: 'Dining Room', minW: 2.13, minH: 2.13, defaultW: 3.5, defaultH: 3.5, codeBased: true, codeRef: 'IRC R304.2' },
  { id: 'office', label: 'Office', minW: 2.13, minH: 2.13, defaultW: 3, defaultH: 3, codeBased: true, codeRef: 'IRC R304.2' },
  { id: 'kitchen', label: 'Kitchen', minW: 1.5, minH: 2.0, defaultW: 3, defaultH: 3, codeBased: false },
  { id: 'bathroom', label: 'Bathroom', minW: 1.5, minH: 1.5, defaultW: 2, defaultH: 2, codeBased: false },
  { id: 'hallway', label: 'Hallway', minW: 0.91, minH: 1.2, defaultW: 1.2, defaultH: 3, codeBased: true, codeRef: 'IRC R311.6' },
  { id: 'closet', label: 'Closet', minW: 0.6, minH: 0.6, defaultW: 1, defaultH: 1, codeBased: false },
  { id: 'garage', label: 'Garage', minW: 3.0, minH: 5.5, defaultW: 3.5, defaultH: 6, codeBased: false },
  { id: 'other', label: 'Other', minW: 1.5, minH: 1.5, defaultW: 3, defaultH: 3, codeBased: false }
];

export const DEFAULT_ROOM_TYPE_ID = 'other';

export function getRoomType(id) {
  return ROOM_TYPES.find((r) => r.id === id) || ROOM_TYPES.find((r) => r.id === DEFAULT_ROOM_TYPE_ID);
}
