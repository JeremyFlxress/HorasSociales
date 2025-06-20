"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); 

  const validCredentials = [
    { email: "estudiante1@raices.superate.org.sv", password: "Raices29" },
    { email: "estudiante2@raices.superate.org.sv", password: "Raices29" },
    { email: "estudiante3@raices.superate.org.sv", password: "Raices29" },
    { email: "estudiante4@raices.superate.org.sv", password: "Raices29" },
    { email: "estudiante5@raices.superate.org.sv", password: "Raices29" },
    { email: "1", password: "1" },
  ];

  const handleLogin = () => {
    const user = validCredentials.find(
      (cred) => cred.email === email && cred.password === password
    );

    if (user) {
      router.push("../exam-setup"); 
    } else {
      setError("Invalid email or password");
    }
  };

    const handleSkip = () => {
      router.push("../exam-selection");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <img src="/certiport.png" alt="Certiport Logo" className="logo" />
      </header>

      <div className="login-content">
        <h2>Welcome</h2>
        <p>Log in to take your exam</p>

        <div className="form-group">
          <label>Username *</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <br></br>
        <button className="login-button" onClick={handleSkip}>
          Skip login process
        </button>

        {error && <p className="error-message">{error}</p>}

        
      </div>

      <footer className="footer">
        <p>Copyright © 1996-2024 Pearson Education Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
