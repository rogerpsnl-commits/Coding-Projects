import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

export const clientsApi = {
  list: (params) => api.get('/clients', { params }).then((r) => r.data),
  get: (id) => api.get(`/clients/${id}`).then((r) => r.data),
  create: (data) => api.post('/clients', data).then((r) => r.data),
  update: (id, data) => api.put(`/clients/${id}`, data).then((r) => r.data),
  remove: (id) => api.delete(`/clients/${id}`),

  addContact: (clientId, data) =>
    api.post(`/clients/${clientId}/contacts`, data).then((r) => r.data),
  updateContact: (clientId, contactId, data) =>
    api.put(`/clients/${clientId}/contacts/${contactId}`, data).then((r) => r.data),
  removeContact: (clientId, contactId) =>
    api.delete(`/clients/${clientId}/contacts/${contactId}`),
};
