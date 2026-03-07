import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { staffApi } from '../../services/api.js';

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

export default function StaffDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  useEffect(() => {
    staffApi
      .get(id)
      .then(setMember)
      .catch(() => setMember(null))
      .finally(() => setLoading(false));
  }, [id]);

  async function deleteMember() {
    await staffApi.remove(id);
    navigate('/staff');
  }

  if (loading) return <div className="p-8 text-brand-400 text-sm">Loading...</div>;
  if (!member) return <div className="p-8 text-red-500 text-sm">Staff member not found.</div>;

  return (
    <div className="p-8 max-w-2xl">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <Link to="/staff" className="text-sm text-brand-500 hover:underline mb-1 inline-block">
            &larr; Staff
          </Link>
          <h1 className="text-2xl font-semibold text-brand-800">
            {member.first_name} {member.last_name}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            {member.role && (
              <span className="text-sm text-brand-500">{ROLE_LABELS[member.role]}</span>
            )}
            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${STATUS_BADGE[member.status] ?? ''}`}>
              {member.status}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/staff/${id}/edit`}
            className="text-sm border border-brand-200 hover:bg-brand-50 px-3 py-2 rounded-md transition-colors text-brand-700"
          >
            Edit
          </Link>
          {!deleteConfirm ? (
            <button
              onClick={() => setDeleteConfirm(true)}
              className="text-sm border border-red-300 text-red-600 hover:bg-red-50 px-3 py-2 rounded-md transition-colors"
            >
              Delete
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-md px-3 py-2">
              <span className="text-xs text-red-700">Confirm delete?</span>
              <button onClick={deleteMember} className="text-xs text-red-700 font-medium hover:underline">Yes</button>
              <button onClick={() => setDeleteConfirm(false)} className="text-xs text-brand-500 hover:underline">No</button>
            </div>
          )}
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-white rounded-xl shadow-sm border border-brand-100 p-6">
        <h2 className="text-xs font-semibold text-brand-400 uppercase tracking-wide mb-4">Staff Details</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <Field label="Role" value={ROLE_LABELS[member.role]} />
          <Field label="Status" value={member.status} />
          <div>
            <dt className="text-xs font-medium text-brand-400 uppercase tracking-wide">Billable</dt>
            <dd className="mt-1">
              <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                member.billable !== false ? 'bg-green-100 text-green-700' : 'bg-brand-100 text-brand-500'
              }`}>
                {member.billable !== false ? 'Billable' : 'Non-billable'}
              </span>
            </dd>
          </div>
          <Field label="Email" value={member.email} />
          <Field label="Phone" value={member.phone} />
          <Field label="Bar / License #" value={member.license_number} noCapitalize />
          <Field
            label="Hourly Rate"
            value={member.hourly_rate != null ? `$${Number(member.hourly_rate).toFixed(2)}/hr` : 'Uses role default'}
            noCapitalize
          />
        </div>
        {member.notes && (
          <div className="mt-4 pt-4 border-t border-brand-50">
            <Field label="Notes" value={member.notes} />
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, value, noCapitalize }) {
  return (
    <div>
      <dt className="text-xs font-medium text-brand-400 uppercase tracking-wide">{label}</dt>
      <dd className={`mt-1 text-sm text-brand-800 ${noCapitalize ? '' : 'capitalize'}`}>{value ?? '—'}</dd>
    </div>
  );
}
