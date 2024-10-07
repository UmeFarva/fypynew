import React, { useState, useEffect } from 'react';
import '../styles/requestApproval.css';

const RequestApproval = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // Fetch registration requests from API
        const fetchRequests = async () => {
            // Replace with your actual API call
            const response = await fetch('/api/registration-requests');
            const data = await response.json();
            setRequests(data);
        };
        fetchRequests();
    }, []);

    const handleApprove = (id) => {
        // Approve logic
        console.log('Approved request:', id);
    };

    const handleReject = (id) => {
        // Reject logic
        console.log('Rejected request:', id);
    };

    return (
        <div className="request-approval">
            <h2>Registration Requests</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => (
                        <tr key={request.id}>
                            <td>{request.name}</td>
                            <td>{request.email}</td>
                            <td>{request.status}</td>
                            <td>
                                <button onClick={() => handleApprove(request.id)}>Approve</button>
                                <button onClick={() => handleReject(request.id)}>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RequestApproval;
