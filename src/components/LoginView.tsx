import React, { useState } from 'react';

interface LoginViewProps {
  onNavigateToRegister: () => void;
  onLoginSuccess: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onNavigateToRegister, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating login for your routing logic
    onLoginSuccess();
  };

  return (
    <div style={{ 
      width: '100%', 
      padding: '40px 32px', 
      backgroundColor: '#ffffff', 
      borderRadius: '24px', 
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
      boxSizing: 'border-box'
    }}>
      
      {/* Icon and Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ 
          display: 'inline-flex', 
          padding: '16px', 
          backgroundColor: '#eff6ff', 
          borderRadius: '50%', 
          color: '#2563eb',
          marginBottom: '16px' 
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        </div>
        <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#1e293b', margin: '0 0 8px 0' }}>Welcome Back</h2>
        <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Log in with your student account</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>
            Benutzername (Username)
          </label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username or Student Email" 
            required
            style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '15px', color: '#1e293b', backgroundColor: '#f8fafc', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>
            Passwort (Password)
          </label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" 
            required
            style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '15px', color: '#1e293b', backgroundColor: '#f8fafc', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          type="submit" 
          style={{ 
            backgroundColor: '#2563eb', 
            color: '#ffffff', 
            border: 'none', 
            borderRadius: '10px', 
            padding: '14px', 
            fontSize: '16px', 
            fontWeight: 600, 
            cursor: 'pointer',
            marginTop: '8px',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
          }}
        >
          Einloggen (Sign In)
        </button>
      </form>

      {/* Footer Links */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '28px', fontSize: '13px' }}>
        <button 
          onClick={onNavigateToRegister}
          style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', fontWeight: 500, padding: 0 }}
        >
          Create an account
        </button>
        <span style={{ color: '#64748b', cursor: 'pointer' }}>Forgot password?</span>
      </div>

    </div>
  );
};
