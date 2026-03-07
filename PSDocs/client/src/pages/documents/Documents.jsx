import { useState, useEffect, useRef } from 'react';

function loadDropboxSDK(appKey, onLoad) {
  if (window.Dropbox) { onLoad(); return; }
  const script = document.createElement('script');
  script.src = 'https://www.dropbox.com/static/api/2/dropins.js';
  script.id = 'dropboxjs';
  script.setAttribute('data-app-key', appKey);
  script.onload = onLoad;
  document.head.appendChild(script);
}

export default function Documents() {
  const [appKey, setAppKey] = useState(
    () => localStorage.getItem('psdocs-dropbox-key') ?? ''
  );
  const [appKeyInput, setAppKeyInput] = useState(appKey);
  const [sdkReady, setSdkReady] = useState(false);
  const [docs, setDocs] = useState(() => {
    try { return JSON.parse(localStorage.getItem('psdocs-documents') ?? '[]'); }
    catch { return []; }
  });
  const [selected, setSelected] = useState(null);
  const embedRef = useRef(null);
  const embedInstanceRef = useRef(null);

  useEffect(() => {
    if (!appKey) return;
    loadDropboxSDK(appKey, () => setSdkReady(true));
  }, [appKey]);

  useEffect(() => {
    if (!selected || !sdkReady || !embedRef.current) return;

    // Clear previous embed
    embedRef.current.innerHTML = '';
    embedInstanceRef.current = null;

    if (window.Dropbox && window.Dropbox.embed) {
      embedInstanceRef.current = window.Dropbox.embed(
        { link: selected.link, file: { name: selected.name } },
        embedRef.current
      );
    }

    return () => {
      if (embedInstanceRef.current && window.Dropbox?.unmount) {
        window.Dropbox.unmount(embedInstanceRef.current);
      }
    };
  }, [selected, sdkReady]);

  function saveAppKey() {
    const key = appKeyInput.trim();
    localStorage.setItem('psdocs-dropbox-key', key);
    setAppKey(key);
    setSdkReady(false);
  }

  function openChooser() {
    if (!sdkReady || !window.Dropbox) return;
    window.Dropbox.choose({
      success(files) {
        const newDocs = files.map((f) => ({
          id: `${Date.now()}-${Math.random()}`,
          name: f.name,
          link: f.link,
          icon: f.icon,
          addedAt: new Date().toISOString(),
        }));
        const updated = [...docs, ...newDocs];
        setDocs(updated);
        localStorage.setItem('psdocs-documents', JSON.stringify(updated));
        if (newDocs.length === 1) setSelected(newDocs[0]);
      },
      cancel() {},
      linkType: 'preview',
      multiselect: true,
    });
  }

  function removeDoc(id) {
    const updated = docs.filter((d) => d.id !== id);
    setDocs(updated);
    localStorage.setItem('psdocs-documents', JSON.stringify(updated));
    if (selected?.id === id) setSelected(null);
  }

  if (!appKey) {
    return (
      <div className="p-8 max-w-lg">
        <h1 className="text-2xl font-semibold text-brand-800 mb-2">Documents</h1>
        <p className="text-sm text-brand-500 mb-6">
          Connect your Dropbox account to browse and preview documents directly in PSDocs.
          You'll need a Dropbox App Key from the{' '}
          <a
            href="https://www.dropbox.com/developers/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 underline hover:text-brand-800"
          >
            Dropbox Developer Console
          </a>
          .
        </p>
        <div className="bg-white rounded-xl shadow-sm border border-brand-100 p-6">
          <label className="block text-xs font-medium text-brand-600 mb-1">Dropbox App Key</label>
          <input
            type="text"
            value={appKeyInput}
            onChange={(e) => setAppKeyInput(e.target.value)}
            placeholder="e.g. abc123xyz"
            className="w-full border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 mb-3"
          />
          <button
            onClick={saveAppKey}
            disabled={!appKeyInput.trim()}
            className="bg-brand-700 hover:bg-brand-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors disabled:opacity-50"
          >
            Connect Dropbox
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left panel: document list */}
      <div className="w-64 shrink-0 border-r border-brand-100 flex flex-col bg-white">
        <div className="flex items-center justify-between px-4 py-3 border-b border-brand-100">
          <h2 className="text-sm font-semibold text-brand-800">Documents</h2>
          <button
            onClick={openChooser}
            disabled={!sdkReady}
            title={sdkReady ? 'Add from Dropbox' : 'Loading Dropbox…'}
            className="flex items-center gap-1 text-xs text-brand-500 hover:text-brand-700 font-medium disabled:opacity-40"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add
          </button>
        </div>

        {docs.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <svg className="w-10 h-10 text-brand-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <p className="text-xs text-brand-400">No documents yet.</p>
            <button
              onClick={openChooser}
              disabled={!sdkReady}
              className="mt-3 text-xs text-brand-500 hover:text-brand-700 underline disabled:opacity-40"
            >
              Add from Dropbox
            </button>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto divide-y divide-brand-50">
            {docs.map((doc) => (
              <li key={doc.id}>
                <button
                  onClick={() => setSelected(doc)}
                  className={`w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-brand-50 transition-colors ${
                    selected?.id === doc.id ? 'bg-brand-50' : ''
                  }`}
                >
                  {doc.icon ? (
                    <img src={doc.icon} alt="" className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <svg className="w-5 h-5 shrink-0 mt-0.5 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-brand-800 truncate">{doc.name}</p>
                    <p className="text-xs text-brand-400 mt-0.5">
                      {new Date(doc.addedAt).toLocaleDateString()}
                    </p>
                  </div>
                </button>
                <div className="px-4 pb-2 flex justify-end">
                  <button
                    onClick={() => removeDoc(doc.id)}
                    className="text-xs text-brand-300 hover:text-red-500 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="px-4 py-3 border-t border-brand-100">
          <button
            onClick={() => {
              localStorage.removeItem('psdocs-dropbox-key');
              setAppKey('');
              setAppKeyInput('');
              setSdkReady(false);
            }}
            className="text-xs text-brand-400 hover:text-brand-600"
          >
            Change Dropbox key
          </button>
        </div>
      </div>

      {/* Right panel: embed */}
      <div className="flex-1 overflow-hidden bg-brand-50">
        {selected ? (
          <div ref={embedRef} className="w-full h-full" />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <svg className="w-16 h-16 text-brand-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-brand-400">Select a document to preview it here</p>
          </div>
        )}
      </div>
    </div>
  );
}
