export default function ProjectList({ projects, onOpen, onCreate, onDelete, t }) {
  return (
    <div style={{ maxWidth: 720, margin: '40px auto', padding: 24, fontFamily: 'sans-serif' }}>
      <a
        href="/lamsa-bilingual.html"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#6b7280', fontSize: 13, fontWeight: 700, textDecoration: 'none', marginBottom: 16 }}
      >
        ← {t('Back to Home')}
      </a>
      <div style={{ display: 'flex', flexWrap: 'wrap', rowGap: 10, justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h1 style={{ fontSize: 22, fontWeight: 900 }}>{t('Your Projects')}</h1>
        <button
          type="button"
          onClick={onCreate}
          style={{ background: '#c9a96e', color: '#1b1e22', border: 'none', padding: '10px 18px', borderRadius: 10, fontWeight: 800, cursor: 'pointer' }}
        >
          + {t('New Project')}
        </button>
      </div>

      {projects.length === 0 && (
        <div style={{ color: '#6b7280', textAlign: 'center', padding: 40 }}>{t('No projects yet — create your first one.')}</div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14 }}>
        {projects.map((p) => (
          <div key={p.id} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16, cursor: 'pointer' }} onClick={() => onOpen(p.id)}>
            <div style={{ fontWeight: 800, marginBottom: 6 }}>{p.name}</div>
            <div style={{ fontSize: 12, color: '#9ca3af', marginBottom: 10 }}>{p.updatedAt ? new Date(p.updatedAt).toLocaleDateString() : ''}</div>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onDelete(p.id); }}
              style={{ fontSize: 12, color: '#e05555', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {t('Delete')}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
