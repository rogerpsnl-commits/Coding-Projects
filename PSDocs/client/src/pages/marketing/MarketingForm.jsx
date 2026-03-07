import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { marketingApi } from '../../services/api.js';

const TYPE_OPTIONS = [
  { value: '', label: 'Select...' },
  { value: 'referral_program', label: 'Referral Program' },
  { value: 'social_media', label: 'Social Media' },
  { value: 'event', label: 'Event' },
  { value: 'advertisement', label: 'Advertisement' },
  { value: 'networking', label: 'Networking' },
  { value: 'other', label: 'Other' },
];

const STATUS_OPTIONS = [
  { value: 'planned', label: 'Planned' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' },
];

const EMPTY_FORM = {
  title: '',
  type: '',
  status: 'planned',
  budget: '',
  start_date: '',
  end_date: '',
  description: '',
  notes: '',
};

export default function MarketingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isEdit) return;
    marketingApi
      .get(id)
      .then((a) => {
        setForm({
          title: a.title ?? '',
          type: a.type ?? '',
          status: a.status ?? 'planned',
          budget: a.budget ?? '',
          start_date: a.start_date ? a.start_date.split('T')[0] : '',
          end_date: a.end_date ? a.end_date.split('T')[0] : '',
          description: a.description ?? '',
          notes: a.notes ?? '',
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  function set(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const payload = {
      ...form,
      type: form.type || null,
      budget: form.budget !== '' ? Number(form.budget) : null,
      start_date: form.start_date || null,
      end_date: form.end_date || null,
      description: form.description || null,
      notes: form.notes || null,
    };

    try {
      if (isEdit) {
        await marketingApi.update(id, payload);
        navigate(`/marketing/${id}`);
      } else {
        const created = await marketingApi.create(payload);
        navigate(`/marketing/${created.id}`);
      }
    } catch (err) {
      setError(err.response?.data?.error ?? err.message);
      setSaving(false);
    }
  }

  if (loading) return <div className="p-8 text-brand-400 text-sm">Loading...</div>;

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-6">
        <Link
          to={isEdit ? `/marketing/${id}` : '/marketing'}
          className="text-sm text-brand-500 hover:underline mb-1 inline-block"
        >
          &larr; {isEdit ? 'Back to Activity' : 'Marketing'}
        </Link>
        <h1 className="text-2xl font-semibold text-brand-800">
          {isEdit ? 'Edit Activity' : 'New Marketing Activity'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-brand-100 p-6 space-y-5">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-md px-4 py-3">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-2">
            <FormField label="Title" required value={form.title} onChange={set('title')} />
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-700 mb-1">Type</label>
            <select
              value={form.type}
              onChange={set('type')}
              className="w-full border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {TYPE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-700 mb-1">Status</label>
            <select
              value={form.status}
              onChange={set('status')}
              className="w-full border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {STATUS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <FormField
            label="Budget ($)"
            type="number"
            value={form.budget}
            onChange={set('budget')}
            placeholder="0.00"
          />
          <div />

          <FormField label="Start Date" type="date" value={form.start_date} onChange={set('start_date')} />
          <FormField label="End Date" type="date" value={form.end_date} onChange={set('end_date')} />

          <div className="col-span-2">
            <label className="block text-sm font-medium text-brand-700 mb-1">Description</label>
            <textarea
              value={form.description}
              onChange={set('description')}
              rows={3}
              className="w-full border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-brand-700 mb-1">Notes</label>
            <textarea
              value={form.notes}
              onChange={set('notes')}
              rows={3}
              className="w-full border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2 border-t border-brand-50">
          <Link
            to={isEdit ? `/marketing/${id}` : '/marketing'}
            className="text-sm text-brand-600 hover:text-brand-800 px-4 py-2"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="bg-brand-700 hover:bg-brand-600 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEdit ? 'Save Changes' : 'Create Activity'}
          </button>
        </div>
      </form>
    </div>
  );
}

function FormField({ label, required, value, onChange, type = 'text', placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-brand-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
    </div>
  );
}
