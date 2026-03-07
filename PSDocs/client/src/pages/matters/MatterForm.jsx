import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { mattersApi, clientsApi } from '../../services/api.js';

const STATUS_OPTIONS = [
  { value: 'open', label: 'Open' },
  { value: 'closed', label: 'Closed' },
  { value: 'settled', label: 'Settled' },
  { value: 'inactive', label: 'Inactive' },
];

const EMPTY_FORM = {
  client_id: '',
  client_contact_id: '',
  file_number: '',
  title: '',
  short_title: '',
  nickname: '',
  reference_number: '',
  status: 'open',
  assigned_to: '',
  billing_method: '',
  deductible: '',
  start_date: '',
  end_date: '',
  date_settled: '',
  date_inactive: '',
  office: '',
  court: '',
  matter_number: '',
  conflict_parties: '',
  notes: '',
};

export default function MatterForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [form, setForm] = useState(EMPTY_FORM);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    clientsApi.list({ status: 'active' }).then(setClients).catch(() => {});
  }, []);

  // Load contacts when client changes
  useEffect(() => {
    if (!form.client_id) { setContacts([]); return; }
    clientsApi.get(form.client_id)
      .then((c) => setContacts(c.client_contacts ?? []))
      .catch(() => setContacts([]));
  }, [form.client_id]);

  useEffect(() => {
    if (!isEdit) return;
    mattersApi.get(id).then((m) => {
      setForm({
        client_id: m.client_id ?? '',
        client_contact_id: m.client_contact_id ?? '',
        file_number: m.file_number ?? '',
        title: m.title ?? '',
        short_title: m.short_title ?? '',
        nickname: m.nickname ?? '',
        reference_number: m.reference_number ?? '',
        status: m.status ?? 'open',
        assigned_to: m.assigned_to ?? '',
        billing_method: m.billing_method ?? '',
        deductible: m.deductible ?? '',
        start_date: m.start_date ? m.start_date.split('T')[0] : '',
        end_date: m.end_date ? m.end_date.split('T')[0] : '',
        date_settled: m.date_settled ? m.date_settled.split('T')[0] : '',
        date_inactive: m.date_inactive ? m.date_inactive.split('T')[0] : '',
        office: m.office ?? '',
        court: m.court ?? '',
        matter_number: m.matter_number ?? '',
        conflict_parties: m.conflict_parties ?? '',
        notes: m.notes ?? '',
      });
    }).catch(() => {}).finally(() => setLoading(false));
  }, [id, isEdit]);

  function set(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const payload = Object.fromEntries(
      Object.entries(form).map(([k, v]) => [k, v === '' ? null : v])
    );
    if (payload.deductible) payload.deductible = Number(payload.deductible);

    try {
      if (isEdit) {
        await mattersApi.update(id, payload);
        navigate(`/matters/${id}`);
      } else {
        const created = await mattersApi.create(payload);
        navigate(`/matters/${created.id}`);
      }
    } catch (err) {
      setError(err.response?.data?.error ?? err.message);
      setSaving(false);
    }
  }

  if (loading) return <div className="p-8 text-slate-400 text-sm">Loading...</div>;

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-6">
        <Link
          to={isEdit ? `/matters/${id}` : '/matters'}
          className="text-sm text-blue-600 hover:underline mb-1 inline-block"
        >
          &larr; {isEdit ? 'Back to Matter' : 'Matters'}
        </Link>
        <h1 className="text-2xl font-semibold text-slate-800">
          {isEdit ? 'Edit Matter' : 'New Matter'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-md px-4 py-3">
            {error}
          </div>
        )}

        {/* Client & Status */}
        <Section title="Client">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Client <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={form.client_id}
                onChange={set('client_id')}
                className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a client...</option>
                {clients.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Client Contact</label>
              <select
                value={form.client_contact_id}
                onChange={set('client_contact_id')}
                disabled={contacts.length === 0}
                className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              >
                <option value="">None</option>
                {contacts.map((c) => (
                  <option key={c.id} value={c.id}>{c.first_name} {c.last_name}{c.title ? ` — ${c.title}` : ''}</option>
                ))}
              </select>
            </div>
          </div>
        </Section>

        {/* Core Details */}
        <Section title="Matter Details">
          <div className="grid grid-cols-2 gap-5">
            <FormField label="Title" required value={form.title} onChange={set('title')} placeholder="Full matter title" colSpan={2} />
            <FormField label="Nickname" value={form.nickname} onChange={set('nickname')} placeholder="Short working name" />
            <FormField label="Short Title" value={form.short_title} onChange={set('short_title')} />
            <FormField label="File Number" value={form.file_number} onChange={set('file_number')} />
            <FormField label="Reference / Claim #" value={form.reference_number} onChange={set('reference_number')} />
            <FormField label="Matter Number" value={form.matter_number} onChange={set('matter_number')} />
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
              <select
                value={form.status}
                onChange={set('status')}
                className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {STATUS_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <FormField label="Assigned To" value={form.assigned_to} onChange={set('assigned_to')} placeholder="Staff member(s)" />
            <FormField label="Billing Method" value={form.billing_method} onChange={set('billing_method')} />
            <FormField label="Deductible ($)" type="number" value={form.deductible} onChange={set('deductible')} />
            <FormField label="Office" value={form.office} onChange={set('office')} />
            <FormField label="Court" value={form.court} onChange={set('court')} />
            <FormField label="Conflict Parties" value={form.conflict_parties} onChange={set('conflict_parties')} colSpan={2} />
          </div>
        </Section>

        {/* Dates */}
        <Section title="Dates">
          <div className="grid grid-cols-2 gap-5">
            <FormField label="Start Date" type="date" value={form.start_date} onChange={set('start_date')} />
            <FormField label="End Date" type="date" value={form.end_date} onChange={set('end_date')} />
            <FormField label="Date Settled" type="date" value={form.date_settled} onChange={set('date_settled')} />
            <FormField label="Declared Inactive" type="date" value={form.date_inactive} onChange={set('date_inactive')} />
          </div>
        </Section>

        {/* Notes */}
        <Section title="Notes">
          <textarea
            value={form.notes}
            onChange={set('notes')}
            rows={4}
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </Section>

        <div className="flex justify-end gap-3 pt-2">
          <Link
            to={isEdit ? `/matters/${id}` : '/matters'}
            className="text-sm text-slate-600 hover:text-slate-800 px-4 py-2"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEdit ? 'Save Changes' : 'Create Matter'}
          </button>
        </div>
      </form>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">{title}</h2>
      {children}
    </div>
  );
}

function FormField({ label, required, value, onChange, placeholder, type = 'text', colSpan }) {
  return (
    <div className={colSpan === 2 ? 'col-span-2' : ''}>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
