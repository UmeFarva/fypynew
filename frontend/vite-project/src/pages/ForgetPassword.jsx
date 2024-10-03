import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/forgetPassword.css'; // Create this CSS file for styling

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Hook to navigate to other pages

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the email submission for password reset
        if (email) {
            // Here, you can send the email to the server to trigger a password reset link.
            console.log('Password reset request sent for:', email);

            // Display a success message (can be enhanced with real API responses)
            setMessage('A password reset link has been sent to your email.');

            // Optionally, redirect the user to the login page after a few seconds
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } else {
            setMessage('Please enter a valid email address.');
        }
    };

    return (
        <div className="forget-password-page">
            <h2>Forgot Password?</h2>
            <p>Please enter your email address to receive a password reset link.</p>

            <form onSubmit={handleSubmit} className="forget-password-form">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send Reset Link</button>
            </form>

            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default ForgetPassword;
