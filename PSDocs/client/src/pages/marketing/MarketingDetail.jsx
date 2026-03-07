import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
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

export default function MarketingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  useEffect(() => {
    marketingApi
      .get(id)
      .then(setActivity)
      .catch(() => setActivity(null))
      .finally(() => setLoading(false));
  }, [id]);

  async function deleteActivity() {
    await marketingApi.remove(id);
    navigate('/marketing');
  }

  if (loading) return <div className="p-8 text-brand-400 text-sm">Loading...</div>;
  if (!activity) return <div className="p-8 text-red-500 text-sm">Activity not found.</div>;

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-start justify-between mb-6">
        <div>
          <Link to="/marketing" className="text-sm text-brand-500 hover:underline mb-1 inline-block">
            &larr; Marketing
          </Link>
          <h1 className="text-2xl font-semibold text-brand-800">{activity.title}</h1>
          <div className="flex items-center gap-2 mt-2">
            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${STATUS_BADGE[activity.status] ?? ''}`}>
              {activity.status}
            </span>
            {activity.type && (
              <span className="text-xs text-brand-400">{TYPE_LABELS[activity.type] ?? activity.type}</span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/marketing/${id}/edit`}
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
              <button onClick={deleteActivity} className="text-xs text-red-700 font-medium hover:underline">Yes</button>
              <button onClick={() => setDeleteConfirm(false)} className="text-xs text-brand-500 hover:underline">No</button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-brand-100 p-6">
        <h2 className="text-xs font-semibold text-brand-400 uppercase tracking-wide mb-4">Activity Details</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <Field label="Type" value={TYPE_LABELS[activity.type] ?? activity.type} />
          <Field label="Status" value={activity.status} />
          <Field
            label="Budget"
            value={activity.budget != null ? `$${Number(activity.budget).toLocaleString()}` : null}
          />
          <Field
            label="Start Date"
            value={activity.start_date ? new Date(activity.start_date).toLocaleDateString() : null}
          />
          <Field
            label="End Date"
            value={activity.end_date ? new Date(activity.end_date).toLocaleDateString() : null}
          />
        </div>
        {activity.description && (
          <div className="mt-4 pt-4 border-t border-brand-50">
            <Field label="Description" value={activity.description} noCapitalize />
          </div>
        )}
        {activity.notes && (
          <div className="mt-4 pt-4 border-t border-brand-50">
            <Field label="Notes" value={activity.notes} noCapitalize />
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
