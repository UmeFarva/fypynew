import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'; // Ensure this file contains the CSS mentioned above

function LoginPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const handleRegisterClick = () => {
        navigate('/register');
    };
    
    const handleForgetClick = () => {
        navigate('/forget');
    };

    return (
        <div className="login-page">
            <div className="login-form-container">
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>

                {/* Register and Forgot Password Buttons */}
                <div className="register-button-container">
                    <button className="register-button" onClick={handleRegisterClick}>
                        Register
                    </button>
                    <button className="register-button" onClick={handleForgetClick}>
                        Forgot Password
                    </button>
                </div>
            </div>

            {/* Slideshow Section */}
            <div className="slideshow-container">
                <div className="slide">
                    <h2>{slides[currentSlide].title}</h2>
                    <p>{slides[currentSlide].content}</p>
                </div>

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
