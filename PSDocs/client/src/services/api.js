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

export const mattersApi = {
  list: (params) => api.get('/matters', { params }).then((r) => r.data),
  get: (id) => api.get(`/matters/${id}`).then((r) => r.data),
  create: (data) => api.post('/matters', data).then((r) => r.data),
  update: (id, data) => api.put(`/matters/${id}`, data).then((r) => r.data),
  remove: (id) => api.delete(`/matters/${id}`),
};

export const staffApi = {
  list: (params) => api.get('/staff', { params }).then((r) => r.data),
  get: (id) => api.get(`/staff/${id}`).then((r) => r.data),
  create: (data) => api.post('/staff', data).then((r) => r.data),
  update: (id, data) => api.put(`/staff/${id}`, data).then((r) => r.data),
  remove: (id) => api.delete(`/staff/${id}`),
};
