import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Criteria from '../components/Criteria';  // Updated to use Criteria
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
            <Header />
            {/* Navigation Bar */}
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#criteria">Criteria</a></li> {/* Updated to Criteria */}
                    <li><a href="#faculty-info">Faculty</a></li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container">
                <main>
                    {/* Hero Section with Image */}
                    <section className="hero-section">
                        <div className="hero-text">
                            <h1>Welcome to Sukkur IBA University</h1>
                            <p>Empowering the next generation of innovators and leaders.</p>
                            <button className="cta-button" onClick={handleLoginClick}>Login</button>
                        </div>
                        <img src="src/images/images.jpg" alt="University Campus" className="hero-image" />
                    </section>

                    {/* About Us Section */}
                    <section id="about-us">
                        <AboutUs />
                    </section>

                    {/* Criteria Section */}
                    <Criteria />  {/* Updated to Criteria */}

                    {/* Faculty Section */}
                    <Faculty />
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
