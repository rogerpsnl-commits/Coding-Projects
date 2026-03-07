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
import MarketingList from './pages/marketing/MarketingList.jsx';
import MarketingDetail from './pages/marketing/MarketingDetail.jsx';
import MarketingForm from './pages/marketing/MarketingForm.jsx';
import Reports from './pages/reports/Reports.jsx';
import FirmInfo from './pages/firm/FirmInfo.jsx';
import Documents from './pages/documents/Documents.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
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
        <Route path="marketing" element={<MarketingList />} />
        <Route path="marketing/new" element={<MarketingForm />} />
        <Route path="marketing/:id" element={<MarketingDetail />} />
        <Route path="marketing/:id/edit" element={<MarketingForm />} />
        <Route path="reports" element={<Reports />} />
        <Route path="documents" element={<Documents />} />
        <Route path="firm" element={<FirmInfo />} />
      </Route>
    </Routes>
  );
}
