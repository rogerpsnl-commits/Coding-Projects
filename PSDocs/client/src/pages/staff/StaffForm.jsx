import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { staffApi } from '../../services/api.js';

const ROLE_OPTIONS = [
  { value: '', label: 'Select...' },
  { value: 'partner', label: 'Partner' },
  { value: 'associate', label: 'Associate' },
  { value: 'paralegal', label: 'Paralegal' },
  { value: 'admin', label: 'Admin' },
  { value: 'other', label: 'Other' },
];

const STATUS_OPTIONS = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

const EMPTY_FORM = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  role: '',
  status: 'active',
  notes: '',
};

export default function StaffForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isEdit) return;
    staffApi
      .get(id)
      .then((m) => {
        setForm({
          first_name: m.first_name ?? '',
          last_name: m.last_name ?? '',
          email: m.email ?? '',
          phone: m.phone ?? '',
          role: m.role ?? '',
          status: m.status ?? 'active',
          notes: m.notes ?? '',
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
      email: form.email || null,
      phone: form.phone || null,
      role: form.role || null,
      notes: form.notes || null,
    };

    try {
      if (isEdit) {
        await staffApi.update(id, payload);
        navigate(`/staff/${id}`);
      } else {
        const created = await staffApi.create(payload);
        navigate(`/staff/${created.id}`);
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
          to={isEdit ? `/staff/${id}` : '/staff'}
          className="text-sm text-brand-500 hover:underline mb-1 inline-block"
        >
          &larr; {isEdit ? 'Back to Staff Member' : 'Staff'}
        </Link>
        <h1 className="text-2xl font-semibold text-brand-800">
          {isEdit ? 'Edit Staff Member' : 'New Staff Member'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-brand-100 p-6 space-y-5">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-md px-4 py-3">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 gap-5">
          <FormField
            label="First Name"
            required
            value={form.first_name}
            onChange={set('first_name')}
          />
          <FormField
            label="Last Name"
            required
            value={form.last_name}
            onChange={set('last_name')}
          />

          <div>
            <label className="block text-sm font-medium text-brand-700 mb-1">Role</label>
            <select
              value={form.role}
              onChange={set('role')}
              className="w-full border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {ROLE_OPTIONS.map((o) => (
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
            label="Email"
            type="email"
            value={form.email}
            onChange={set('email')}
          />
          <FormField
            label="Phone"
            value={form.phone}
            onChange={set('phone')}
          />

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
            to={isEdit ? `/staff/${id}` : '/staff'}
            className="text-sm text-brand-600 hover:text-brand-800 px-4 py-2"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="bg-brand-700 hover:bg-brand-600 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEdit ? 'Save Changes' : 'Create Staff Member'}
          </button>
        </div>
      </form>
    </div>
  );
}

function FormField({ label, required, value, onChange, type = 'text' }) {
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
        className="w-full border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
    </div>
  );
}
