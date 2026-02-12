import { useState } from "react";
import "../styles/main.css";
import LogoHeader from "../components/LogoHeader";
import PrimaryButton from "../components/PrimaryButton";
import AdminBadge from "../components/AdminBadge";
import InputField from "../components/InputField";

function AdminLogin({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const loginMessage =
    "Access the analytics dashboard to monitor student financial behavior, spending trends, and allowance sustainability.";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setPage("dashboard");
    }, 1000);
  };

  const handleDemoLogin = () => {
    setEmail("admin@allowancepal.com");
    setPassword("demo123");
  };

  const EmailIcon = () => (
    <svg className="input-icon" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );

  const PasswordIcon = () => (
    <svg className="input-icon" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="login-container">
      <LogoHeader />

      <div className="login-card">
        <div className="login-card-header">
          <AdminBadge role="System Administrator" />
          
          <h3>Admin Portal</h3>
          <p className="login-description">{loginMessage}</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {/* Email Input using InputField component */}
          <InputField
            label="Email Address"
            hint="Use your admin credentials"
            icon={<EmailIcon />}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@allowancepal.com"
            required={true}
            name="email"
          />

          {/* Password Input using InputField component */}
          <InputField
            label="Password"
            hint="Minimum 8 characters"
            icon={<PasswordIcon />}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required={true}
            name="password"
            minLength={8}
            showPasswordToggle={true}
            onTogglePassword={() => setShowPassword(!showPassword)}
          />

          {/* Remember Me Checkbox - Full width with no extra button */}
          <div className="form-options" style={{ justifyContent: "flex-start" }}>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="checkbox-custom"></span>
              Remember this device
            </label>
          </div>

          {/* Login Button using PrimaryButton component */}
          <PrimaryButton 
            isLoading={isLoading} 
            text="Login" 
            type="submit"
            variant="primary"
          />

          {/* Demo Section */}
          <div className="demo-section">
            <p className="demo-hint">Need to test the system?</p>
            <button 
              type="button" 
              className="demo-button" 
              onClick={handleDemoLogin}
            >
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
          <button 
            className="footer-link"
            onClick={() => setPage("privacy")}
          >
            Privacy Policy
          </button>
          <span className="divider">•</span>
          <button 
            className="footer-link"
            onClick={() => setPage("terms")}
          >
            Terms of Service
          </button>
          <span className="divider">•</span>
          <button 
            className="footer-link"
            onClick={() => setPage("support")}
          >
            Contact Support
          </button>
        </div>
      </footer>
    </div>
  );
}

export default AdminLogin;