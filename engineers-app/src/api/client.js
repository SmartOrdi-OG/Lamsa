// Thin fetch wrapper — every call is same-origin with credentials:'include'
// so the existing lamsa_session cookie authenticates automatically, exactly
// like every other Lamsa page's checkAuth() pattern. No token plumbing.

async function request(url, options) {
  const res = await fetch(url, { credentials: 'include', ...options });
  let data = null;
  try { data = await res.json(); } catch (e) { /* no body */ }
  return { ok: res.ok, status: res.status, data };
}

export function getMe() {
  return request('/api/me');
}

export function listProjects() {
  return request('/api/me?view=engineer&list=1');
}

export function getProject(projectId) {
  return request('/api/me?view=engineer&projectId=' + encodeURIComponent(projectId));
}

export function saveProject(projectId, project) {
  return request('/api/me', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'engineer_save', projectId: projectId || undefined, project })
  });
}

export function deleteProject(projectId) {
  return request('/api/me', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'engineer_delete', projectId })
  });
}

export function startEngineerCheckout() {
  return request('/api/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ kind: 'engineer', plan: 'annual', return_page: 'engineers/index.html' })
  });
}
