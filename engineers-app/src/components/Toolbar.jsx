const TOOLS = [
  { id: 'select', label: 'Select' },
  { id: 'room', label: 'Add Room' },
  { id: 'door', label: 'Add Door' },
  { id: 'window', label: 'Add Window' }
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
  onResizeRoomInputs,
  onDeleteRoom,
  selectedOpening,
  onDeleteOpening
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', padding: '10px 14px', borderBottom: '1px solid #e5e7eb' }}>
      {TOOLS.map((tool) => (
        <button key={tool.id} type="button" style={btnStyle(mode === tool.id)} onClick={() => onModeChange(tool.id)}>
          {t(tool.label)}
        </button>
      ))}

      {selectedRoom && (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginInlineStart: 12 }}>
          <input
            value={selectedRoom.name}
            onChange={(e) => onRenameRoom(selectedRoom.id, e.target.value)}
            style={{ padding: '6px 10px', borderRadius: 6, border: '1px solid #d1d5db', fontSize: 13, width: 140 }}
          />
          <label style={{ fontSize: 12, color: '#6b7280' }}>
            {t('W')}
            <input
              type="number"
              step="0.1"
              min="1.5"
              value={selectedRoom.gw}
              onChange={(e) => onResizeRoomInputs(selectedRoom.id, parseFloat(e.target.value) || selectedRoom.gw, selectedRoom.gh)}
              style={{ width: 60, marginInlineStart: 4, padding: '4px 6px', borderRadius: 6, border: '1px solid #d1d5db' }}
            />
          </label>
          <label style={{ fontSize: 12, color: '#6b7280' }}>
            {t('H')}
            <input
              type="number"
              step="0.1"
              min="1.5"
              value={selectedRoom.gh}
              onChange={(e) => onResizeRoomInputs(selectedRoom.id, selectedRoom.gw, parseFloat(e.target.value) || selectedRoom.gh)}
              style={{ width: 60, marginInlineStart: 4, padding: '4px 6px', borderRadius: 6, border: '1px solid #d1d5db' }}
            />
          </label>
          <button type="button" style={btnStyle(false)} onClick={() => onDeleteRoom(selectedRoom.id)}>
            {t('Delete Room')}
          </button>
        </div>
      )}

      {selectedOpening && (
        <button type="button" style={btnStyle(false)} onClick={() => onDeleteOpening(selectedOpening.roomId, selectedOpening.openingId)}>
          {t('Delete Opening')}
        </button>
      )}
    </div>
  );
}
