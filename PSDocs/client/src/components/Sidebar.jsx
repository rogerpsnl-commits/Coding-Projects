import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { applyTheme } from '../themes.js';
import SettingsModal from './SettingsModal.jsx';

const firmItems = [
  { to: '/firm', label: 'Firm Info', icon: BriefcaseIcon },
  { to: '/staff', label: 'Staff', icon: UsersIcon },
];

const practiceItems = [
  { to: '/matters', label: 'Matters', icon: FolderIcon },
  { to: '/clients', label: 'Clients', icon: BuildingIcon },
  { to: '/documents', label: 'Documents', icon: DocumentIcon },
];

const reportsItems = [
  { to: '/reports', label: 'Reports', icon: ChartIcon },
];

function getSectionOpen(key, defaultVal) {
  const stored = localStorage.getItem(`psdocs-section-${key}`);
  if (stored === null) return defaultVal;
  return stored === 'true';
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(
    () => localStorage.getItem('psdocs-theme') ?? 'navy'
  );
  const [logoFull, setLogoFull] = useState(
    () => localStorage.getItem('psdocs-logo-full') ?? null
  );
  const [logoCollapsed, setLogoCollapsed] = useState(
    () => localStorage.getItem('psdocs-logo-collapsed') ?? null
  );

  const [firmOpen, setFirmOpen] = useState(() => getSectionOpen('firm', true));
  const [practiceOpen, setPracticeOpen] = useState(() => getSectionOpen('practice', true));
  const [reportsOpen, setReportsOpen] = useState(() => getSectionOpen('reports', true));

  function toggleSection(key, current, setter) {
    const next = !current;
    localStorage.setItem(`psdocs-section-${key}`, String(next));
    setter(next);
  }

  function handleThemeChange(themeId) {
    applyTheme(themeId);
    setCurrentTheme(themeId);
  }

  function handleLogoChange(key, dataUrl) {
    if (key === 'full') {
      localStorage.setItem('psdocs-logo-full', dataUrl);
      setLogoFull(dataUrl);
    } else {
      localStorage.setItem('psdocs-logo-collapsed', dataUrl);
      setLogoCollapsed(dataUrl);
    }
  }

  function handleLogoRemove(key) {
    if (key === 'full') {
      localStorage.removeItem('psdocs-logo-full');
      setLogoFull(null);
    } else {
      localStorage.removeItem('psdocs-logo-collapsed');
      setLogoCollapsed(null);
    }
  }

  function NavItems({ items }) {
    return (
      <div className="space-y-0.5">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            title={collapsed ? label : undefined}
            className={({ isActive }) =>
              `flex items-center rounded-md text-sm transition-colors ${
                collapsed ? 'justify-center px-0 py-2.5' : 'gap-3 px-3 py-2'
              } ${
                isActive
                  ? 'bg-brand-600 text-white'
                  : 'text-brand-300 hover:bg-brand-700 hover:text-white'
              }`
            }
          >
            <Icon className="w-4 h-4 shrink-0" />
            {!collapsed && label}
          </NavLink>
        ))}
      </div>
    );
  }

  function SectionHeader({ label, isOpen, onToggle }) {
    if (collapsed) return null;
    return (
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 mb-1 group"
      >
        <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">{label}</span>
        <ChevronDownIcon
          className={`w-3 h-3 text-brand-500 group-hover:text-brand-300 transition-transform ${isOpen ? '' : '-rotate-90'}`}
        />
      </button>
    );
  }

  return (
    <>
      <aside
        className={`${collapsed ? 'w-14' : 'w-56'} bg-brand-800 text-brand-200 flex flex-col shrink-0 transition-all duration-200`}
      >
        {/* Logo */}
        <Link
          to="/matters"
          className={`flex items-center border-b border-brand-700 h-16 ${collapsed ? 'justify-center px-0' : 'px-4'}`}
        >
          {collapsed ? (
            <img
              src={logoCollapsed ?? '/logo-collapsed.png'}
              alt="PSDocs"
              className="h-7 w-7 object-contain"
            />
          ) : (
            <img
              src={logoFull ?? '/logo-white.png'}
              alt="PSDocs"
              className="h-8 object-contain"
            />
          )}
        </Link>

        {/* Nav */}
        <nav className="flex-1 px-2 py-4 overflow-y-auto space-y-1">
          {/* Firm section */}
          <div className="mb-1">
            <SectionHeader
              label="Firm"
              isOpen={firmOpen}
              onToggle={() => toggleSection('firm', firmOpen, setFirmOpen)}
            />
            {(firmOpen || collapsed) && <NavItems items={firmItems} />}
          </div>

          {/* Practice section */}
          <div className="pt-2 border-t border-brand-700">
            <SectionHeader
              label="Practice"
              isOpen={practiceOpen}
              onToggle={() => toggleSection('practice', practiceOpen, setPracticeOpen)}
            />
            {(practiceOpen || collapsed) && <NavItems items={practiceItems} />}
          </div>

          {/* Reports section */}
          <div className="pt-2 border-t border-brand-700">
            <SectionHeader
              label="Reports"
              isOpen={reportsOpen}
              onToggle={() => toggleSection('reports', reportsOpen, setReportsOpen)}
            />
            {(reportsOpen || collapsed) && <NavItems items={reportsItems} />}
          </div>
        </nav>

        {/* Bottom: settings + collapse */}
        <div className={`border-t border-brand-700 flex items-center ${collapsed ? 'flex-col gap-3 py-4' : 'justify-between px-4 py-4'}`}>
          <button
            onClick={() => setShowSettings((s) => !s)}
            className="text-brand-400 hover:text-white transition-colors"
            title="Settings"
          >
            <GearIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCollapsed((c) => !c)}
            className="text-brand-400 hover:text-white transition-colors"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRightIcon className="w-4 h-4" /> : <ChevronLeftIcon className="w-4 h-4" />}
          </button>
        </div>
      </aside>

      {showSettings && (
        <SettingsModal
          currentTheme={currentTheme}
          onThemeChange={handleThemeChange}
          logoFull={logoFull}
          logoCollapsed={logoCollapsed}
          onLogoChange={handleLogoChange}
          onLogoRemove={handleLogoRemove}
          onClose={() => setShowSettings(false)}
        />
      )}
    </>
  );
}

function BuildingIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function FolderIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
    </svg>
  );
}

function UsersIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ChartIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function DocumentIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

function GearIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ChevronLeftIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ChevronDownIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function BriefcaseIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
