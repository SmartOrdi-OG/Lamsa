// Per-room-type minimum dimensions, under any of three selectable code
// standards (project.code_standard: 'irc' | 'eu' | 'uae' — see Toolbar's
// Code Standard picker):
//
//  - 'irc' (International Residential Code, US) — same reference already
//    used for door/window/wall sizes in build3d.js:
//     - IRC R304.2: a habitable room (bedroom, living room, dining room,
//       office/den — anything "used for living, sleeping, eating") must
//       not have any horizontal dimension less than 7 ft (2.13 m). R304.1
//       also sets a 70 sq ft (6.5 sqm) minimum floor area for these
//       rooms, which a 2.13 x 2.13 minimum already clears.
//     - IRC R311.6: a corridor/hallway must be at least 36 in (0.91 m) wide.
//
//  - 'eu' (Europe) — unlike the IRC, there is no single pan-European
//    "Eurocode" room-dimension rule (EN 1990-1999 cover structural
//    design — loads, concrete, steel — not habitable-room minimums);
//    those are set by each country's own building code and vary. Where a
//    specific, real, widely-referenced standard exists it's cited by
//    name (DIN 18065 for stairs); everything else here is a commonly
//    cited European minimum, honestly labeled "EU practice (varies by
//    country)" rather than invented as a fake precise clause.
//
//  - 'uae' (Dubai Building Code 2021, DBC) — verified against the actual
//    code text (DBC 2021, Part K p. K40, clause K.5.5.2.2 — confirmed via
//    a code-compliance report that reproduces the clause page) only for
//    the villa stairway minimum width (see build3d.js's
//    STAIR_MIN_WIDTH_UAE). DBC Part B ("Architecture") is documented to
//    define its own "minimum space requirements", but no publicly
//    available copy of that specific clause/number was confirmed here —
//    rather than invent one, habitable-room and hallway minimums are
//    honestly labeled "UAE practice (DBC Part B minimum not verified)"
//    using the same representative values as 'eu'.
//
// Kitchens, bathrooms, closets and garages have no code-mandated room
// dimension under any standard (only fixture clearances, which this tool
// doesn't model) — those minimums are common practical/buildable sizes,
// not a legal requirement, and are labeled as such in the editor; they're
// the same under all three standards for that reason.
export const ROOM_TYPES = [
  {
    id: 'bedroom', label: 'Bedroom', defaultW: 3.5, defaultH: 3.5, codeBased: true,
    irc: { minW: 2.13, minH: 2.13, codeRef: 'IRC R304.2' },
    eu: { minW: 2.00, minH: 2.00, codeRef: 'EU practice (varies by country)' },
    uae: { minW: 2.00, minH: 2.00, codeRef: 'UAE practice (DBC Part B minimum not verified)' }
  },
  {
    id: 'living_room', label: 'Living Room', defaultW: 4.5, defaultH: 4, codeBased: true,
    irc: { minW: 2.13, minH: 2.13, codeRef: 'IRC R304.2' },
    eu: { minW: 2.00, minH: 2.00, codeRef: 'EU practice (varies by country)' },
    uae: { minW: 2.00, minH: 2.00, codeRef: 'UAE practice (DBC Part B minimum not verified)' }
  },
  {
    id: 'dining_room', label: 'Dining Room', defaultW: 3.5, defaultH: 3.5, codeBased: true,
    irc: { minW: 2.13, minH: 2.13, codeRef: 'IRC R304.2' },
    eu: { minW: 2.00, minH: 2.00, codeRef: 'EU practice (varies by country)' },
    uae: { minW: 2.00, minH: 2.00, codeRef: 'UAE practice (DBC Part B minimum not verified)' }
  },
  {
    id: 'office', label: 'Office', defaultW: 3, defaultH: 3, codeBased: true,
    irc: { minW: 2.13, minH: 2.13, codeRef: 'IRC R304.2' },
    eu: { minW: 2.00, minH: 2.00, codeRef: 'EU practice (varies by country)' },
    uae: { minW: 2.00, minH: 2.00, codeRef: 'UAE practice (DBC Part B minimum not verified)' }
  },
  {
    id: 'kitchen', label: 'Kitchen', defaultW: 3, defaultH: 3, codeBased: false,
    irc: { minW: 1.5, minH: 2.0 }, eu: { minW: 1.5, minH: 2.0 }, uae: { minW: 1.5, minH: 2.0 }
  },
  {
    id: 'bathroom', label: 'Bathroom', defaultW: 2, defaultH: 2, codeBased: false,
    irc: { minW: 1.5, minH: 1.5 }, eu: { minW: 1.5, minH: 1.5 }, uae: { minW: 1.5, minH: 1.5 }
  },
  {
    id: 'hallway', label: 'Hallway', defaultW: 1.2, defaultH: 3, codeBased: true,
    irc: { minW: 0.91, minH: 1.2, codeRef: 'IRC R311.6' },
    eu: { minW: 1.00, minH: 1.2, codeRef: 'EU practice (varies by country)' },
    uae: { minW: 1.00, minH: 1.2, codeRef: 'UAE practice (DBC Part B minimum not verified)' }
  },
  {
    id: 'closet', label: 'Closet', defaultW: 1, defaultH: 1, codeBased: false,
    irc: { minW: 0.6, minH: 0.6 }, eu: { minW: 0.6, minH: 0.6 }, uae: { minW: 0.6, minH: 0.6 }
  },
  {
    id: 'garage', label: 'Garage', defaultW: 3.5, defaultH: 6, codeBased: false,
    irc: { minW: 3.0, minH: 5.5 }, eu: { minW: 3.0, minH: 5.5 }, uae: { minW: 3.0, minH: 5.5 }
  },
  {
    id: 'other', label: 'Other', defaultW: 3, defaultH: 3, codeBased: false,
    irc: { minW: 1.5, minH: 1.5 }, eu: { minW: 1.5, minH: 1.5 }, uae: { minW: 1.5, minH: 1.5 }
  }
];

export const DEFAULT_ROOM_TYPE_ID = 'other';
export const DEFAULT_CODE_STANDARD = 'irc';

export function getRoomType(id, standard = DEFAULT_CODE_STANDARD) {
  const rt = ROOM_TYPES.find((r) => r.id === id) || ROOM_TYPES.find((r) => r.id === DEFAULT_ROOM_TYPE_ID);
  const dims = rt[standard] || rt.irc;
  return { ...rt, minW: dims.minW, minH: dims.minH, codeRef: dims.codeRef };
}
