import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ClientList from './pages/clients/ClientList.jsx';
import ClientDetail from './pages/clients/ClientDetail.jsx';
import ClientForm from './pages/clients/ClientForm.jsx';
import MatterList from './pages/matters/MatterList.jsx';
import MatterDetail from './pages/matters/MatterDetail.jsx';
import MatterForm from './pages/matters/MatterForm.jsx';
import StaffList from './pages/staff/StaffList.jsx';
import StaffDetail from './pages/staff/StaffDetail.jsx';
import StaffForm from './pages/staff/StaffForm.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/matters" replace />} />
        <Route path="clients" element={<ClientList />} />
        <Route path="clients/new" element={<ClientForm />} />
        <Route path="clients/:id" element={<ClientDetail />} />
        <Route path="clients/:id/edit" element={<ClientForm />} />
        <Route path="matters" element={<MatterList />} />
        <Route path="matters/new" element={<MatterForm />} />
        <Route path="matters/:id" element={<MatterDetail />} />
        <Route path="matters/:id/edit" element={<MatterForm />} />
        <Route path="staff" element={<StaffList />} />
        <Route path="staff/new" element={<StaffForm />} />
        <Route path="staff/:id" element={<StaffDetail />} />
        <Route path="staff/:id/edit" element={<StaffForm />} />
      </Route>
    </Routes>
  );
}
