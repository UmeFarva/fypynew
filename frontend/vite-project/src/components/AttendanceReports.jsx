import React, { useState, useEffect } from 'react';
import '../styles/attendanceReports.css';

const AttendanceReports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        // Fetch attendance reports from API
        const fetchReports = async () => {
            // Replace with your actual API call
            const response = await fetch('/api/attendance-reports');
            const data = await response.json();
            setReports(data);
        };
        fetchReports();
    }, []);

    return (
        <div className="attendance-reports">
            <h2>Attendance Reports</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report) => (
                        <tr key={report.id}>
                            <td>{report.date}</td>
                            <td>{report.employeeId}</td>
                            <td>{report.employeeName}</td>
                            <td>{report.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceReports;
