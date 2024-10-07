import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/Homepage';
import RegistrationPage from './pages/RegistrationPage';
import ForgetPassword from './pages/ForgetPassword';
import AdminDashboard from './components/AdminDashboard';
import ManageUsers from './components/ManageUsers';
import AttendanceReports from './components/AttendanceReports';
import Settings from './components/Settings';
import RequestApproval from './components/RequestApproval';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/forget" element={<ForgetPassword />} />

                {/* Admin Dashboard Routes with Nested Components */}
                <Route path="/admin-dashboard" element={<AdminDashboard />}>
                    <Route path="manage-users" element={<ManageUsers />} />
                    <Route path="attendance-reports" element={<AttendanceReports />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="request-approval" element={<RequestApproval />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;

