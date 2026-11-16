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
    stairs: [] // Phase 1 is single-floor; kept for shape-compatibility with build3d.js.
  };
}

export function createRectRoom({ name, gx, gy, gw, gh, color }) {
  return {
    id: nextId('room'),
    name: name || 'Room',
    gx, gy, gw, gh,
    color: color || '#cfd6cf',
    floor: 0,
    has_roof: true,
    roof_type: 'flat',
    openings: [],
    furniture: []
  };
}

function createOpening(kind, wall, position) {
  return { id: nextId(kind), kind, wall, position };
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
            ? { ...r, openings: [...r.openings, createOpening(action.kind, action.wall, action.position)] }
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
      addOpening: (roomId, kind, wall, position) => dispatch({ type: 'ADD_OPENING', roomId, kind, wall, position }),
      moveOpening: (roomId, openingId, wall, position) =>
        dispatch({ type: 'MOVE_OPENING', roomId, openingId, wall, position }),
      removeOpening: (roomId, openingId) => dispatch({ type: 'REMOVE_OPENING', roomId, openingId }),
      addFurniture: (roomId, kind, x, y) => dispatch({ type: 'ADD_FURNITURE', roomId, kind, x, y }),
      moveFurniture: (roomId, furnitureId, x, y, rotation) =>
        dispatch({ type: 'MOVE_FURNITURE', roomId, furnitureId, x, y, rotation }),
      removeFurniture: (roomId, furnitureId) => dispatch({ type: 'REMOVE_FURNITURE', roomId, furnitureId })
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

  return { project: state.project, rooms: state.rooms, stairs: state.stairs, actions: { ...actions, addRectRoom } };
}
