import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import '../styles/admin.css'; // Your CSS for styling

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement logout logic here
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <h1>Admin Dashboard</h1>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </header>
            <div className="dashboard-container">
                <aside className="sidebar">
                    <ul>
                        <li><button onClick={() => navigate('/manage-users')}>Manage Users</button></li>
                        <li><button onClick={() => navigate('/attendance-reports')}>Attendance Reports</button></li>
                        <li><button onClick={() => navigate('/settings')}>Settings</button></li>
                        <li><button onClick={() => navigate('/request-approval')}>Request Approval</button></li>
                    </ul>
                </aside>
                <main className="dashboard-content">
                    <h2>Welcome to the Admin Dashboard</h2>
                    <p>Manage users, view attendance reports, configure settings, and handle approval requests.</p>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
