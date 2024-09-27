import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import '../styles/registration.css';

function RegistrationPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        department: '',
        designation: '',
        employeeID: '',
        dateOfJoining: '',
        address: '', // New field
        city: '', // New field
        state: '', // New field
        zipCode: '', // New field
        approvalStatus: false, // Default as not approved
    });

    const navigate = useNavigate(); // Hook to navigate to login page

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send formData to your API or backend service
        console.log(formData);
        // After successful submission, navigate to login or another page
        navigate('/login');
    };

    return (
        <div className="registration-page">
            <h2>Registration Form</h2>

            {/* Personal Information Section */}
            <h3>Personal Information</h3>
            <form onSubmit={handleSubmit} className="registration-form">
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                />

                {/* Account Information Section */}
                <h3>Account Information</h3>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />

                {/* Employment Information Section */}
                <h3>Employment Information</h3>
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="employeeID"
                    placeholder="Employee ID"
                    value={formData.employeeID}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="dateOfJoining"
                    placeholder="Date of Joining"
                    value={formData.dateOfJoining}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
