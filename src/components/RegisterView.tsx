import React, { useState } from 'react';

interface RegisterViewProps {
  onNavigateToLogin: () => void;
}

export const RegisterView: React.FC<RegisterViewProps> = ({ onNavigateToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Registration submission handling logic will hook in here with Supabase
    alert("Registration feature coming next!");
    onNavigateToLogin();
  };

  return (
    <div style={{ width: '100%', boxSizing: 'border-box' }}>
      
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
        </div>
        <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#1e293b', margin: '0 0 8px 0' }}>Create Account</h2>
        <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Sign up for the ECRI Smart Hub</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>
            Benutzername oder E-Mail
          </label>
          <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g., sa12345 or student email" 
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
            placeholder="Create secure password" 
            required
            style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '15px', color: '#1e293b', backgroundColor: '#f8fafc', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>
            Passwort wiederholen
          </label>
          <input 
            type="password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password" 
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
          Registrieren (Sign Up)
        </button>
      </form>

      {/* Footer Links */}
      <div style={{ textAlign: 'center', marginTop: '28px', fontSize: '14px', color: '#64748b' }}>
        Already have an account?{' '}
        <button 
          type="button"
          onClick={onNavigateToLogin}
          style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', fontWeight: 600, padding: 0 }}
        >
          Log in
        </button>
      </div>

    </div>
  );
};
