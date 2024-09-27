// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Criteria from '../components/Criteria';
import Faculty from '../components/Faculty';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#criteria">Criteria</a></li>
                    <li><a href="#faculty-info">Faculty</a></li>
                </ul>
            </nav>
            <div className="container">
                <main>
                    <section className="hero-section">
                        <div className="hero-text">
                            <h1>Welcome to Biometric Attendance Management System</h1>
                            <p>A seamless solution for accurate attendance tracking using state-of-the-art biometric technology.</p>
                            <button className="cta-button" onClick={() => navigate('/login')}>Login</button>
                        </div>
                    </section>
                    <section id="about-us">
                        <AboutUs />
                    </section>
                    <section id="criteria">
                        <Criteria />                    </section>
                    <section id="faculty-info">
                        <Faculty />
                    </section>
                </main>
\            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
