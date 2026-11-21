import { useReducer, useMemo, useCallback } from 'react';

// The data model lives here as plain objects, matching the shape the
// ported lib/build3d.js + lib/planGeometry.js already expect (see
// lib/types.js's Room/Opening/FurnitureItem/Stair JSDoc typedefs) — this is
// the denormalized per-project blob the backend (api/me.js's
// view=engineer / action=engineer_save) stores and returns as-is.
//
// Deliberately NOT modeled after architect-studio-360's ArchitectStudio.jsx
// (which interleaved this data model with React state updates AND
// Supabase persistence in ~30 handler functions). Here, the model is a
// plain reducer with pure action creators; persistence is a separate,
// explicit save step the UI triggers (see api/client.js's saveProject),
// never implicit inside a setter.

let idCounter = 0;
function nextId(prefix) {
  idCounter += 1;
  return prefix + '_' + Date.now().toString(36) + '_' + idCounter;
}

// Standard "comfortable" ceiling height per common building codes
// (IBC/IRC's habitable-room minimum is 2.13 m; 2.7 m is the usual
// residential default above that minimum) — editable per project.
export const DEFAULT_WALL_HEIGHT = 2.7;
export const DEFAULT_WALL_COLOR = '#e8e2d8';
export const DEFAULT_WALL_MATERIAL = 'plaster';

export function createEmptyProject(name) {
  return {
    project: {
      id: null,
      name: name || 'Untitled Project',
      wall_height: DEFAULT_WALL_HEIGHT,
      wall_color: DEFAULT_WALL_COLOR,
      wall_material: DEFAULT_WALL_MATERIAL
    },
    rooms: [],
    stairs: [], // Phase 1 is single-floor; kept for shape-compatibility with build3d.js.
    columns: []
  };
}

export function createRectRoom({ name, gx, gy, gw, gh, color, floor = 0, room_type = 'other' }) {
  return {
    id: nextId('room'),
    name: name || 'Room',
    room_type,
    gx, gy, gw, gh,
    color: color || '#cfd6cf',
    floor,
    has_roof: true,
    roof_type: 'flat',
    openings: [],
    furniture: []
  };
}

// Free-form room: gx/gy/gw/gh stays a valid bounding box (computed here from
// `points`) even though it's not used to draw the shape itself — build3d.js
// and planGeometry.js both rely on that bounding box staying accurate for
// centering/grid math, see lib/build3d.js's roomArea comment.
export function createPolygonRoom({ name, points, color, floor = 0, room_type = 'other' }) {
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const gx = Math.min(...xs), gy = Math.min(...ys);
  const gw = Math.max(...xs) - gx, gh = Math.max(...ys) - gy;
  return {
    id: nextId('room'),
    name: name || 'Room',
    room_type,
    points, gx, gy, gw, gh,
    color: color || '#cfd6cf',
    floor,
    has_roof: true,
    roof_type: 'flat',
    openings: [],
    furniture: []
  };
}

export function createStair({ floor = 0, x, y, rotation = 0 }) {
  return { id: nextId('stair'), floor, x, y, rotation };
}

export function createColumn({ floor = 0, x, y }) {
  return { id: nextId('column'), floor, x, y };
}

