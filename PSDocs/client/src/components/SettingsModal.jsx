import { themes, applyTheme } from '../themes.js';

export default function SettingsModal({ currentTheme, onThemeChange, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-end justify-start z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-72 p-5 mb-2 ml-1">
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

        <p className="text-xs font-medium text-brand-400 uppercase tracking-wide mb-3">Color Theme</p>
        <div className="grid grid-cols-3 gap-2">
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
                {/* Swatch: sidebar color + accent color */}
                <div className="flex rounded-md overflow-hidden w-10 h-7 shadow-sm">
                  <div className="w-1/2 h-full" style={{ backgroundColor: theme.vars['--brand-900'] }} />
                  <div className="w-1/2 h-full" style={{ backgroundColor: theme.vars['--brand-500'] }} />
                </div>
                <span className="text-xs text-brand-600 font-medium">{theme.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
