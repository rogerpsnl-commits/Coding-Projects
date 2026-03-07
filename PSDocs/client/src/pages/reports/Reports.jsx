import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mattersApi, staffApi, clientsApi } from '../../services/api.js';
import PrintButton from '../../components/PrintButton.jsx';

export default function Reports() {
  const [matters, setMatters] = useState([]);
  const [staff, setStaff] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeReport, setActiveReport] = useState('matters_by_status');

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

  const reports = [
    { id: 'matters_by_status', label: 'Matters by Status' },
    { id: 'staff_workload', label: 'Staff Workload' },
    { id: 'client_activity', label: 'Client Activity' },
  ];

  if (loading) return <div className="p-8 text-brand-400 text-sm">Loading...</div>;

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-brand-800">Reports</h1>
        <PrintButton />
      </div>

      {/* Report tabs */}
      <div className="flex gap-1 mb-6 bg-brand-100 rounded-lg p-1 w-fit no-print">
        {reports.map((r) => (
          <button
            key={r.id}
            onClick={() => setActiveReport(r.id)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              activeReport === r.id
                ? 'bg-white shadow-sm text-brand-800'
                : 'text-brand-500 hover:text-brand-700'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      {activeReport === 'matters_by_status' && (
        <MattersByStatus matters={matters} />
      )}
      {activeReport === 'staff_workload' && (
        <StaffWorkload matters={matters} staff={staff} />
      )}
      {activeReport === 'client_activity' && (
        <ClientActivity matters={matters} clients={clients} />
      )}
    </div>
  );
}

function MattersByStatus({ matters }) {
  const STATUS_LABELS = {
    open: 'Open',
    closed: 'Closed',
    settled: 'Settled',
    inactive: 'Inactive',
  };
  const STATUS_COLOR = {
    open: 'bg-green-100 text-green-700',
    closed: 'bg-brand-100 text-brand-500',
    settled: 'bg-blue-100 text-blue-700',
    inactive: 'bg-yellow-100 text-yellow-700',
  };

  const byStatus = matters.reduce((acc, m) => {
    acc[m.status] = (acc[m.status] ?? []).concat(m);
    return acc;
  }, {});

  const order = ['open', 'settled', 'inactive', 'closed'];

  return (
    <div className="space-y-4">
      {/* Summary cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {order.map((status) => {
          const count = byStatus[status]?.length ?? 0;
          return (
            <div key={status} className="bg-white rounded-xl shadow-sm border border-brand-100 p-5">
              <p className="text-xs font-semibold text-brand-400 uppercase tracking-wide mb-1">{STATUS_LABELS[status]}</p>
              <p className="text-3xl font-bold text-brand-800">{count}</p>
            </div>
          );
        })}
      </div>

      {/* Detail tables per status */}
      {order.map((status) => {
        const list = byStatus[status] ?? [];
        if (list.length === 0) return null;
        return (
          <div key={status} className="bg-white rounded-xl shadow-sm border border-brand-100 overflow-hidden">
            <div className="px-5 py-3 border-b border-brand-100 flex items-center gap-2">
              <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${STATUS_COLOR[status]}`}>
                {STATUS_LABELS[status]}
              </span>
              <span className="text-xs text-brand-400">{list.length} matter{list.length !== 1 ? 's' : ''}</span>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {list.map((m) => (
                  <tr key={m.id} className="border-b border-brand-50 hover:bg-brand-50 transition-colors">
                    <td className="px-5 py-2.5">
                      <Link to={`/matters/${m.id}`} className="font-medium text-brand-700 hover:underline">
                        {m.nickname || m.title}
                      </Link>
                    </td>
                    <td className="px-5 py-2.5 text-brand-400 text-xs font-mono">
                      {m.file_number ?? '—'}
                    </td>
                    <td className="px-5 py-2.5 text-brand-500 text-xs">
                      {m.clients?.name ?? '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

function StaffWorkload({ matters, staff }) {
  const workload = staff.map((s) => {
    const assigned = matters.filter((m) =>
      (m.matter_staff ?? []).some((ms) => ms.staff_id === s.id)
    );
    const open = assigned.filter((m) => m.status === 'open').length;
    return { ...s, total: assigned.length, open, matters: assigned };
  }).sort((a, b) => b.open - a.open);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-brand-100 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-brand-100">
            <th className="text-left px-5 py-3 text-xs font-semibold text-brand-400 uppercase tracking-wide">Staff Member</th>
            <th className="text-left px-5 py-3 text-xs font-semibold text-brand-400 uppercase tracking-wide">Role</th>
            <th className="text-left px-5 py-3 text-xs font-semibold text-brand-400 uppercase tracking-wide">Open Matters</th>
            <th className="text-left px-5 py-3 text-xs font-semibold text-brand-400 uppercase tracking-wide">Total Matters</th>
          </tr>
        </thead>
        <tbody>
          {workload.map((s) => (
            <tr key={s.id} className="border-b border-brand-50 hover:bg-brand-50 transition-colors">
              <td className="px-5 py-3">
                <Link to={`/staff/${s.id}`} className="font-medium text-brand-700 hover:underline">
                  {s.first_name} {s.last_name}
                </Link>
              </td>
              <td className="px-5 py-3 text-brand-500 capitalize">{s.role ?? '—'}</td>
              <td className="px-5 py-3">
                <span className={`font-semibold ${s.open > 0 ? 'text-brand-800' : 'text-brand-400'}`}>
                  {s.open}
                </span>
              </td>
              <td className="px-5 py-3 text-brand-500">{s.total}</td>
            </tr>
          ))}
          {workload.length === 0 && (
            <tr>
              <td colSpan={4} className="px-5 py-4 text-brand-400 text-center text-sm">No staff data.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function ClientActivity({ matters, clients }) {
  const activity = clients.map((c) => {
    const clientMatters = matters.filter((m) => m.client_id === c.id);
    const open = clientMatters.filter((m) => m.status === 'open').length;
    return { ...c, total: clientMatters.length, open };
  }).filter((c) => c.total > 0).sort((a, b) => b.open - a.open || b.total - a.total);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-brand-100 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-brand-100">
            <th className="text-left px-5 py-3 text-xs font-semibold text-brand-400 uppercase tracking-wide">Client</th>
            <th className="text-left px-5 py-3 text-xs font-semibold text-brand-400 uppercase tracking-wide">Code</th>
            <th className="text-left px-5 py-3 text-xs font-semibold text-brand-400 uppercase tracking-wide">Open Matters</th>
            <th className="text-left px-5 py-3 text-xs font-semibold text-brand-400 uppercase tracking-wide">Total Matters</th>
          </tr>
        </thead>
        <tbody>
          {activity.map((c) => (
            <tr key={c.id} className="border-b border-brand-50 hover:bg-brand-50 transition-colors">
              <td className="px-5 py-3">
                <Link to={`/clients/${c.id}`} className="font-medium text-brand-700 hover:underline">
                  {c.name}
                </Link>
              </td>
              <td className="px-5 py-3 text-brand-400 font-mono text-xs">{c.abbreviation}</td>
              <td className="px-5 py-3">
                <span className={`font-semibold ${c.open > 0 ? 'text-brand-800' : 'text-brand-400'}`}>
                  {c.open}
                </span>
              </td>
              <td className="px-5 py-3 text-brand-500">{c.total}</td>
            </tr>
          ))}
          {activity.length === 0 && (
            <tr>
              <td colSpan={4} className="px-5 py-4 text-brand-400 text-center text-sm">No client activity data.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
