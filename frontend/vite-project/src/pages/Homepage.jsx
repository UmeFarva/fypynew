import React from 'react';
import Header from '../components/Header';  // Header with University name and info
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Criteria from '../components/Criteria';
import Faculty from '../components/Faculty';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div>
            {/* Header for university info */}
            <Header /> 

            {/* Navigation Bar */}
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#criteria">Criteria</a></li>
                    <li><a href="#faculty-info">Faculty</a></li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container">
                <main>
                    {/* Hero Section */}
                    <section className="hero-section">
                        <div className="hero-text">
                            
                            <p>A seamless solution for accurate attendance tracking using state-of-the-art biometric technology. 
                            Enhance your institution's efficiency and ensure reliable attendance records.</p>
                            <button className="cta-button" onClick={handleLoginClick}>Login</button>
                        </div>
                        <img src="/images/iris.jpg" alt="University Campus" className="hero-image" />
                    </section>

                    {/* About Us Section */}
                    <section id="about-us">
                        <AboutUs />
                    </section>

                    {/* Criteria Section */}
                    <Criteria />

                    {/* Faculty Section */}
                    <Faculty />
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
