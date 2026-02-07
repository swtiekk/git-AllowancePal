import React, { useState } from 'react';
import '../styles/main.css';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const adminAccount = {
    email: "admin@allowancepal.com",
    role: "System Administrator"
  };

  const loginMessage = "Access the analytics dashboard to monitor student financial behavior, spending trends, and allowance sustainability.";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Login functionality would be implemented here');
    }, 1000);
  };

  const handleDemoLogin = () => {
    setEmail(adminAccount.email);
    setPassword("demo123");
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="logo-container">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="logo-text">
            <h1>AllowancePal</h1>
            <p className="logo-subtitle">Financial Analytics Dashboard</p>
          </div>
        </div>
      </div>

      <div className="login-card">
        <div className="login-card-header">
          <div className="admin-badge">
            <svg className="badge-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span className="badge-text">{adminAccount.role}</span>
          </div>
          <h3>Admin Portal</h3>
          <p className="login-description">{loginMessage}</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">
              <span className="label-text">Email Address</span>
              <span className="label-hint">Use your admin credentials</span>
            </label>
            <div className="input-with-icon">
              <svg className="input-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@allowancepal.com"
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <span className="label-text">Password</span>
              <span className="label-hint">Minimum 8 characters</span>
            </label>
            <div className="input-with-icon">
              <svg className="input-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength="8"
                className="form-input"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <svg viewBox="0 0 20 20" fill="currentColor">
                  {showPassword ? (
                    <>
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </>
                  ) : (
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="checkbox-input"
              />
              <span className="checkbox-custom"></span>
              Remember this device
            </label>
            <a href="#forgot" className="forgot-link">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Authenticating...
              </>
            ) : (
              <>
                <svg className="button-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Login
              </>
            )}
          </button>

          <div className="demo-section">
            <p className="demo-hint">Need to test the system?</p>
            <button
              type="button"
              className="demo-button"
              onClick={handleDemoLogin}
            >
              <svg className="demo-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Use Demo Credentials
            </button>
          </div>
        </form>

        <div className="login-footer">
          <div className="security-info">
            <svg className="security-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>All data is encrypted and securely stored</span>
          </div>
          <p className="privacy-note">
            By logging in, you agree to our data privacy and security policies.
          </p>
        </div>
      </div>

      <footer className="login-page-footer">
        <p>© 2026 AllowancePal Admin Panel • v2.1.0</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <span className="divider">•</span>
          <a href="#terms">Terms of Service</a>
          <span className="divider">•</span>
          <a href="#support">Contact Support</a>
        </div>
      </footer>
    </div>
  );
}

export default AdminLogin;