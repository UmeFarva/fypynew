import React, { useState } from 'react';
import '../styles/settings.css';

const Settings = () => {
    const [settings, setSettings] = useState({
        notificationEmail: '',
        maxLoginAttempts: 3,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: value,
        }));
    };

    const handleSave = () => {
        // Logic to save settings
        console.log('Settings saved:', settings);
    };

    return (
        <div className="settings">
            <h2>Settings</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                <div>
                    <label>Notification Email:</label>
                    <input
                        type="email"
                        name="notificationEmail"
                        value={settings.notificationEmail}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Max Login Attempts:</label>
                    <input
                        type="number"
                        name="maxLoginAttempts"
                        value={settings.maxLoginAttempts}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Save Settings</button>
            </form>
        </div>
    );
};

export default Settings;
