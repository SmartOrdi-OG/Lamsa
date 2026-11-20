import { useState } from 'react';
import Viewport3D from './Viewport3D.jsx';
import PlanEditor2D from './PlanEditor2D.jsx';
import Toolbar from './Toolbar.jsx';
import { useProjectStore } from '../state/projectStore.js';
import { exportPlanImage } from '../lib/exportPlan.js';

export default function EditorView({ initialProject, projectId, onBack, onSave, t }) {
  const { project, rooms, stairs, actions } = useProjectStore(initialProject);
  const [mode, setMode] = useState('select');
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [selectedOpening, setSelectedOpening] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');

  const selectedRoom = rooms.find((r) => r.id === selectedRoomId) || null;

  async function handleSave() {
    setSaving(true);
    setSaveMsg('');
    const result = await onSave(projectId, { project, rooms, stairs });
    setSaving(false);
    setSaveMsg(result.ok ? t('Saved') : (result.error || t('Save failed')));
    setTimeout(() => setSaveMsg(''), 2500);
    return result;
  }

  function handleExportPdf() {
    const dataUrl = exportPlanImage(rooms, 20, 16);
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = (project.name || 'floor-plan') + '.png';
    a.click();
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
          <button type="button" onClick={handleExportPdf} style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #d1d5db', background: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
            {t('Export plan')}
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
      />

      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <PlanEditor2D
            rooms={rooms}
            mode={mode}
            selectedRoomId={selectedRoomId}
            selectedOpening={selectedOpening}
            onAddRoom={(rect) => actions.addRectRoom(rect)}
            onMoveRoom={(id, gx, gy) => actions.updateRoom(id, { gx, gy })}
            onResizeRoom={(id, gw, gh) => actions.updateRoom(id, { gw, gh })}
            onSelectRoom={setSelectedRoomId}
            onAddOpening={actions.addOpening}
            onSelectOpening={setSelectedOpening}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Viewport3D
            rooms={rooms}
            stairs={stairs}
            wallHeight={project.wall_height}
            wallColor={project.wall_color}
            wallMaterial={project.wall_material}
            t={t}
          />
        </div>
      </div>
    </div>
  );
}