function createOpening(kind, wall, edgeIndex, position) {
  const o = { id: nextId(kind), kind, position };
  if (edgeIndex != null) o.edge_index = edgeIndex;
  else o.wall = wall;
  return o;
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PROJECT': {
      return action.project;
    }
    case 'SET_META': {
      return { ...state, project: { ...state.project, ...action.patch } };
    }
    case 'ADD_ROOM': {
      return { ...state, rooms: [...state.rooms, action.room] };
    }
    case 'UPDATE_ROOM': {
      return {
        ...state,
        rooms: state.rooms.map((r) => (r.id === action.roomId ? { ...r, ...action.patch } : r))
      };
    }
    case 'REMOVE_ROOM': {
      return { ...state, rooms: state.rooms.filter((r) => r.id !== action.roomId) };
    }
    case 'ADD_OPENING': {
      return {
        ...state,
        rooms: state.rooms.map((r) =>
          r.id === action.roomId
            ? { ...r, openings: [...r.openings, createOpening(action.kind, action.wall, action.edgeIndex, action.position)] }
            : r
        )
      };
    }
    case 'MOVE_OPENING': {
      return {
        ...state,
        rooms: state.rooms.map((r) =>
          r.id === action.roomId
            ? {
                ...r,
                openings: r.openings.map((o) =>
                  o.id === action.openingId ? { ...o, wall: action.wall, position: action.position } : o
                )
              }
            : r
        )
      };
    }
    case 'REMOVE_OPENING': {
      return {
        ...state,
        rooms: state.rooms.map((r) =>
          r.id === action.roomId ? { ...r, openings: r.openings.filter((o) => o.id !== action.openingId) } : r
        )
      };
    }
    case 'ADD_FURNITURE': {
      const item = { id: nextId('furn'), kind: action.kind, x: action.x, y: action.y, rotation: 0 };
      return {
        ...state,
        rooms: state.rooms.map((r) => (r.id === action.roomId ? { ...r, furniture: [...r.furniture, item] } : r))
      };
    }
    case 'MOVE_FURNITURE': {
      return {
        ...state,
        rooms: state.rooms.map((r) =>
          r.id === action.roomId
            ? {
                ...r,
                furniture: r.furniture.map((f) =>
                  f.id === action.furnitureId ? { ...f, x: action.x, y: action.y, rotation: action.rotation ?? f.rotation } : f
                )
              }
            : r
        )
      };
    }
    case 'REMOVE_FURNITURE': {
      return {
        ...state,
        rooms: state.rooms.map((r) =>
          r.id === action.roomId ? { ...r, furniture: r.furniture.filter((f) => f.id !== action.furnitureId) } : r
        )
      };
    }
    case 'ADD_STAIR': {
      return { ...state, stairs: [...state.stairs, action.stair] };
    }
    case 'MOVE_STAIR': {
      return {
        ...state,
        stairs: state.stairs.map((s) =>
          s.id === action.stairId ? { ...s, x: action.x, y: action.y, rotation: action.rotation ?? s.rotation } : s
        )
      };
    }
    case 'UPDATE_STAIR': {
      return {
        ...state,
        stairs: state.stairs.map((s) => (s.id === action.stairId ? { ...s, ...action.patch } : s))
      };
    }
    case 'REMOVE_STAIR': {
      return { ...state, stairs: state.stairs.filter((s) => s.id !== action.stairId) };
    }
    case 'ADD_COLUMN': {
      return { ...state, columns: [...(state.columns || []), action.column] };
    }
    case 'MOVE_COLUMN': {
      return {
        ...state,
        columns: (state.columns || []).map((c) => (c.id === action.columnId ? { ...c, x: action.x, y: action.y } : c))
      };
    }
    case 'REMOVE_COLUMN': {
      return { ...state, columns: (state.columns || []).filter((c) => c.id !== action.columnId) };
    }
    default:
      return state;
  }
}

export function useProjectStore(initialProject) {
  const [state, dispatch] = useReducer(reducer, initialProject || createEmptyProject());

  const actions = useMemo(
    () => ({
      setProject: (project) => dispatch({ type: 'SET_PROJECT', project }),
      setMeta: (patch) => dispatch({ type: 'SET_META', patch }),
      addRoom: (room) => dispatch({ type: 'ADD_ROOM', room }),
      updateRoom: (roomId, patch) => dispatch({ type: 'UPDATE_ROOM', roomId, patch }),
      removeRoom: (roomId) => dispatch({ type: 'REMOVE_ROOM', roomId }),
      addOpening: (roomId, kind, wall, edgeIndex, position) =>
        dispatch({ type: 'ADD_OPENING', roomId, kind, wall, edgeIndex, position }),
      moveOpening: (roomId, openingId, wall, position) =>
        dispatch({ type: 'MOVE_OPENING', roomId, openingId, wall, position }),
      removeOpening: (roomId, openingId) => dispatch({ type: 'REMOVE_OPENING', roomId, openingId }),
      addFurniture: (roomId, kind, x, y) => dispatch({ type: 'ADD_FURNITURE', roomId, kind, x, y }),
      moveFurniture: (roomId, furnitureId, x, y, rotation) =>
        dispatch({ type: 'MOVE_FURNITURE', roomId, furnitureId, x, y, rotation }),
      removeFurniture: (roomId, furnitureId) => dispatch({ type: 'REMOVE_FURNITURE', roomId, furnitureId }),
      addStair: (stair) => dispatch({ type: 'ADD_STAIR', stair }),
      moveStair: (stairId, x, y, rotation) => dispatch({ type: 'MOVE_STAIR', stairId, x, y, rotation }),
      updateStair: (stairId, patch) => dispatch({ type: 'UPDATE_STAIR', stairId, patch }),
      removeStair: (stairId) => dispatch({ type: 'REMOVE_STAIR', stairId }),
      addColumn: (column) => dispatch({ type: 'ADD_COLUMN', column }),
      moveColumn: (columnId, x, y) => dispatch({ type: 'MOVE_COLUMN', columnId, x, y }),
      removeColumn: (columnId) => dispatch({ type: 'REMOVE_COLUMN', columnId })
    }),
    []
  );

  const addRectRoom = useCallback(
    (opts) => {
      const room = createRectRoom(opts);
      actions.addRoom(room);
      return room;
    },
    [actions]
  );

  const addPolygonRoom = useCallback(
    (opts) => {
      const room = createPolygonRoom(opts);
      actions.addRoom(room);
      return room;
    },
    [actions]
  );

  return {
    project: state.project,
    rooms: state.rooms,
    stairs: state.stairs,
    columns: state.columns || [],
    actions: { ...actions, addRectRoom, addPolygonRoom }
  };
}
