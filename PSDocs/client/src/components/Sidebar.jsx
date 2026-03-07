import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/matters', label: 'Matters', icon: FolderIcon },
  { to: '/clients', label: 'Clients', icon: BuildingIcon },
  { to: '/staff', label: 'Staff', icon: UsersIcon, disabled: true },
  { to: '/reports', label: 'Reports', icon: ChartIcon, disabled: true },
  { to: '/marketing', label: 'Marketing', icon: MegaphoneIcon, disabled: true },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`${collapsed ? 'w-14' : 'w-56'} bg-brand-900 text-brand-200 flex flex-col shrink-0 transition-all duration-200`}
    >
      {/* Logo */}
      <div className={`flex items-center border-b border-brand-700 h-16 ${collapsed ? 'justify-center px-0' : 'px-5'}`}>
        {collapsed ? (
          <span className="text-white text-lg font-bold">P</span>
        ) : (
          <span className="text-white text-xl font-semibold tracking-tight">PSDocs</span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map(({ to, label, icon: Icon, disabled }) => {
          const baseClass = `flex items-center rounded-md text-sm transition-colors ${
            collapsed ? 'justify-center px-0 py-2.5' : 'gap-3 px-3 py-2'
          }`;

          if (disabled) {
            return (
              <div
                key={to}
                title={collapsed ? label : undefined}
                className={`${baseClass} text-brand-500 cursor-not-allowed select-none`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {!collapsed && label}
              </div>
            );
          }

          return (
            <NavLink
              key={to}
              to={to}
              title={collapsed ? label : undefined}
              className={({ isActive }) =>
                `${baseClass} ${
                  isActive
                    ? 'bg-brand-700 text-white'
                    : 'text-brand-300 hover:bg-brand-800 hover:text-white'
                }`
              }
            >
              <Icon className="w-4 h-4 shrink-0" />
              {!collapsed && label}
            </NavLink>
          );
        })}
      </nav>

      {/* Toggle + version */}
      <div className={`border-t border-brand-700 flex items-center ${collapsed ? 'justify-center py-4' : 'justify-between px-4 py-4'}`}>
        {!collapsed && <span className="text-xs text-brand-500">v0.1.0</span>}
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="text-brand-400 hover:text-white transition-colors"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRightIcon className="w-4 h-4" /> : <ChevronLeftIcon className="w-4 h-4" />}
        </button>
      </div>
    </aside>
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

function MegaphoneIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
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
