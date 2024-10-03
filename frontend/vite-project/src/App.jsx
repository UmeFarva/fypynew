import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/Homepage';
import RegistrationPage from './pages/RegistrationPage';
import ForgetPassword from './pages/ForgetPassword';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/forget" element={<ForgetPassword />} />
            </Routes>
        </Router>
    );
};

export default App;
