import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Schedule from './pages/Schedule';
import Preferences from './pages/Preferences';
import Login from './pages/Login';
import SecuritySetup from './pages/SecuritySetup';
import './styles/index.css';

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <p className="text-ink-muted">Loading…</p>
    </div>
  );
}

function AppRoutes() {
  const { isLoading } = useAuth();
  if (isLoading) return <Loading />;
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/security-setup" element={<SecuritySetup />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="upload" element={<Upload />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="preferences" element={<Preferences />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
