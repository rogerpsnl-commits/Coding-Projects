import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { mattersApi } from '../../services/api.js';
import { clientsApi } from '../../services/api.js';

const STATUS_OPTIONS = [
  { value: '', label: 'All Statuses' },
  { value: 'open', label: 'Open' },
  { value: 'closed', label: 'Closed' },
  { value: 'settled', label: 'Settled' },
  { value: 'inactive', label: 'Inactive' },
];

const STATUS_BADGE = {
  open: 'bg-green-100 text-green-700',
  closed: 'bg-brand-100 text-brand-500',
  settled: 'bg-blue-100 text-blue-700',
  inactive: 'bg-yellow-100 text-yellow-700',
};

export default function MatterList() {
  const [matters, setMatters] = useState([]);
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('open');
  const [clientId, setClientId] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    clientsApi.list().then(setClients).catch(() => {});
  }, []);

  useEffect(() => {
    const params = {};
    if (status) params.status = status;
    if (clientId) params.client_id = clientId;
    if (search) params.search = search;

    setLoading(true);
    mattersApi
      .list(params)
      .then(setMatters)
      .catch(() => setMatters([]))
      .finally(() => setLoading(false));
  }, [status, clientId, search]);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-brand-800">Matters</h1>
          <p className="text-sm text-brand-500 mt-0.5">
            {matters.length} matter{matters.length !== 1 ? 's' : ''} found
          </p>
        </div>
        <Link
          to="/matters/new"
          className="flex items-center gap-2 bg-brand-700 hover:bg-brand-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Matter
        </Link>
      </div>

      <div className="flex flex-wrap gap-3 mb-5">
        <input
          type="text"
          placeholder="Search by title, nickname, or file #..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-48 max-w-xs border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        <select
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className="border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          <option value="">All Clients</option>
          {clients.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          {STATUS_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-brand-100 overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-brand-400 text-sm">Loading...</div>
        ) : matters.length === 0 ? (
          <div className="py-16 text-center text-brand-400 text-sm">No matters found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-brand-100 bg-brand-50">
                <th className="text-left px-5 py-3 font-medium text-brand-500">File #</th>
                <th className="text-left px-5 py-3 font-medium text-brand-500">Title / Nickname</th>
                <th className="text-left px-5 py-3 font-medium text-brand-500">Client</th>
                <th className="text-left px-5 py-3 font-medium text-brand-500">Assigned Staff</th>
                <th className="text-left px-5 py-3 font-medium text-brand-500">Start Date</th>
                <th className="text-left px-5 py-3 font-medium text-brand-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-50">
              {matters.map((m) => (
                <tr
                  key={m.id}
                  onClick={() => navigate(`/matters/${m.id}`)}
                  className="hover:bg-brand-50 cursor-pointer transition-colors"
                >
                  <td className="px-5 py-3 font-mono text-xs text-brand-500">{m.file_number ?? '—'}</td>
                  <td className="px-5 py-3">
                    <span className="font-medium text-brand-600">{m.nickname || m.title}</span>
                    {m.nickname && m.title && (
                      <span className="block text-xs text-brand-400 mt-0.5 truncate max-w-xs">{m.title}</span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-brand-600">
                    {m.clients ? (
                      <span>
                        <span className="font-mono text-xs text-brand-400 mr-1">[{m.clients.abbreviation}]</span>
                        {m.clients.name}
                      </span>
                    ) : '—'}
                  </td>
                  <td className="px-5 py-3 text-brand-600">
                    {m.matter_staff && m.matter_staff.length > 0
                      ? m.matter_staff.map((ms) => `${ms.staff.first_name} ${ms.staff.last_name}`).join(', ')
                      : '—'}
                  </td>
                  <td className="px-5 py-3 text-brand-600">
                    {m.start_date ? new Date(m.start_date).toLocaleDateString() : '—'}
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${STATUS_BADGE[m.status] ?? ''}`}>
                      {m.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
