import React, { useState } from 'react';
import '../styles/global.css'; // Import global styles

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login Attempted', { username, password });
    };

    return (
        <div className="container">
            <h2 className="center">Login</h2>
            <form onSubmit={handleLogin} className="center">
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px' }}
                    />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px' }}
                    />
                </div>
                <button type="submit" style={{ marginTop: '20px' }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
