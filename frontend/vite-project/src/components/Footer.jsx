import React from 'react';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the login page
    };
    return (
        <footer>
            <p>© 2024 Biometric Device. All rights reserved.</p>
            <button className="login-button" onClick={handleLoginClick}>
                Login
            </button>
        </footer>
    );
};

export default Footer;
