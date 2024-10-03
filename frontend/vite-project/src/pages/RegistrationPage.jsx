import React, { useState, useEffect } from 'react';
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

    const [currentSlide, setCurrentSlide] = useState(0); // Slideshow state
    const navigate = useNavigate(); // Hook to navigate to login page

    // Array of slides with content (change as needed)
    const slides = [
        {
            title: "Join Our System",
            content: "Be part of an innovative platform for attendance management. Fast, secure, and easy to use.",
        },
        {
            title: "Why Choose Us?",
            content: "Our system provides accurate attendance tracking and real-time reporting, ensuring accountability.",
        },
        {
            title: "Seamless Integration",
            content: "Easily integrate with existing systems and enhance your workforce management with cutting-edge technology.",
        },
    ];

    // Auto slide change every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

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
        console.log(formData);
        navigate('/login');
    };

    return (
        <div className="registration-page">
            {/* Form Section */}
            <div className="registration-form-container">
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

            {/* Slideshow Section */}
            <div className="slideshow-container">
                <div className="slide">
                    <h2>{slides[currentSlide].title}</h2>
                    <p>{slides[currentSlide].content}</p>
                </div>

                {/* Slide Indicators */}
                <div className="slide-indicators">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={index === currentSlide ? "active" : ""}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;
