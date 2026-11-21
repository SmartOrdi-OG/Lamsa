import { FLOOR_CAP, floorLabel } from '../lib/planGeometry.js';
import { ROOM_TYPES, getRoomType } from '../lib/roomTypes.js';

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

        {selectedRoom && (() => {
          const roomType = getRoomType(selectedRoom.room_type);
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
                    <input
                      type="number"
                      step="0.1"
                      min={roomType.minW}
                      value={selectedRoom.gw}
                      onChange={(e) => {
                        const parsed = parseFloat(e.target.value);
                        const gw = Number.isFinite(parsed) ? Math.max(parsed, roomType.minW) : selectedRoom.gw;
                        onResizeRoomInputs(selectedRoom.id, gw, selectedRoom.gh);
                      }}
                      style={{ width: 60, marginInlineStart: 4, padding: '4px 6px', borderRadius: 6, border: '1px solid #d1d5db' }}
                    />
                  </label>
                  <label style={{ fontSize: 12, color: '#6b7280' }}>
                    {t('H')}
                    <input
                      type="number"
                      step="0.1"
                      min={roomType.minH}
                      value={selectedRoom.gh}
                      onChange={(e) => {
                        const parsed = parseFloat(e.target.value);
                        const gh = Number.isFinite(parsed) ? Math.max(parsed, roomType.minH) : selectedRoom.gh;
                        onResizeRoomInputs(selectedRoom.id, selectedRoom.gw, gh);
                      }}
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

        {selectedStair && (
          <button type="button" style={btnStyle(false)} onClick={() => onDeleteStair(selectedStair.id)}>
            {t('Delete Stairs')}
          </button>
        )}

        {selectedColumn && (
          <button type="button" style={btnStyle(false)} onClick={() => onDeleteColumn(selectedColumn.id)}>
            {t('Delete Column')}
          </button>
        )}
      </div>
    </div>
  );
}
