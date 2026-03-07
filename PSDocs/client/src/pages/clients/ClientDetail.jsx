import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { clientsApi } from '../../services/api.js';

const FEE_LABELS = {
  hourly: 'Hourly',
  fixed: 'Fixed Fee',
  contingency: 'Contingency',
  retainer: 'Retainer',
  other: 'Other',
};

const STATUS_BADGE = {
  active: 'bg-green-100 text-green-700',
  former: 'bg-brand-100 text-brand-500',
  inactive: 'bg-yellow-100 text-yellow-700',
};

const EMPTY_CONTACT = {
  first_name: '',
  last_name: '',
  title: '',
  email: '',
  phone: '',
  is_primary: false,
  notes: '',
};

export default function ClientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showContactModal, setShowContactModal] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [contactForm, setContactForm] = useState(EMPTY_CONTACT);
  const [contactSaving, setContactSaving] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  useEffect(() => {
    loadClient();
  }, [id]);

  function loadClient() {
    clientsApi
      .get(id)
      .then(setClient)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  function openAddContact() {
    setEditingContact(null);
    setContactForm(EMPTY_CONTACT);
    setShowContactModal(true);
  }

  function openEditContact(contact) {
    setEditingContact(contact);
    setContactForm({
      first_name: contact.first_name,
      last_name: contact.last_name,
      title: contact.title ?? '',
      email: contact.email ?? '',
      phone: contact.phone ?? '',
      is_primary: contact.is_primary ?? false,
      notes: contact.notes ?? '',
    });
    setShowContactModal(true);
  }

  async function saveContact(e) {
    e.preventDefault();
    setContactSaving(true);
    try {
      if (editingContact) {
        await clientsApi.updateContact(id, editingContact.id, contactForm);
      } else {
        await clientsApi.addContact(id, contactForm);
      }
      setShowContactModal(false);
      loadClient();
    } catch (err) {
      alert(err.message);
    } finally {
      setContactSaving(false);
    }
  }

  async function deleteContact(contactId) {
    if (!window.confirm('Delete this contact?')) return;
    await clientsApi.removeContact(id, contactId);
    loadClient();
  }

  async function deleteClient() {
    await clientsApi.remove(id);
    navigate('/clients');
  }

  if (loading) return <div className="p-8 text-brand-400 text-sm">Loading...</div>;
  if (error) return <div className="p-8 text-red-500 text-sm">{error}</div>;
  if (!client) return null;

  const contacts = client.client_contacts ?? [];

  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <Link to="/clients" className="text-sm text-brand-500 hover:underline mb-1 inline-block">
            &larr; Clients
          </Link>
          <h1 className="text-2xl font-semibold text-brand-800">{client.name}</h1>
          <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium capitalize ${STATUS_BADGE[client.status] ?? ''}`}>
            {client.status}
          </span>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/clients/${id}/edit`}
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
              <button onClick={deleteClient} className="text-xs text-red-700 font-medium hover:underline">Yes</button>
              <button onClick={() => setDeleteConfirm(false)} className="text-xs text-brand-500 hover:underline">No</button>
            </div>
          )}
        </div>
      </div>

      {/* Client Info Card */}
      <div className="bg-white rounded-xl shadow-sm border border-brand-100 p-6 mb-6">
        <h2 className="text-sm font-semibold text-brand-500 uppercase tracking-wide mb-4">Client Information</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <Field label="Short Code" value={client.abbreviation} mono />
          <Field label="Fee Arrangement" value={FEE_LABELS[client.fee_arrangement] ?? '—'} />
          <Field label="Referral Source" value={client.referral_source} />
          <Field
            label="Rate Effective Date"
            value={client.rate_effective_date ? new Date(client.rate_effective_date).toLocaleDateString() : null}
          />
          {client.notes && (
            <div className="col-span-2">
              <Field label="Notes" value={client.notes} />
            </div>
          )}
        </div>
      </div>

      {/* Contacts Section */}
      <div className="bg-white rounded-xl shadow-sm border border-brand-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-100">
          <h2 className="text-sm font-semibold text-brand-700">Contacts</h2>
          <button
            onClick={openAddContact}
            className="flex items-center gap-1.5 text-sm text-brand-500 hover:text-brand-700 font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Contact
          </button>
        </div>

        {contacts.length === 0 ? (
          <div className="py-10 text-center text-brand-400 text-sm">No contacts yet.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-50 border-b border-brand-100">
                <th className="text-left px-5 py-3 font-medium text-brand-500">Name</th>
                <th className="text-left px-5 py-3 font-medium text-brand-500">Title</th>
                <th className="text-left px-5 py-3 font-medium text-brand-500">Email</th>
                <th className="text-left px-5 py-3 font-medium text-brand-500">Phone</th>
                <th className="text-left px-5 py-3 font-medium text-brand-500">Primary</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-50">
              {contacts.map((c) => (
                <tr key={c.id} className="hover:bg-brand-50">
                  <td className="px-5 py-3 font-medium text-brand-800">
                    {c.first_name} {c.last_name}
                  </td>
                  <td className="px-5 py-3 text-brand-500">{c.title ?? '—'}</td>
                  <td className="px-5 py-3 text-brand-600">{c.email ?? '—'}</td>
                  <td className="px-5 py-3 text-brand-600">{c.phone ?? '—'}</td>
                  <td className="px-5 py-3">
                    {c.is_primary && (
                      <span className="inline-block px-2 py-0.5 bg-brand-100 text-brand-600 rounded-full text-xs font-medium">Primary</span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button
                      onClick={() => openEditContact(c)}
                      className="text-xs text-brand-500 hover:text-brand-700 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteContact(c.id)}
                      className="text-xs text-brand-400 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
            <h3 className="text-base font-semibold text-brand-800 mb-4">
              {editingContact ? 'Edit Contact' : 'Add Contact'}
            </h3>
            <form onSubmit={saveContact} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-brand-600 mb-1">First Name *</label>
                  <input
                    required
                    value={contactForm.first_name}
                    onChange={(e) => setContactForm((f) => ({ ...f, first_name: e.target.value }))}
                    className="w-full border border-brand-200 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-brand-600 mb-1">Last Name *</label>
                  <input
                    required
                    value={contactForm.last_name}
                    onChange={(e) => setContactForm((f) => ({ ...f, last_name: e.target.value }))}
                    className="w-full border border-brand-200 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>
              <FormField label="Title" value={contactForm.title} onChange={(v) => setContactForm((f) => ({ ...f, title: v }))} />
              <FormField label="Email" type="email" value={contactForm.email} onChange={(v) => setContactForm((f) => ({ ...f, email: v }))} />
              <FormField label="Phone" value={contactForm.phone} onChange={(v) => setContactForm((f) => ({ ...f, phone: v }))} />
              <FormField label="Notes" value={contactForm.notes} onChange={(v) => setContactForm((f) => ({ ...f, notes: v }))} />
              <label className="flex items-center gap-2 text-sm text-brand-700">
                <input
                  type="checkbox"
                  checked={contactForm.is_primary}
                  onChange={(e) => setContactForm((f) => ({ ...f, is_primary: e.target.checked }))}
                  className="rounded"
                />
                Primary contact
              </label>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className="text-sm text-brand-600 hover:text-brand-800 px-3 py-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={contactSaving}
                  className="bg-brand-700 hover:bg-brand-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors disabled:opacity-50"
                >
                  {contactSaving ? 'Saving...' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, value, mono }) {
  return (
    <div>
      <dt className="text-xs font-medium text-brand-400 uppercase tracking-wide">{label}</dt>
      <dd className={`mt-1 text-sm text-brand-800 ${mono ? 'font-mono' : ''}`}>{value ?? '—'}</dd>
    </div>
  );
}

function FormField({ label, value, onChange, type = 'text' }) {
  return (
    <div>
      <label className="block text-xs font-medium text-brand-600 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-brand-200 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
    </div>
  );
}
