import { useEffect, useRef, useState } from 'react';
import { FLOOR_CAP, floorLabel } from '../lib/planGeometry.js';
import { ROOM_TYPES, getRoomType } from '../lib/roomTypes.js';
import { STAIR_WIDTH, stairMinWidth, stairMinWidthCodeRef } from '../lib/build3d.js';

// A plain `value={someNumber}` controlled input fights the user the
// moment they clear it to type a new number: an empty field parses to
// NaN, the old onChange fell back to the previous value, and React
// immediately re-renders the input back to showing that old value —
// so backspacing visibly did nothing ("the number won't clear/won't
// change"). This keeps its own local text so the field can sit empty
// (or mid-edit, e.g. "6.") while the user types, only pushing a
// clamped number upstream once it actually parses, and only
// re-syncing its text from the outside (switching to a different
// room/stair, or an external change like a room-type bump) rather
// than after every keystroke of its own.
function DimensionField({ entityId, value, min, step = 0.1, onCommit, style }) {
  const [text, setText] = useState(() => String(value));
  const pushedRef = useRef(value);
  const entityRef = useRef(entityId);

  useEffect(() => {
    const entityChanged = entityId !== entityRef.current;
    const externallyChanged = value !== pushedRef.current;
    if (entityChanged || externallyChanged) {
      setText(String(value));
      pushedRef.current = value;
      entityRef.current = entityId;
    }
  }, [entityId, value]);

  function handleChange(e) {
    const raw = e.target.value;
    setText(raw);
    const parsed = parseFloat(raw);
    if (!Number.isFinite(parsed)) return; // mid-edit (empty, "-", "6.") — wait for more input
    const clamped = Math.max(parsed, min);
    pushedRef.current = clamped;
    if (clamped !== value) onCommit(clamped);
  }

  function handleBlur() {
    const parsed = parseFloat(text);
    const resolved = Number.isFinite(parsed) ? Math.max(parsed, min) : value;
    setText(String(resolved));
    pushedRef.current = resolved;
    if (resolved !== value) onCommit(resolved);
  }

  return (
    <input
      type="number"
      step={step}
      min={min}
      value={text}
      onChange={handleChange}
      onBlur={handleBlur}
      style={style}
    />
  );
}

const TOOLS = [
  { id: 'select', label: 'Select' },
  { id: 'room', label: 'Add Room' },
  { id: 'polygon', label: 'Add Polygon Room' },
  { id: 'door', label: 'Add Door' },
  { id: 'window', label: 'Add Window' },
  { id: 'stairs', label: 'Add Stairs' },
  { id: 'column', label: 'Add Column' }
];

const btnStyle = (active) => ({
  padding: '8px 14px',
  borderRadius: 8,
  border: active ? '2px solid #c9a96e' : '1px solid #d1d5db',
  background: active ? '#fdf6ea' : '#fff',
  fontWeight: 600,
  fontSize: 13,
  cursor: 'pointer'
});

