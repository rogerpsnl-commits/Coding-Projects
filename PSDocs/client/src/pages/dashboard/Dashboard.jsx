import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { mattersApi, staffApi, clientsApi } from '../../services/api.js';

const DEFAULT_ORDER = ['stats', 'recent_matters', 'matters_by_status', 'staff_workload', 'client_activity'];

function loadOrder() {
  try {
    const stored = JSON.parse(localStorage.getItem('psdocs-dashboard-order'));
    if (Array.isArray(stored) && stored.length === DEFAULT_ORDER.length) return stored;
  } catch {}
  return DEFAULT_ORDER;
}

export default function Dashboard() {
  const [matters, setMatters] = useState([]);
  const [staff, setStaff] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [widgetOrder, setWidgetOrder] = useState(loadOrder);

  const dragSrc = useRef(null);
  const dragOver = useRef(null);

  useEffect(() => {
    Promise.all([
      mattersApi.list(),
      staffApi.list(),
      clientsApi.list(),
    ]).then(([m, s, c]) => {
      setMatters(m);
      setStaff(s);
      setClients(c);
    }).finally(() => setLoading(false));
  }, []);

  function handleDragStart(id) {
    dragSrc.current = id;
  }

  function handleDragOver(e, id) {
    e.preventDefault();
    dragOver.current = id;
  }

  function handleDrop() {
    if (dragSrc.current === dragOver.current) return;
    const order = [...widgetOrder];
    const srcIdx = order.indexOf(dragSrc.current);
    const dstIdx = order.indexOf(dragOver.current);
    order.splice(srcIdx, 1);
    order.splice(dstIdx, 0, dragSrc.current);
    dragSrc.current = null;
    dragOver.current = null;
    setWidgetOrder(order);
    localStorage.setItem('psdocs-dashboard-order', JSON.stringify(order));
  }

  if (loading) return <div className="p-8 text-brand-400 text-sm">Loading...</div>;

  const openMatters = matters.filter((m) => m.status === 'open');
  const activeClients = clients.filter((c) => c.status === 'active');
  const activeStaff = staff.filter((s) => s.status === 'active');

  const widgets = {
    stats: <StatsWidget openMatters={openMatters} activeClients={activeClients} activeStaff={activeStaff} />,
    recent_matters: <RecentMattersWidget matters={openMatters} />,
    matters_by_status: <MattersByStatusWidget matters={matters} />,
    staff_workload: <StaffWorkloadWidget matters={matters} staff={activeStaff} />,
    client_activity: <ClientActivityWidget matters={matters} clients={activeClients} />,
  };

  const WIDGET_TITLES = {
    stats: 'Overview',
    recent_matters: 'Open Matters',
    matters_by_status: 'Matters by Status',
    staff_workload: 'Staff Workload',
    client_activity: 'Client Activity',
  };

  // Stats is always full-width at top; rest are draggable
  const topWidget = widgetOrder[0];
  const gridWidgets = widgetOrder.slice(1);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-brand-800 mb-6">Dashboard</h1>

      {/* Top widget (always full width) */}
      <div
        draggable
        onDragStart={() => handleDragStart(topWidget)}
        onDragOver={(e) => handleDragOver(e, topWidget)}
        onDrop={handleDrop}
        className="mb-5 cursor-grab active:cursor-grabbing"
      >
        {widgets[topWidget]}
      </div>

      {/* Grid widgets */}
      <div className="grid grid-cols-2 gap-5">
        {gridWidgets.map((id) => (
          <div
            key={id}
            draggable
            onDragStart={() => handleDragStart(id)}
            onDragOver={(e) => handleDragOver(e, id)}
            onDrop={handleDrop}
            className="cursor-grab active:cursor-grabbing"
          >
            <WidgetShell title={WIDGET_TITLES[id]}>
              {widgets[id]}
            </WidgetShell>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-brand-300 text-center">Drag widgets to rearrange</p>
    </div>
  );
}

function WidgetShell({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-brand-100 overflow-hidden h-full">
      <div className="px-5 py-3 border-b border-brand-50 flex items-center justify-between">
        <h2 className="text-xs font-semibold text-brand-500 uppercase tracking-wide">{title}</h2>
        <svg className="w-3.5 h-3.5 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function StatsWidget({ openMatters, activeClients, activeStaff }) {
  const stats = [
    { label: 'Open Matters', value: openMatters.length, to: '/matters', color: 'text-brand-700' },
    { label: 'Active Clients', value: activeClients.length, to: '/clients', color: 'text-green-700' },
    { label: 'Active Staff', value: activeStaff.length, to: '/staff', color: 'text-blue-700' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map(({ label, value, to, color }) => (
        <Link
          key={label}
          to={to}
          className="bg-white rounded-xl shadow-sm border border-brand-100 p-5 hover:shadow-md transition-shadow group"
        >
          <p className="text-xs font-semibold text-brand-400 uppercase tracking-wide mb-1">{label}</p>
          <p className={`text-4xl font-bold ${color} group-hover:opacity-80 transition-opacity`}>{value}</p>
        </Link>
      ))}
    </div>
  );
}

function RecentMattersWidget({ matters }) {
  const recent = [...matters]
    .sort((a, b) => new Date(b.created_at ?? 0) - new Date(a.created_at ?? 0))
    .slice(0, 6);

  if (recent.length === 0) {
    return <p className="text-sm text-brand-400">No open matters.</p>;
  }

  return (
    <ul className="divide-y divide-brand-50 -mx-5 -mt-5">
      {recent.map((m) => (
        <li key={m.id}>
          <Link
            to={`/matters/${m.id}`}
            className="flex items-center justify-between px-5 py-3 hover:bg-brand-50 transition-colors"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium text-brand-700 truncate">{m.nickname || m.title}</p>
              <p className="text-xs text-brand-400 mt-0.5">{m.clients?.name ?? '—'}</p>
            </div>
            {m.file_number && (
              <span className="ml-3 text-xs font-mono text-brand-300 shrink-0">{m.file_number}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MattersByStatusWidget({ matters }) {
  const STATUS_LABELS = { open: 'Open', closed: 'Closed', settled: 'Settled', inactive: 'Inactive' };
  const STATUS_COLOR = {
    open: 'bg-green-100 text-green-700',
    closed: 'bg-brand-100 text-brand-500',
    settled: 'bg-blue-100 text-blue-700',
    inactive: 'bg-yellow-100 text-yellow-700',
  };
  const order = ['open', 'settled', 'inactive', 'closed'];

  const byStatus = matters.reduce((acc, m) => {
    acc[m.status] = (acc[m.status] ?? 0) + 1;
    return acc;
  }, {});

  const total = matters.length || 1;

  return (
    <div className="space-y-3">
      {order.map((status) => {
        const count = byStatus[status] ?? 0;
        const pct = Math.round((count / total) * 100);
        return (
          <div key={status}>
            <div className="flex items-center justify-between mb-1">
              <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${STATUS_COLOR[status]}`}>
                {STATUS_LABELS[status]}
              </span>
              <span className="text-sm font-semibold text-brand-700">{count}</span>
            </div>
            <div className="h-1.5 bg-brand-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-500 rounded-full transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StaffWorkloadWidget({ matters, staff }) {
  const workload = staff
    .map((s) => {
      const open = matters.filter(
        (m) => m.status === 'open' && (m.matter_staff ?? []).some((ms) => ms.staff_id === s.id)
      ).length;
      return { ...s, open };
    })
    .filter((s) => s.open > 0)
    .sort((a, b) => b.open - a.open)
    .slice(0, 6);

  if (workload.length === 0) {
    return <p className="text-sm text-brand-400">No assigned staff on open matters.</p>;
  }

  const max = workload[0].open || 1;

  return (
    <div className="space-y-3">
      {workload.map((s) => (
        <div key={s.id}>
          <div className="flex items-center justify-between mb-1">
            <Link to={`/staff/${s.id}`} className="text-sm text-brand-700 hover:underline truncate">
              {s.first_name} {s.last_name}
              <span className="ml-1 text-xs text-brand-400 capitalize">({s.role})</span>
            </Link>
            <span className="text-sm font-semibold text-brand-700 ml-3 shrink-0">{s.open}</span>
          </div>
          <div className="h-1.5 bg-brand-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-500 rounded-full transition-all"
              style={{ width: `${Math.round((s.open / max) * 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ClientActivityWidget({ matters, clients }) {
  const activity = clients
    .map((c) => {
      const open = matters.filter((m) => m.client_id === c.id && m.status === 'open').length;
      return { ...c, open };
    })
    .filter((c) => c.open > 0)
    .sort((a, b) => b.open - a.open)
    .slice(0, 6);

  if (activity.length === 0) {
    return <p className="text-sm text-brand-400">No active client matters.</p>;
  }

  return (
    <ul className="divide-y divide-brand-50 -mx-5 -mt-5">
      {activity.map((c) => (
        <li key={c.id}>
          <Link
            to={`/clients/${c.id}`}
            className="flex items-center justify-between px-5 py-2.5 hover:bg-brand-50 transition-colors"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium text-brand-700 truncate">{c.name}</p>
              {c.abbreviation && (
                <p className="text-xs font-mono text-brand-300">{c.abbreviation}</p>
              )}
            </div>
            <span className="ml-3 shrink-0 text-xs font-semibold bg-brand-100 text-brand-600 px-2 py-0.5 rounded-full">
              {c.open} open
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
