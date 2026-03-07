import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { mattersApi } from '../../services/api.js';

const STATUS_BADGE = {
  open: 'bg-green-100 text-green-700',
  closed: 'bg-brand-100 text-brand-500',
  settled: 'bg-blue-100 text-blue-700',
  inactive: 'bg-yellow-100 text-yellow-700',
};

export default function MatterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [matter, setMatter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  useEffect(() => {
    mattersApi
      .get(id)
      .then(setMatter)
      .catch(() => setMatter(null))
      .finally(() => setLoading(false));
  }, [id]);

  async function deleteMatter() {
    await mattersApi.remove(id);
    navigate('/matters');
  }

  if (loading) return <div className="p-8 text-brand-400 text-sm">Loading...</div>;
  if (!matter) return <div className="p-8 text-red-500 text-sm">Matter not found.</div>;

  const client = matter.clients;
  const contact = matter.client_contacts;

  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <Link to="/matters" className="text-sm text-brand-500 hover:underline mb-1 inline-block">
            &larr; Matters
          </Link>
          <h1 className="text-2xl font-semibold text-brand-800">
            {matter.nickname || matter.title}
          </h1>
          {matter.nickname && matter.title && (
            <p className="text-sm text-brand-500 mt-0.5">{matter.title}</p>
          )}
          <div className="flex items-center gap-2 mt-2">
            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${STATUS_BADGE[matter.status] ?? ''}`}>
              {matter.status}
            </span>
            {matter.file_number && (
              <span className="text-xs text-brand-400 font-mono">File #{matter.file_number}</span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/matters/${id}/edit`}
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
              <button onClick={deleteMatter} className="text-xs text-red-700 font-medium hover:underline">Yes</button>
              <button onClick={() => setDeleteConfirm(false)} className="text-xs text-brand-500 hover:underline">No</button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-5">
        {/* Main Info */}
        <div className="col-span-2 bg-white rounded-xl shadow-sm border border-brand-100 p-6">
          <h2 className="text-xs font-semibold text-brand-400 uppercase tracking-wide mb-4">Matter Details</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <Field label="File Number" value={matter.file_number} mono />
            <Field label="Reference / Claim #" value={matter.reference_number} />
            <Field label="Matter Number" value={matter.matter_number} />
            <Field label="Short Title" value={matter.short_title} />
            <Field label="Billing Method" value={matter.billing_method} />
            <Field
              label="Deductible"
              value={matter.deductible != null ? `$${Number(matter.deductible).toLocaleString()}` : null}
            />
            <Field label="Office" value={matter.office} />
            <Field label="Court" value={matter.court} />
            <Field label="Conflict Parties" value={matter.conflict_parties} />
          </div>
          {matter.matter_staff && matter.matter_staff.length > 0 && (
            <div className="mt-4 pt-4 border-t border-brand-50">
              <dt className="text-xs font-medium text-brand-400 uppercase tracking-wide mb-2">Assigned Staff</dt>
              <div className="flex flex-wrap gap-2">
                {matter.matter_staff.map((ms) => {
                  const effectiveRate = ms.hourly_rate ?? ms.staff?.hourly_rate ?? null;
                  return (
                    <div key={ms.staff_id} className="flex items-center gap-1.5 px-2.5 py-1 bg-brand-100 rounded-full">
                      <span className="text-xs font-medium text-brand-700">
                        {ms.staff.first_name} {ms.staff.last_name}
                      </span>
                      {effectiveRate != null && (
                        <span className="text-xs text-brand-500">${Number(effectiveRate).toFixed(2)}/hr</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {matter.notes && (
            <div className="mt-4 pt-4 border-t border-brand-50">
              <Field label="Notes" value={matter.notes} />
            </div>
          )}
        </div>

        {/* Sidebar: dates + client */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-brand-100 p-5">
            <h2 className="text-xs font-semibold text-brand-400 uppercase tracking-wide mb-3">Dates</h2>
            <div className="space-y-3">
              <Field label="Start Date" value={fmt(matter.start_date)} />
              <Field label="End Date" value={fmt(matter.end_date)} />
              <Field label="Date Settled" value={fmt(matter.date_settled)} />
              <Field label="Declared Inactive" value={fmt(matter.date_inactive)} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-brand-100 p-5">
            <h2 className="text-xs font-semibold text-brand-400 uppercase tracking-wide mb-3">Client</h2>
            {client ? (
              <div className="space-y-2">
                <Link
                  to={`/clients/${client.id}`}
                  className="text-sm font-medium text-brand-600 hover:underline block"
                >
                  {client.name}
                </Link>
                <p className="text-xs text-brand-400 font-mono">{client.abbreviation}</p>
              </div>
            ) : (
              <p className="text-sm text-brand-400">—</p>
            )}

            {contact && (
              <div className="mt-4 pt-4 border-t border-brand-50">
                <p className="text-xs font-semibold text-brand-400 uppercase tracking-wide mb-2">Contact</p>
                <p className="text-sm font-medium text-brand-700">
                  {contact.first_name} {contact.last_name}
                </p>
                {contact.title && <p className="text-xs text-brand-500">{contact.title}</p>}
                {contact.email && <p className="text-xs text-brand-500">{contact.email}</p>}
                {contact.phone && <p className="text-xs text-brand-500">{contact.phone}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function fmt(date) {
  return date ? new Date(date).toLocaleDateString() : null;
}

function Field({ label, value, mono }) {
  return (
    <div>
      <dt className="text-xs font-medium text-brand-400 uppercase tracking-wide">{label}</dt>
      <dd className={`mt-1 text-sm text-brand-800 ${mono ? 'font-mono' : ''}`}>{value ?? '—'}</dd>
    </div>
  );
}