export default function Toolbar({
  t,
  mode,
  standard = 'irc',
  onModeChange,
  selectedRoom,
  onRenameRoom,
  onChangeRoomType,
  onResizeRoomInputs,
  onDeleteRoom,
  selectedOpening,
  onDeleteOpening,
  floorCount = 1,
  activeFloor = 0,
  onSetActiveFloor,
  onAddFloor,
  selectedStair,
  onResizeStairWidth,
  onDeleteStair,
  selectedColumn,
  onDeleteColumn
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid #e5e7eb' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center', padding: '8px 14px', borderBottom: '1px solid #f3f4f6' }}>
        {Array.from({ length: floorCount }, (_, i) => i).map((f) => (
          <button
            key={f}
            type="button"
            style={btnStyle(f === activeFloor)}
            onClick={() => onSetActiveFloor && onSetActiveFloor(f)}
            title={floorLabel(f, t)}
          >
            {floorLabel(f, t)}
          </button>
        ))}
        {floorCount < FLOOR_CAP && (
          <button type="button" style={btnStyle(false)} onClick={() => onAddFloor && onAddFloor()}>
            + {t('Add Floor')}
          </button>
        )}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', padding: '10px 14px' }}>
        {TOOLS.map((tool) => (
          <button key={tool.id} type="button" style={btnStyle(mode === tool.id)} onClick={() => onModeChange(tool.id)}>
            {t(tool.label)}
          </button>
        ))}

        {mode === 'polygon' && (
          <span style={{ fontSize: 12, color: '#6b7280' }}>
            {t('Tap to place each corner, then double-tap (or tap the first corner again) to finish')}
          </span>
        )}

        {selectedRoom && (() => {
          const roomType = getRoomType(selectedRoom.room_type, standard);
          return (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginInlineStart: 12 }}>
              <select
                value={roomType.id}
                onChange={(e) => onChangeRoomType(selectedRoom.id, e.target.value)}
                style={{ padding: '6px 8px', borderRadius: 6, border: '1px solid #d1d5db', fontSize: 13 }}
              >
                {ROOM_TYPES.map((rt) => (
                  <option key={rt.id} value={rt.id}>{t(rt.label)}</option>
                ))}
              </select>
              <input
                value={selectedRoom.name}
                onChange={(e) => onRenameRoom(selectedRoom.id, e.target.value)}
                style={{ padding: '6px 10px', borderRadius: 6, border: '1px solid #d1d5db', fontSize: 13, width: 140 }}
              />
              {!selectedRoom.points && (
                <>
                  <label style={{ fontSize: 12, color: '#6b7280' }}>
                    {t('W')}
                    <DimensionField
                      entityId={selectedRoom.id}
                      value={selectedRoom.gw}
                      min={roomType.minW}
                      onCommit={(gw) => onResizeRoomInputs(selectedRoom.id, gw, selectedRoom.gh)}
                      style={{ width: 60, marginInlineStart: 4, padding: '4px 6px', borderRadius: 6, border: '1px solid #d1d5db' }}
                    />
                  </label>
                  <label style={{ fontSize: 12, color: '#6b7280' }}>
                    {t('H')}
                    <DimensionField
                      entityId={selectedRoom.id}
                      value={selectedRoom.gh}
                      min={roomType.minH}
                      onCommit={(gh) => onResizeRoomInputs(selectedRoom.id, selectedRoom.gw, gh)}
                      style={{ width: 60, marginInlineStart: 4, padding: '4px 6px', borderRadius: 6, border: '1px solid #d1d5db' }}
                    />
                  </label>
                  <span style={{ fontSize: 11, color: '#9ca3af' }}>
                    {t('Min')} {roomType.minW}×{roomType.minH} m{roomType.codeBased ? ' (' + roomType.codeRef + ')' : ''}
                  </span>
                </>
              )}
              <button type="button" style={btnStyle(false)} onClick={() => onDeleteRoom(selectedRoom.id)}>
                {t('Delete Room')}
              </button>
            </div>
          );
        })()}

        {selectedOpening && (
          <button type="button" style={btnStyle(false)} onClick={() => onDeleteOpening(selectedOpening.roomId, selectedOpening.openingId)}>
            {t('Delete Opening')}
          </button>
        )}

        {selectedStair && (() => {
          const minWidth = stairMinWidth(standard);
          return (
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginInlineStart: 12 }}>
              <label style={{ fontSize: 12, color: '#6b7280' }}>
                {t('Width')}
                <DimensionField
                  entityId={selectedStair.id}
                  value={selectedStair.width ?? STAIR_WIDTH}
                  min={minWidth}
                  step={0.05}
                  onCommit={(width) => onResizeStairWidth(selectedStair.id, width)}
                  style={{ width: 60, marginInlineStart: 4, padding: '4px 6px', borderRadius: 6, border: '1px solid #d1d5db' }}
                />
              </label>
              <span style={{ fontSize: 11, color: '#9ca3af' }}>
                {t('Min')} {minWidth} m ({stairMinWidthCodeRef(standard)})
              </span>
              <button type="button" style={btnStyle(false)} onClick={() => onDeleteStair(selectedStair.id)}>
                {t('Delete Stairs')}
              </button>
            </div>
          );
        })()}

        {selectedColumn && (
          <button type="button" style={btnStyle(false)} onClick={() => onDeleteColumn(selectedColumn.id)}>
            {t('Delete Column')}
          </button>
        )}
      </div>
    </div>
  );
}
