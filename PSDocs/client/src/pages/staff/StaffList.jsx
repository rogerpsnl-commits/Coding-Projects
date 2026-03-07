import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { staffApi } from '../../services/api.js';
import PrintButton from '../../components/PrintButton.jsx';

const STATUS_OPTIONS = [
  { value: '', label: 'All Staff' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

const ROLE_OPTIONS = [
  { value: '', label: 'All Roles' },
  { value: 'partner', label: 'Partner' },
  { value: 'associate', label: 'Associate' },
  { value: 'paralegal', label: 'Paralegal' },
  { value: 'admin', label: 'Admin' },
  { value: 'other', label: 'Other' },
];

const ROLE_LABELS = {
  partner: 'Partner',
  associate: 'Associate',
  paralegal: 'Paralegal',
  admin: 'Admin',
  other: 'Other',
};

const STATUS_BADGE = {
  active: 'bg-green-100 text-green-700',
  inactive: 'bg-yellow-100 text-yellow-700',
};

export default function StaffList() {
  const [staff, setStaff] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('active');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const params = {};
    if (status) params.status = status;
    if (role) params.role = role;
    if (search) params.search = search;

    setLoading(true);
    staffApi
      .list(params)
      .then(setStaff)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [search, status, role]);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-brand-800">Staff</h1>
          <p className="text-sm text-brand-500 mt-0.5">
            {staff.length} member{staff.length !== 1 ? 's' : ''} found
          </p>
        </div>
        <div className="flex gap-2 no-print">
          <PrintButton />
          <Link
            to="/staff/new"
            className="flex items-center gap-2 bg-brand-700 hover:bg-brand-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Staff Member
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-5 no-print">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-48 max-w-xs border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          {ROLE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
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
        ) : error ? (
          <div className="py-16 text-center text-red-500 text-sm">{error}</div>
        ) : staff.length === 0 ? (
          <div className="py-16 text-center text-brand-400 text-sm">No staff members found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-brand-100 bg-brand-50">
                <th className="text-left px-5 py-3 font-medium text-brand-500">Name</th>
                <th className="text-left px-5 py-3 font-medium text-brand-500">Role</th>
                <th className="text-left px-5 py-3 font-medium text-brand-500">Email</th>
                <th className="text-left px-5 py-3 font-medium text-brand-500">Phone</th>
                <th className="text-left px-5 py-3 font-medium text-brand-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-50">
              {staff.map((s) => (
                <tr
                  key={s.id}
                  onClick={() => navigate(`/staff/${s.id}`)}
                  className="hover:bg-brand-50 cursor-pointer transition-colors"
                >
                  <td className="px-5 py-3 font-medium text-brand-600">
                    {s.first_name} {s.last_name}
                  </td>
                  <td className="px-5 py-3 text-brand-600">{ROLE_LABELS[s.role] ?? '—'}</td>
                  <td className="px-5 py-3 text-brand-600">{s.email ?? '—'}</td>
                  <td className="px-5 py-3 text-brand-600">{s.phone ?? '—'}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${STATUS_BADGE[s.status] ?? ''}`}>
                      {s.status}
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
