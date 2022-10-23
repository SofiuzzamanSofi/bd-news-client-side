import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <ul>
                <li>Here is our Terms and Conditions</li>
            </ul>
            <p>Go back to: <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default TermsAndConditions;