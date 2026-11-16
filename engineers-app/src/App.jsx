import { useEffect, useState } from 'react';
import PaywallScreen from './components/PaywallScreen.jsx';
import ProjectList from './components/ProjectList.jsx';
import EditorView from './components/EditorView.jsx';
import { getMe, listProjects, getProject, saveProject, deleteProject } from './api/client.js';
import { createEmptyProject } from './state/projectStore.js';

function hasAccess(entitlement) {
  return !!entitlement && (entitlement.status === 'active' || entitlement.status === 'trialing');
}

export default function App() {
  // 'loading' | 'signin' | 'paywall' | 'list' | 'editor'
  const [view, setView] = useState('loading');
  const [entitlementStatus, setEntitlementStatus] = useState(null);
  const [projects, setProjects] = useState([]);
  const [editing, setEditing] = useState(null); // { projectId, project }

  useEffect(() => {
    getMe().then((result) => {
      if (result.status === 401) {
        setView('signin');
        return;
      }
      if (!result.ok || !result.data) {
        setView('signin');
        return;
      }
      const entitlement = result.data.engineerSubscription;
      setEntitlementStatus(entitlement ? entitlement.status : null);
      if (!hasAccess(entitlement)) {
        setView('paywall');
        return;
      }
      loadProjects();
    });
  }, []);

  function loadProjects() {
    listProjects().then((result) => {
      if (result.ok && result.data) setProjects(result.data.projects || []);
      setView('list');
    });
  }

  function handleCreate() {
    setEditing({ projectId: null, project: createEmptyProject('Untitled Project') });
    setView('editor');
  }

  function handleOpen(projectId) {
    getProject(projectId).then((result) => {
      if (result.status === 403) { setView('paywall'); return; }
      if (!result.ok || !result.data) return;
      setEditing({ projectId, project: result.data.project });
      setView('editor');
    });
  }

  function handleDelete(projectId) {
    deleteProject(projectId).then(() => loadProjects());
  }

  async function handleSave(projectId, projectBlob) {
    const result = await saveProject(projectId, projectBlob);
    if (result.status === 403) { setView('paywall'); return { ok: false, error: 'Engineers access required' }; }
    if (result.ok && result.data) {
      setEditing((e) => ({ ...e, projectId: result.data.projectId }));
    }
    return result.ok ? { ok: true } : { ok: false, error: (result.data && result.data.error) || 'Save failed' };
  }

  if (view === 'loading') return null;

  if (view === 'signin') {
    return (
      <div style={{ maxWidth: 420, margin: '100px auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>Lamsa Engineers</h1>
        <p style={{ color: '#6b7280', marginBottom: 20 }}>Please sign in to continue.</p>
        <a
          href="/lamsa-auth.html"
          style={{ display: 'inline-block', background: '#c9a96e', color: '#1b1e22', padding: '12px 24px', borderRadius: 10, fontWeight: 800, textDecoration: 'none' }}
        >
          Sign in
        </a>
      </div>
    );
  }

  if (view === 'paywall') return <PaywallScreen status={entitlementStatus} />;

  if (view === 'editor' && editing) {
    return (
      <EditorView
        initialProject={editing.project}
        projectId={editing.projectId}
        onBack={() => loadProjects()}
        onSave={handleSave}
      />
    );
  }

  return <ProjectList projects={projects} onOpen={handleOpen} onCreate={handleCreate} onDelete={handleDelete} />;
}
