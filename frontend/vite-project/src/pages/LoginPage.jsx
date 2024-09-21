import React, { useState, useEffect } from 'react';
import '../styles/login.css';

function LoginPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array of slides with content
    const slides = [
        {
            title: "Welcome to Sukkur IBA University",
            content: "Pioneering excellence in education and innovation for tomorrow's leaders.",
        },
        {
            title: "Our Programs",
            content: "Explore our diverse programs designed to cultivate skills for the future.",
        },
        {
            title: "Registration",
            content: (
                <form className="registration-form">
                    <h2>Register Here</h2>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Register</button>
                </form>
            ),
        },
    ];

    // Auto slide change
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

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
