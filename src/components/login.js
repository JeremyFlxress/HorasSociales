import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validCredentials = [
        { email: 'estudiante1@raices.superate.org.sv', password: 'Raices29' },
        { email: 'estudiante2@raices.superate.org.sv', password: 'Raices29' },
        { email: 'estudiante3@raices.superate.org.sv', password: 'Raices29' },
        { email: 'estudiante4@raices.superate.org.sv', password: 'Raices29' },
        { email: 'estudiante5@raices.superate.org.sv', password: 'Raices29' },
    ];

    const handleLogin = () => {
        const user = validCredentials.find(
            (cred) => cred.email === email && cred.password === password
        );

        if (user) {
            navigate('/exam-setup'); 
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-page">
            <header className="login-header">
                <img src="./certiport.png" alt="Certiport Logo" className="logo" />
                <h1>FUSALMO (90024618)</h1>
            </header>

            <div className="login-content">
                <h2>Welcome</h2>
                <p>Log in to take your exam</p>
                <p className="required-field">* indicates a required field</p>

                <div className="form-group">
                    <label>Username *</label>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password *</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="login-button" onClick={handleLogin}>
                    Login
                </button>

                {error && <p className="error-message">{error}</p>}

                <p className="forgot-password">
                    Forgot your username or password? <a href="#">I Cannot Access My Account</a>
                </p>
            </div>

            <footer className="footer">
                <p>Copyright © 1996-2024 Pearson Education Inc.</p>
                <p>Terms | Privacy | Contact</p>
            </footer>
        </div>
    );
};

export default Login;
