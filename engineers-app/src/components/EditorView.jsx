import { useState, useEffect } from 'react';
import Viewport3D from './Viewport3D.jsx';
import PlanEditor2D from './PlanEditor2D.jsx';
import Toolbar from './Toolbar.jsx';
import { useProjectStore, createStair, createColumn } from '../state/projectStore.js';
import { exportPlanImage } from '../lib/exportPlan.js';
import { exportFloorsToDxf } from '../lib/dxfExport.js';
import { floorLabel } from '../lib/planGeometry.js';

export default function EditorView({ initialProject, projectId, onBack, onSave, t }) {
  const { project, rooms, stairs, columns, actions } = useProjectStore(initialProject);
  const [mode, setMode] = useState('select');
  const [activeFloor, setActiveFloor] = useState(0);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [selectedOpening, setSelectedOpening] = useState(null);
  const [selectedStairId, setSelectedStairId] = useState(null);
  const [selectedColumnId, setSelectedColumnId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');
  const [dollhouse, setDollhouse] = useState(false);
  const [renderView, setRenderView] = useState(false);
  // Side-by-side 2D/3D only works once there's room for both — below that,
  // stack them instead so neither gets squeezed into an unusable sliver
  // (the 2D canvas has a fixed pixel size, so splitting a phone-width
  // screen in half left it nearly invisible before this).
  const [isNarrow, setIsNarrow] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 900 : false));
  useEffect(() => {
    function onResize() { setIsNarrow(window.innerWidth < 900); }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const selectedRoom = rooms.find((r) => r.id === selectedRoomId) || null;
  const selectedStair = stairs.find((s) => s.id === selectedStairId) || null;
  const selectedColumn = columns.find((c) => c.id === selectedColumnId) || null;

  // The floor switcher always shows at least one floor, plus whatever a room
  // or stair already references (covers a project saved before this feature
  // existed, which has no explicit floor_count) and project.floor_count
  // (covers "+ Floor" on an otherwise-empty new floor, which has no room or
  // stair yet to imply its existence).
  const maxDataFloor = Math.max(0, ...rooms.map((r) => r.floor ?? 0), ...stairs.map((s) => (s.floor ?? 0) + 1), ...columns.map((c) => c.floor ?? 0));
  const floorCount = Math.max(project.floor_count || 1, maxDataFloor + 1);

  function handleAddFloor() {
    const next = floorCount + 1;
    actions.setMeta({ floor_count: next });
    setActiveFloor(floorCount);
  }

  async function handleSave() {
    setSaving(true);
    setSaveMsg('');
    const result = await onSave(projectId, { project, rooms, stairs, columns });
    setSaving(false);
    setSaveMsg(result.ok ? t('Saved') : (result.error || t('Save failed')));
    setTimeout(() => setSaveMsg(''), 2500);
    return result;
  }

  function handleExportPdf() {
    const floorRooms = rooms.filter((r) => (r.floor ?? 0) === activeFloor);
    const dataUrl = exportPlanImage(floorRooms, 20, 16);
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = (project.name || 'floor-plan') + '-' + floorLabel(activeFloor) + '.png';
    a.click();
  }

  function handleExportDxf() {
    const floorsMeta = Array.from({ length: floorCount }, (_, floorNum) => ({
      floorNum,
      label: floorLabel(floorNum),
      rooms: rooms.filter((r) => (r.floor ?? 0) === floorNum)
    })).filter((f) => f.rooms.length > 0);
    if (!floorsMeta.length) return;
    const dxfText = exportFloorsToDxf(rooms, floorsMeta, stairs, columns, project.wall_height);
    const blob = new Blob([dxfText], { type: 'application/dxf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (project.name || 'floor-plan') + '.dxf';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: '1px solid #e5e7eb' }}>
        <button type="button" onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: '#374151' }}>
          ← {t('Projects')}
        </button>
        <input
          value={project.name}
          onChange={(e) => actions.setMeta({ name: e.target.value })}
          style={{ fontWeight: 800, fontSize: 15, border: 'none', textAlign: 'center', flex: 1 }}
        />
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#6b7280' }}>{saveMsg}</span>
          <label style={{ fontSize: 12, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 4 }}>
            <input type="checkbox" checked={dollhouse} onChange={(e) => setDollhouse(e.target.checked)} />
            {t('Dollhouse view')}
          </label>
          <label style={{ fontSize: 12, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 4 }}>
            <input type="checkbox" checked={renderView} onChange={(e) => setRenderView(e.target.checked)} />
            {t('Render view')}
          </label>
          <button type="button" onClick={handleExportPdf} style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #d1d5db', background: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
            {t('Export plan')}
          </button>
          <button type="button" onClick={handleExportDxf} style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #d1d5db', background: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
            {t('Export DXF')}
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            style={{ padding: '8px 16px', borderRadius: 8, border: 'none', background: '#c9a96e', color: '#1b1e22', fontWeight: 800, fontSize: 13, cursor: 'pointer', opacity: saving ? 0.6 : 1 }}
          >
            {saving ? t('Saving…') : t('Save')}
          </button>
        </div>
      </div>

      <Toolbar
        t={t}
        mode={mode}
        onModeChange={setMode}
        selectedRoom={selectedRoom}
        onRenameRoom={(id, name) => actions.updateRoom(id, { name })}
        onResizeRoomInputs={(id, gw, gh) => actions.updateRoom(id, { gw, gh })}
        onDeleteRoom={(id) => { actions.removeRoom(id); setSelectedRoomId(null); }}
        selectedOpening={selectedOpening}
        onDeleteOpening={(roomId, openingId) => { actions.removeOpening(roomId, openingId); setSelectedOpening(null); }}
        floorCount={floorCount}
        activeFloor={activeFloor}
        onSetActiveFloor={setActiveFloor}
        onAddFloor={handleAddFloor}
        selectedStair={selectedStair}
        onDeleteStair={(id) => { actions.removeStair(id); setSelectedStairId(null); }}
        selectedColumn={selectedColumn}
        onDeleteColumn={(id) => { actions.removeColumn(id); setSelectedColumnId(null); }}
      />

      <div style={{ display: 'flex', flexDirection: isNarrow ? 'column' : 'row', flex: 1, minHeight: 0 }}>
        <div style={isNarrow ? { flex: '0 0 auto', maxHeight: '50%', overflow: 'auto' } : { flex: 1, overflow: 'auto' }}>
          <PlanEditor2D
            rooms={rooms}
            stairs={stairs}
            columns={columns}
            wallHeight={project.wall_height}
            mode={mode}
            activeFloor={activeFloor}
            selectedRoomId={selectedRoomId}
            selectedOpening={selectedOpening}
            selectedStairId={selectedStairId}
            selectedColumnId={selectedColumnId}
            onAddRoom={(rect) => actions.addRectRoom(rect)}
            onAddPolygonRoom={(points) => actions.addPolygonRoom({ points, floor: activeFloor })}
            onMoveRoom={(id, gx, gy) => actions.updateRoom(id, { gx, gy })}
            onResizeRoom={(id, gw, gh) => actions.updateRoom(id, { gw, gh })}
            onMovePolygonRoom={(id, points) => {
              const xs = points.map((p) => p.x), ys = points.map((p) => p.y);
              const gx = Math.min(...xs), gy = Math.min(...ys);
              const gw = Math.max(...xs) - gx, gh = Math.max(...ys) - gy;
              actions.updateRoom(id, { points, gx, gy, gw, gh });
            }}
            onSelectRoom={setSelectedRoomId}
            onAddOpening={actions.addOpening}
            onSelectOpening={setSelectedOpening}
            onAddStair={(opts) => actions.addStair(createStair(opts))}
            onMoveStair={(id, x, y, rotation) => actions.moveStair(id, x, y, rotation)}
            onSelectStair={setSelectedStairId}
            onAddColumn={(opts) => actions.addColumn(createColumn(opts))}
            onMoveColumn={(id, x, y) => actions.moveColumn(id, x, y)}
            onSelectColumn={setSelectedColumnId}
          />
        </div>
        <div style={{ flex: 1, minHeight: 0 }}>
          <Viewport3D
            rooms={rooms}
            stairs={stairs}
            columns={columns}
            wallHeight={project.wall_height}
            wallColor={project.wall_color}
            wallMaterial={project.wall_material}
            t={t}
            dollhouse={dollhouse}
            floorGap={dollhouse ? 1.2 : 0}
            renderView={renderView}
          />
        </div>
      </div>
    </div>
  );
}
