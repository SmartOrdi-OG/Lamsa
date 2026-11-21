import { useState, useEffect, useRef } from 'react';
import Viewport3D from './Viewport3D.jsx';
import PlanEditor2D from './PlanEditor2D.jsx';
import Toolbar from './Toolbar.jsx';
import PhotoRealModal from './PhotoRealModal.jsx';
import { useProjectStore, createStair, createColumn, createWall } from '../state/projectStore.js';
import { getRoomType } from '../lib/roomTypes.js';
import { exportPlanImage } from '../lib/exportPlan.js';
import { exportFloorsToDxf } from '../lib/dxfExport.js';
import { exportProjectToIfc } from '../lib/ifcExport.js';
import { floorLabel } from '../lib/planGeometry.js';

export default function EditorView({ initialProject, projectId, onBack, onSave, t }) {
  const { project, rooms, stairs, columns, walls, actions } = useProjectStore(initialProject);
  const standard = project.code_standard || 'irc';
  const [mode, setMode] = useState('select');
  const [activeFloor, setActiveFloor] = useState(0);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [selectedOpening, setSelectedOpening] = useState(null);
  const [selectedStairId, setSelectedStairId] = useState(null);
  const [selectedColumnId, setSelectedColumnId] = useState(null);
  const [selectedWallId, setSelectedWallId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');
  const [dollhouse, setDollhouse] = useState(false);
  const [renderView, setRenderView] = useState(false);
  const [showFoundation, setShowFoundation] = useState(true);
  const [showPhotoReal, setShowPhotoReal] = useState(false);
  const viewportRef = useRef(null);
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
  const selectedWall = walls.find((w) => w.id === selectedWallId) || null;

  // The floor switcher always shows at least one floor, plus whatever a room
  // or stair already references (covers a project saved before this feature
  // existed, which has no explicit floor_count) and project.floor_count
  // (covers "+ Floor" on an otherwise-empty new floor, which has no room or
  // stair yet to imply its existence).
  const maxDataFloor = Math.max(0, ...rooms.map((r) => r.floor ?? 0), ...stairs.map((s) => (s.floor ?? 0) + 1), ...columns.map((c) => c.floor ?? 0), ...walls.map((w) => w.floor ?? 0));
  const floorCount = Math.max(project.floor_count || 1, maxDataFloor + 1);

  function handleAddFloor() {
    const next = floorCount + 1;
    actions.setMeta({ floor_count: next });
    setActiveFloor(floorCount);
  }

  async function handleSave() {
    setSaving(true);
    setSaveMsg('');
    const result = await onSave(projectId, { project, rooms, stairs, columns, walls });
    setSaving(false);
    setSaveMsg(result.ok ? t('Saved') : (result.error || t('Save failed')));
    setTimeout(() => setSaveMsg(''), 2500);
    return result;
  }

  function handleExportPdf() {
    const floorRooms = rooms.filter((r) => (r.floor ?? 0) === activeFloor);
    const dataUrl = exportPlanImage(floorRooms, 20, 16, {
      projectName: project.name,
      floorLabel: floorLabel(activeFloor, t),
      standard,
      t
    });
    // iOS Safari doesn't honor the `download` attribute on a data: URI — it
    // just navigates/opens it instead of saving, so the export silently
    // appeared to do nothing there. A blob: URL (same approach the DXF
    // export already uses successfully) downloads correctly everywhere.
    const [, base64] = dataUrl.split(',');
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    const blob = new Blob([bytes], { type: 'image/png' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (project.name || 'floor-plan') + '-' + floorLabel(activeFloor, t) + '.png';
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleExportDxf() {
    const floorsMeta = Array.from({ length: floorCount }, (_, floorNum) => ({
      floorNum,
      label: floorLabel(floorNum, t),
      rooms: rooms.filter((r) => (r.floor ?? 0) === floorNum)
    })).filter((f) => f.rooms.length > 0 || walls.some((w) => (w.floor ?? 0) === f.floorNum));
    if (!floorsMeta.length) return;
    const dxfText = exportFloorsToDxf(project, rooms, floorsMeta, stairs, columns, walls, project.wall_height, true, standard, t);
    const blob = new Blob([dxfText], { type: 'application/dxf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (project.name || 'floor-plan') + '.dxf';
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleExportIfc() {
    if (!rooms.length && !walls.length) return;
    const ifcText = exportProjectToIfc(project, rooms, stairs, columns, walls, t);
    const blob = new Blob([ifcText], { type: 'application/x-step' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (project.name || 'floor-plan') + '.ifc';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', rowGap: 8, alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: '1px solid #e5e7eb' }}>
        <button type="button" onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: '#374151' }}>
          ← {t('Projects')}
        </button>
        <input
          value={project.name}
          onChange={(e) => actions.setMeta({ name: e.target.value })}
          style={{ fontWeight: 800, fontSize: 15, border: 'none', textAlign: 'center', flex: '1 1 140px', minWidth: 0 }}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', rowGap: 8, gap: 8, alignItems: 'center', justifyContent: 'flex-end' }}>
          <span style={{ fontSize: 12, color: '#6b7280' }}>{saveMsg}</span>
          <label style={{ fontSize: 12, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 4 }}>
            <input type="checkbox" checked={dollhouse} onChange={(e) => setDollhouse(e.target.checked)} />
            {t('Dollhouse view')}
          </label>
          <label style={{ fontSize: 12, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 4 }}>
            <input type="checkbox" checked={renderView} onChange={(e) => setRenderView(e.target.checked)} />
            {t('Render view')}
          </label>
          <label style={{ fontSize: 12, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 4 }}>
            <input type="checkbox" checked={showFoundation} onChange={(e) => setShowFoundation(e.target.checked)} />
            {t('Show Foundation')}
          </label>
          <label style={{ fontSize: 12, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 4 }}>
            {t('Code Standard')}
            <select
              value={standard}
              onChange={(e) => actions.setMeta({ code_standard: e.target.value })}
              style={{ padding: '4px 6px', borderRadius: 6, border: '1px solid #d1d5db', fontSize: 12 }}
            >
              <option value="irc">{t('IRC (US)')}</option>
              <option value="eu">{t('EU (DIN/EN)')}</option>
            </select>
          </label>
          <button type="button" onClick={handleExportPdf} style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #d1d5db', background: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
            {t('Export plan')}
          </button>
          <button type="button" onClick={handleExportDxf} style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #d1d5db', background: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
            {t('Export DXF')}
          </button>
          <button type="button" onClick={handleExportIfc} style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #d1d5db', background: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
            {t('Export IFC')}
          </button>
          <button
            type="button"
            onClick={() => setShowPhotoReal(true)}
            title={t('Optional — uses 1 credit from your weekly/monthly plan')}
            style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #d1d5db', background: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}
          >
            {t('Generate realistic image')}
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
        standard={standard}
        mode={mode}
        onModeChange={setMode}
        selectedRoom={selectedRoom}
        onRenameRoom={(id, name) => actions.updateRoom(id, { name })}
        onChangeRoomType={(id, roomTypeId) => {
          const room = rooms.find((r) => r.id === id);
          if (!room) return;
          const roomType = getRoomType(roomTypeId, standard);
          // Naming the room by its type is the common case — free text is
          // still editable right after via the name field for a custom
          // name like "Master Bedroom". Dimensions are only ever bumped
          // UP to the new type's code/practical minimum, never shrunk, so
          // switching type never destroys a larger room the user already
          // drew.
          const patch = { room_type: roomTypeId, name: t(roomType.label) };
          if (!room.points) {
            patch.gw = Math.max(room.gw, roomType.minW);
            patch.gh = Math.max(room.gh, roomType.minH);
          }
          actions.updateRoom(id, patch);
        }}
        onResizeRoomInputs={(id, gw, gh) => actions.updateRoom(id, { gw, gh })}
        onDeleteRoom={(id) => { actions.removeRoom(id); setSelectedRoomId(null); }}
        selectedOpening={selectedOpening}
        onDeleteOpening={(roomId, openingId) => { actions.removeOpening(roomId, openingId); setSelectedOpening(null); }}
        floorCount={floorCount}
        activeFloor={activeFloor}
        onSetActiveFloor={setActiveFloor}
        onAddFloor={handleAddFloor}
        selectedStair={selectedStair}
        onResizeStairWidth={(id, width) => actions.updateStair(id, { width })}
        onDeleteStair={(id) => { actions.removeStair(id); setSelectedStairId(null); }}
        selectedColumn={selectedColumn}
        onDeleteColumn={(id) => { actions.removeColumn(id); setSelectedColumnId(null); }}
        selectedWall={selectedWall}
        onDeleteWall={(id) => { actions.removeWall(id); setSelectedWallId(null); }}
      />

      <div style={{ display: 'flex', flexDirection: isNarrow ? 'column' : 'row', flex: 1, minHeight: 0 }}>
        <div style={isNarrow ? { flex: '0 0 auto', maxHeight: '50%', overflow: 'auto' } : { flex: 1, overflow: 'auto' }}>
          <PlanEditor2D
            rooms={rooms}
            stairs={stairs}
            columns={columns}
            walls={walls}
            showFoundation={showFoundation}
            standard={standard}
            wallHeight={project.wall_height}
            mode={mode}
            activeFloor={activeFloor}
            selectedRoomId={selectedRoomId}
            selectedOpening={selectedOpening}
            selectedStairId={selectedStairId}
            selectedColumnId={selectedColumnId}
            selectedWallId={selectedWallId}
            onAddRoom={(rect) => {
              // Drawing a room used to leave the tool in "Add Room" mode
              // with nothing selected, so the naming/sizing panel (which
              // only shows for a selected room, in Select mode) never
              // appeared until the user manually switched tools and
              // tapped the room again — looking like those options had
              // simply gone missing. Auto-selecting the room just drawn
              // and switching back to Select fixes that.
              const room = actions.addRectRoom(rect);
              setSelectedRoomId(room.id);
              setMode('select');
            }}
            onAddPolygonRoom={(points) => {
              const room = actions.addPolygonRoom({ points, floor: activeFloor });
              setSelectedRoomId(room.id);
              setMode('select');
            }}
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
            onAddWall={(opts) => {
              const wall = createWall(opts);
              actions.addWall(wall);
              setSelectedWallId(wall.id);
              setMode('select');
            }}
            onMoveWall={(id, x1, y1, x2, y2) => actions.moveWall(id, x1, y1, x2, y2)}
            onSelectWall={setSelectedWallId}
          />
        </div>
        <div style={{ flex: 1, minHeight: 0 }}>
          <Viewport3D
            ref={viewportRef}
            rooms={rooms}
            stairs={stairs}
            columns={columns}
            walls={walls}
            wallHeight={project.wall_height}
            wallColor={project.wall_color}
            wallMaterial={project.wall_material}
            t={t}
            dollhouse={dollhouse}
            floorGap={dollhouse ? 1.2 : 0}
            renderView={renderView}
            showFoundation={showFoundation}
          />
        </div>
      </div>

      {showPhotoReal && (
        <PhotoRealModal
          captureImage={() => viewportRef.current && viewportRef.current.captureImage()}
          onClose={() => setShowPhotoReal(false)}
          t={t}
        />
      )}
    </div>
  );
}
