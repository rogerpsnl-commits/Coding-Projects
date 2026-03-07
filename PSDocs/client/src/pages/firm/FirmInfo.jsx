import { useState, useEffect } from 'react';
import { firmApi } from '../../services/api.js';

const EMPTY_LOCATION = { name: '', address: '', phone: '', fax: '', email: '' };

export default function FirmInfo() {
  const [form, setForm] = useState({
    name: '',
    tagline: '',
    email: '',
    phone: '',
    fax: '',
    website: '',
    notes: '',
  });
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    firmApi.get().then((data) => {
      setForm({
        name: data.name ?? '',
        tagline: data.tagline ?? '',
        email: data.email ?? '',
        phone: data.phone ?? '',
        fax: data.fax ?? '',
        website: data.website ?? '',
        notes: data.notes ?? '',
      });
      setLocations(data.locations ?? []);
    }).catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  function set(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function setLocation(index, field, value) {
    setLocations((prev) => prev.map((loc, i) => i === index ? { ...loc, [field]: value } : loc));
  }

  function addLocation() {
    setLocations((prev) => [...prev, { ...EMPTY_LOCATION }]);
  }

  function removeLocation(index) {
    setLocations((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    setError(null);

    const payload = {
      ...form,
      name: form.name || null,
      tagline: form.tagline || null,
      email: form.email || null,
      phone: form.phone || null,
      fax: form.fax || null,
      website: form.website || null,
      notes: form.notes || null,
      locations,
    };

    try {
      await firmApi.update(payload);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      setError(err.response?.data?.error ?? err.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="p-8 text-brand-400 text-sm">Loading...</div>;

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-brand-800">Firm Information</h1>
        <p className="text-sm text-brand-400 mt-0.5">Basic details and office locations for your firm.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-md px-4 py-3">{error}</div>
        )}

        {/* General Info */}
        <Section title="General">
          <div className="grid grid-cols-2 gap-5">
            <FormField label="Firm Name" value={form.name} onChange={set('name')} colSpan={2} placeholder="Smith & Associates LLP" />
            <FormField label="Tagline" value={form.tagline} onChange={set('tagline')} colSpan={2} placeholder="Trusted legal counsel since 1985" />
            <FormField label="Primary Email" type="email" value={form.email} onChange={set('email')} placeholder="info@smithlaw.com" />
            <FormField label="Primary Phone" value={form.phone} onChange={set('phone')} placeholder="(555) 000-0000" />
            <FormField label="Fax" value={form.fax} onChange={set('fax')} placeholder="(555) 000-0001" />
            <FormField label="Website" value={form.website} onChange={set('website')} placeholder="https://smithlaw.com" />
          </div>
        </Section>

        {/* Locations */}
        <Section title="Locations">
          {locations.length === 0 && (
            <p className="text-sm text-brand-400 mb-3">No office locations added yet.</p>
          )}
          <div className="space-y-4">
            {locations.map((loc, i) => (
              <div key={i} className="border border-brand-100 rounded-lg p-4 relative">
                <button
                  type="button"
                  onClick={() => removeLocation(i)}
                  className="absolute top-3 right-3 text-brand-300 hover:text-red-500 transition-colors"
                  title="Remove location"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <p className="text-xs font-semibold text-brand-400 uppercase tracking-wide mb-3">
                  Office {i + 1}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    label="Office Name"
                    value={loc.name}
                    onChange={(e) => setLocation(i, 'name', e.target.value)}
                    placeholder="Main Office"
                  />
                  <FormField
                    label="Phone"
                    value={loc.phone}
                    onChange={(e) => setLocation(i, 'phone', e.target.value)}
                    placeholder="(555) 000-0000"
                  />
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-brand-700 mb-1">Address</label>
                    <textarea
                      value={loc.address}
                      onChange={(e) => setLocation(i, 'address', e.target.value)}
                      rows={2}
                      placeholder={"123 Main St, Suite 400\nNew York, NY 10001"}
                      className="w-full border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
                    />
                  </div>
                  <FormField
                    label="Email"
                    type="email"
                    value={loc.email}
                    onChange={(e) => setLocation(i, 'email', e.target.value)}
                    placeholder="office@smithlaw.com"
                  />
                  <FormField
                    label="Fax"
                    value={loc.fax}
                    onChange={(e) => setLocation(i, 'fax', e.target.value)}
                    placeholder="(555) 000-0001"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addLocation}
            className="mt-3 text-sm text-brand-500 hover:text-brand-700 font-medium flex items-center gap-1 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Office Location
          </button>
        </Section>

        {/* Notes */}
        <Section title="Notes">
          <textarea
            value={form.notes}
            onChange={set('notes')}
            rows={3}
            className="w-full border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
          />
        </Section>

        <div className="flex items-center justify-end gap-3 pt-2">
          {saved && (
            <span className="text-sm text-green-600 font-medium">Saved!</span>
          )}
          <button
            type="submit"
            disabled={saving}
            className="bg-brand-700 hover:bg-brand-600 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-brand-100 p-6">
      <h2 className="text-xs font-semibold text-brand-400 uppercase tracking-wide mb-4">{title}</h2>
      {children}
    </div>
  );
}

function FormField({ label, value, onChange, type = 'text', placeholder, colSpan }) {
  return (
    <div className={colSpan === 2 ? 'col-span-2' : ''}>
      <label className="block text-sm font-medium text-brand-700 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-brand-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
    </div>
  );
}
