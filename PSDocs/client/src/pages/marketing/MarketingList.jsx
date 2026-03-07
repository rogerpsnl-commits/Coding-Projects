import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { marketingApi } from '../../services/api.js';

const TYPE_LABELS = {
  referral_program: 'Referral Program',
  social_media: 'Social Media',
  event: 'Event',
  advertisement: 'Advertisement',
  networking: 'Networking',
  other: 'Other',
};

const STATUS_BADGE = {
  planned: 'bg-yellow-100 text-yellow-700',
  active: 'bg-green-100 text-green-700',
  completed: 'bg-brand-100 text-brand-500',
  cancelled: 'bg-red-100 text-red-600',
};

export default function MarketingList() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    const params = {};
    if (statusFilter) params.status = statusFilter;
    if (search) params.search = search;

    marketingApi.list(params)
      .then(setActivities)
      .catch(() => setActivities([]))
      .finally(() => setLoading(false));
  }, [search, statusFilter]);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-brand-800">Marketing</h1>
        <Link
          to="/marketing/new"
          className="bg-brand-700 hover:bg-brand-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
        >
          + New Activity
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-5">
        <input
          type="search"
          placeholder="Search activities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-brand-200 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 w-64"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-brand-200 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          <option value="">All Statuses</option>
          <option value="planned">Planned</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {loading ? (
        <div className="text-brand-400 text-sm">Loading...</div>
      ) : activities.length === 0 ? (
        <div className="text-brand-400 text-sm">No marketing activities found.</div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-brand-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-brand-100">
                <th className="text-left px-5 py-3 text-xs font-semibold text-brand-400 uppercase tracking-wide">Title</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-brand-400 uppercase tracking-wide">Type</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-brand-400 uppercase tracking-wide">Status</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-brand-400 uppercase tracking-wide">Budget</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-brand-400 uppercase tracking-wide">Start Date</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((a) => (
                <tr key={a.id} className="border-b border-brand-50 hover:bg-brand-50 transition-colors">
                  <td className="px-5 py-3">
                    <Link to={`/marketing/${a.id}`} className="font-medium text-brand-700 hover:underline">
                      {a.title}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-brand-500">{TYPE_LABELS[a.type] ?? a.type ?? '—'}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${STATUS_BADGE[a.status] ?? ''}`}>
                      {a.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-brand-500">
                    {a.budget != null ? `$${Number(a.budget).toLocaleString()}` : '—'}
                  </td>
                  <td className="px-5 py-3 text-brand-500">
                    {a.start_date ? new Date(a.start_date).toLocaleDateString() : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
