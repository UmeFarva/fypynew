import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import '../styles/login.css';

function LoginPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate(); // Hook to navigate to registration page

    // Array of slides with content
    const slides = [
        {
            title: "Welcome to Biometric Attendance Management System",
            content: "Pioneering excellence in attendance tracking and innovation for seamless management.",
        },
        {
            title: "Our Programs",
            content: "Explore our features designed to simplify attendance tracking and management.",
        },
    ];

    // Auto slide change
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    // Handler for navigation to the registration page
    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className="login-page">
            {/* Login Form Section */}
            <div className="login-form-container">
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>

                {/* Register Button */}
                <div className="register-button-container">
                    <button className="register-button" onClick={handleRegisterClick}>
                        Register
                    </button>
                </div>
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

export default LoginPage;
