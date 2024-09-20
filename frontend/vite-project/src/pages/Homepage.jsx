import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';


import { useNavigate } from 'react-router-dom';
import '../styles/global.css'; // Import global styles

const HomePage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login'); // This will navigate to the login page
    };

    return (
        <div>
            <Header />
            <div className="container">
                <main>
                    <section>
                        <AboutUs />
                    </section>
                    
                    
                    <section className="center">
                        <button onClick={handleLoginClick}>
                            Login
                        </button>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
