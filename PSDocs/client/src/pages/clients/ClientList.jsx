import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { clientsApi } from '../../services/api.js';

const STATUS_OPTIONS = [
  { value: '', label: 'All Clients' },
  { value: 'active', label: 'Active' },
  { value: 'former', label: 'Former' },
  { value: 'inactive', label: 'Inactive' },
];

const FEE_LABELS = {
  hourly: 'Hourly',
  fixed: 'Fixed Fee',
  contingency: 'Contingency',
  retainer: 'Retainer',
  other: 'Other',
};

const STATUS_BADGE = {
  active: 'bg-green-100 text-green-700',
  former: 'bg-slate-100 text-slate-600',
  inactive: 'bg-yellow-100 text-yellow-700',
};

export default function ClientList() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('active');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const params = {};
    if (status) params.status = status;
    if (search) params.search = search;

    setLoading(true);
    clientsApi
      .list(params)
      .then(setClients)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [search, status]);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Clients</h1>
          <p className="text-sm text-slate-500 mt-0.5">{clients.length} client{clients.length !== 1 ? 's' : ''} found</p>
        </div>
        <Link
          to="/clients/new"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Client
        </Link>
      </div>

      <div className="flex gap-3 mb-5">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 max-w-xs border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {STATUS_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-slate-400 text-sm">Loading...</div>
        ) : error ? (
          <div className="py-16 text-center text-red-500 text-sm">{error}</div>
        ) : clients.length === 0 ? (
          <div className="py-16 text-center text-slate-400 text-sm">No clients found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left px-5 py-3 font-medium text-slate-500">Client Name</th>
                <th className="text-left px-5 py-3 font-medium text-slate-500">Short Code</th>
                <th className="text-left px-5 py-3 font-medium text-slate-500">Fee Arrangement</th>
                <th className="text-left px-5 py-3 font-medium text-slate-500">Rate Effective</th>
                <th className="text-left px-5 py-3 font-medium text-slate-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {clients.map((client) => (
                <tr
                  key={client.id}
                  onClick={() => navigate(`/clients/${client.id}`)}
                  className="hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <td className="px-5 py-3 font-medium text-blue-600">{client.name}</td>
                  <td className="px-5 py-3 text-slate-500 font-mono text-xs">{client.abbreviation}</td>
                  <td className="px-5 py-3 text-slate-600">{FEE_LABELS[client.fee_arrangement] ?? '—'}</td>
                  <td className="px-5 py-3 text-slate-600">
                    {client.rate_effective_date
                      ? new Date(client.rate_effective_date).toLocaleDateString()
                      : '—'}
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${STATUS_BADGE[client.status] ?? ''}`}>
                      {client.status}
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
