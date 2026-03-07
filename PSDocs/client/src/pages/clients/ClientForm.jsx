import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { clientsApi } from '../../services/api.js';

const FEE_OPTIONS = [
  { value: '', label: 'Select...' },
  { value: 'hourly', label: 'Hourly' },
  { value: 'fixed', label: 'Fixed Fee' },
  { value: 'contingency', label: 'Contingency' },
  { value: 'retainer', label: 'Retainer' },
  { value: 'other', label: 'Other' },
];

const STATUS_OPTIONS = [
  { value: 'active', label: 'Active' },
  { value: 'former', label: 'Former' },
  { value: 'inactive', label: 'Inactive' },
];

const EMPTY_FORM = {
  name: '',
  abbreviation: '',
  status: 'active',
  fee_arrangement: '',
  referral_source: '',
  rate_effective_date: '',
  notes: '',
};

export default function ClientForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isEdit) return;
    clientsApi
      .get(id)
      .then((client) => {
        setForm({
          name: client.name ?? '',
          abbreviation: client.abbreviation ?? '',
          status: client.status ?? 'active',
          fee_arrangement: client.fee_arrangement ?? '',
          referral_source: client.referral_source ?? '',
          rate_effective_date: client.rate_effective_date
            ? client.rate_effective_date.split('T')[0]
            : '',
          notes: client.notes ?? '',
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
      fee_arrangement: form.fee_arrangement || null,
      referral_source: form.referral_source || null,
      rate_effective_date: form.rate_effective_date || null,
      notes: form.notes || null,
    };

    try {
      if (isEdit) {
        await clientsApi.update(id, payload);
        navigate(`/clients/${id}`);
      } else {
        const created = await clientsApi.create(payload);
        navigate(`/clients/${created.id}`);
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
          to={isEdit ? `/clients/${id}` : '/clients'}
          className="text-sm text-brand-500 hover:underline mb-1 inline-block"
        >
          &larr; {isEdit ? 'Back to Client' : 'Clients'}
        </Link>
        <h1 className="text-2xl font-semibold text-brand-800">
          {isEdit ? 'Edit Client' : 'New Client'}
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
            <FormField
              label="Client Name"
              required
              value={form.name}
              onChange={set('name')}
              placeholder="Acme Corporation"
            />
          </div>

          <FormField
            label="Short Code"
            required
            value={form.abbreviation}
            onChange={set('abbreviation')}
            placeholder="ACME"
            maxLength={10}
            hint="A brief identifier used in case numbering"
          />

          <div>
            <label className="block text-sm font-medium text-brand-700 mb-1">
              Status
            </label>
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

          <div>
            <label className="block text-sm font-medium text-brand-700 mb-1">
              Fee Arrangement
            </label>
            <select
              value={form.fee_arrangement}
              onChange={set('fee_arrangement')}
              className="w-full border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {FEE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <FormField
            label="Rate Effective Date"
            type="date"
            value={form.rate_effective_date}
            onChange={set('rate_effective_date')}
          />

          <div className="col-span-2">
            <FormField
              label="Referral Source"
              value={form.referral_source}
              onChange={set('referral_source')}
              placeholder="Who brought in this client?"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-brand-700 mb-1">Notes</label>
            <textarea
              value={form.notes}
              onChange={set('notes')}
              rows={4}
              className="w-full border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2 border-t border-brand-50">
          <Link
            to={isEdit ? `/clients/${id}` : '/clients'}
            className="text-sm text-brand-600 hover:text-brand-800 px-4 py-2"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="bg-brand-700 hover:bg-brand-600 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEdit ? 'Save Changes' : 'Create Client'}
          </button>
        </div>
      </form>
    </div>
  );
}

function FormField({ label, required, value, onChange, placeholder, type = 'text', maxLength, hint }) {
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
        maxLength={maxLength}
        className="w-full border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
      {hint && <p className="mt-1 text-xs text-brand-400">{hint}</p>}
    </div>
  );
}
