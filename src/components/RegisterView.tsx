import React, { useState } from 'react';

interface RegisterViewProps {
  onNavigateToLogin: () => void;
}

export const RegisterView: React.FC<RegisterViewProps> = ({ onNavigateToLogin }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Alle Felder sind erforderlich (All fields required)');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwörter stimmen nicht überein (Passwords do not match)');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onNavigateToLogin();
    }, 600);
  };

  return (
    <div className="login-page-container">
      {/* Scope-isolated Responsive CSS Stylesheet */}
      <style>{`
        .login-page-container, 
        .login-page-container * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .login-page-container {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f8f9fa;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          padding: 20px;
        }

        .login-card {
          width: 100%;
          max-width: 440px;
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.03);
          border: 1px solid #e9ecef;
          text-align: center;
          transition: all 0.3s ease;
        }

        .icon-header {
          margin-bottom: 24px;
        }

        .icon-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #edf2ff;
          color: #2563eb;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          margin-bottom: 16px;
        }

        .login-card h1 {
          font-size: 26px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 6px;
          letter-spacing: -0.5px;
        }

        .login-card p {
          font-size: 13px;
          color: #718096;
          font-weight: 500;
        }

        .form-group {
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: left;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 700;
          color: #4a5568;
          padding-left: 2px;
        }

        .form-input {
          width: 100%;
          padding: 12px 14px;
          font-size: 14px;
          border-radius: 8px;
          border: 1px solid #cbd5e0;
          background-color: #ffffff;
          color: #2d3748;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }

        .form-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 1px #2563eb;
        }

        .error-alert {
          padding: 12px;
          background-color: #fff5f5;
          border: 1px solid #fed7d7;
          border-radius: 8px;
          font-size: 13px;
          color: #c53030;
          font-weight: 500;
          margin-bottom: 16px;
          text-align: left;
        }

        .submit-btn {
          width: 100%;
          background-color: #2563eb;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          padding: 13px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-top: 12px;
        }

        .submit-btn:hover {
          background-color: #1d4ed8;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .card-footer {
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid #edf2f7;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
        }

        .footer-link {
          color: #2563eb;
          text-decoration: none;
          background: none;
          border: none;
          padding: 0;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }

        .footer-link:hover {
          text-decoration: underline;
        }

        /* 📱 PHONE RESPONSIVE MEDIA QUERY */
        @media (max-width: 480px) {
          .login-page-container {
            padding: 12px;
            background-color: #ffffff;
          }

          .login-card {
            border: none;
            box-shadow: none;
            padding: 24px 12px;
          }
          
          .login-card h1 {
            font-size: 24px;
          }

          .form-input {
            padding: 14px 14px;
            font-size: 16px; /* Prevents iOS forced input zooming */
          }

          .submit-btn {
            padding: 15px;
            font-size: 15px;
          }
        }
      `}</style>

      <div className="login-card">
        <header className="icon-header">
          <div className="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
          </div>
          <h1>Create Account</h1>
          <p>Sign up for the ECRI Smart Hub</p>
        </header>

        <form onSubmit={handleSubmit}>
          {error && <div className="error-alert">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Benutzername oder E-Mail</label>
            <input
              id="email"
              type="text"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g., sa12345 or student email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Passwort (Password)</label>
            <input
              id="password"
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create secure password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Passwort wiederholen</label>
            <input
              id="confirmPassword"
              type="password"
              className="form-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Registrieren (Sign Up)'}
          </button>
        </form>

        <footer className="card-footer">
          <span style={{ color: '#718096', marginRight: '4px' }}>Already have an account?</span>
          <button type="button" onClick={onNavigateToLogin} className="footer-link">
            Log in
          </button>
        </footer>
      </div>
    </div>
  );
};
