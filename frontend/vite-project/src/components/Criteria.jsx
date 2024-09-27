import React from 'react';


const Criteria = () => {
    return (
        <div className="criteria-section">
            <h2>Basic Credentials to Register</h2>
            <div className="criteria-list">
                <div className="criteria-item">
                    <h3>1. Admin Approval</h3>
                    <p>
                        Every user must first request registration approval from the admin. This ensures authorized access and security.
                    </p>
                </div>
                <div className="criteria-item">
                    <h3>2. Valid University Email</h3>
                    <p>
                        To register, a valid university-issued email address is required to verify the identity of the individual.
                    </p>
                </div>
                <div className="criteria-item">
                    <h3>3. Biometric Enrollment</h3>
                    <p>
                        Users must undergo biometric enrollment, such as fingerprint scanning, to complete their registration and enable attendance tracking.
                    </p>
                </div>
                <div className="criteria-item">
                    <h3>4. Department Assignment</h3>
                    <p>
                        Upon approval, users will be assigned to their respective departments and roles (e.g., student, faculty, staff).
                    </p>
                </div>
                <div className="criteria-item">
                    <h3>5. Security Password Setup</h3>
                    <p>
                        A secure password must be created to safeguard user accounts and enhance system security.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Criteria;
