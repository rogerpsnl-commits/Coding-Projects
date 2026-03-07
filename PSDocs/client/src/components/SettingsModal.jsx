import { useState, useRef } from 'react';
import { themes } from '../themes.js';

export default function SettingsModal({
  currentTheme,
  onThemeChange,
  logoFull,
  logoCollapsed,
  onLogoChange,
  onLogoRemove,
  onClose,
}) {
  const fullInputRef = useRef(null);
  const collapsedInputRef = useRef(null);

  function handleFileChange(key, e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => onLogoChange(key, ev.target.result);
    reader.readAsDataURL(file);
    e.target.value = '';
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-end justify-start z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-80 p-5 mb-2 ml-1 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-brand-800">Settings</h3>
          <button
            onClick={onClose}
            className="text-brand-400 hover:text-brand-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Color Theme */}
        <p className="text-xs font-medium text-brand-400 uppercase tracking-wide mb-3">Color Theme</p>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {themes.map((theme) => {
            const isActive = currentTheme === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => onThemeChange(theme.id)}
                className={`flex flex-col items-center gap-1.5 p-2 rounded-lg border-2 transition-all ${
                  isActive ? 'border-brand-500' : 'border-transparent hover:border-brand-200'
                }`}
              >
                <div className="flex rounded-md overflow-hidden w-10 h-7 shadow-sm">
                  <div className="w-1/2 h-full" style={{ backgroundColor: theme.vars['--brand-900'] }} />
                  <div className="w-1/2 h-full" style={{ backgroundColor: theme.vars['--brand-500'] }} />
                </div>
                <span className="text-xs text-brand-600 font-medium">{theme.label}</span>
              </button>
            );
          })}
        </div>

        {/* Logo */}
        <p className="text-xs font-medium text-brand-400 uppercase tracking-wide mb-3">Logo</p>
        <div className="space-y-3 mb-6">
          {/* Full logo */}
          <div className="flex items-center gap-3">
            <div className="w-20 h-10 bg-brand-800 rounded-md flex items-center justify-center shrink-0 overflow-hidden px-1">
              <img
                src={logoFull ?? '/logo-white.png'}
                alt="Full logo preview"
                className="max-h-8 max-w-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-brand-700 mb-1">Expanded sidebar</p>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => fullInputRef.current?.click()}
                  className="text-xs border border-brand-200 hover:bg-brand-50 text-brand-600 px-2 py-1 rounded-md transition-colors"
                >
                  Upload
                </button>
                {logoFull && (
                  <button
                    type="button"
                    onClick={() => onLogoRemove('full')}
                    className="text-xs border border-red-200 hover:bg-red-50 text-red-500 px-2 py-1 rounded-md transition-colors"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
            <input
              ref={fullInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange('full', e)}
            />
          </div>

          {/* Collapsed logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-800 rounded-md flex items-center justify-center shrink-0 overflow-hidden p-1">
              <img
                src={logoCollapsed ?? '/logo-collapsed.png'}
                alt="Collapsed logo preview"
                className="max-h-7 max-w-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-brand-700 mb-1">Collapsed sidebar</p>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => collapsedInputRef.current?.click()}
                  className="text-xs border border-brand-200 hover:bg-brand-50 text-brand-600 px-2 py-1 rounded-md transition-colors"
                >
                  Upload
                </button>
                {logoCollapsed && (
                  <button
                    type="button"
                    onClick={() => onLogoRemove('collapsed')}
                    className="text-xs border border-red-200 hover:bg-red-50 text-red-500 px-2 py-1 rounded-md transition-colors"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
            <input
              ref={collapsedInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange('collapsed', e)}
            />
          </div>
        </div>

        {/* Dropbox */}
        <p className="text-xs font-medium text-brand-400 uppercase tracking-wide mb-3">Dropbox</p>
        <DropboxKeyField />

      </div>
    </div>
  );
}

function DropboxKeyField() {
  const [value, setValue] = useState(
    () => localStorage.getItem('psdocs-dropbox-key') ?? ''
  );
  const [saved, setSaved] = useState(false);

  function save() {
    localStorage.setItem('psdocs-dropbox-key', value.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="mb-6">
      <p className="text-xs text-brand-400 mb-2">
        Required for the Documents page. Get your key from the{' '}
        <a
          href="https://www.dropbox.com/developers/apps"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-500 underline hover:text-brand-700"
        >
          Dropbox Console
        </a>
        .
      </p>
      <div className="flex gap-1.5">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="App Key"
          className="flex-1 border border-brand-200 rounded-md px-2.5 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        <button
          onClick={save}
          className="text-xs border border-brand-200 hover:bg-brand-50 text-brand-600 px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap"
        >
          {saved ? 'Saved!' : 'Save'}
        </button>
      </div>
    </div>
  );
}
