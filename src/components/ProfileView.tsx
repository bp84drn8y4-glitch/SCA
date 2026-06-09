import React from 'react';

export const ProfileView: React.FC = () => {
  return (
    <div>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '6px', color: '#f8fafc' }}>
        My Profile
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>
        Manage your campus preferences, contact info, and view academic program updates.
      </p>

      <div className="content-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Profile Avatar Header Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid #334155', paddingBottom: '20px', flexWrap: 'wrap' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#2563eb', display: 'flex', alignItems: 'center', justifycontent: 'center', fontSize: '24px', fontWeight: 'bold', color: '#ffffff' }}>
            S
          </div>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#f8fafc' }}>Student User</h2>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>Deggendorf Institute of Technology (DIT)</p>
          </div>
        </div>

        {/* Academic Details Block Layout */}
        <div>
          <h3 style={{ fontSize: '14px', color: '#60a5fa', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.5px' }}>
            Academic Profile
          </h3>
          <div className="form-grid">
            <div style={{ background: '#0f172a', padding: '12px 16px', borderRadius: '8px', border: '1px solid #334155' }}>
              <span style={{ display: 'block', fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>DEGREE PROGRAM</span>
              <span style={{ color: '#f8fafc', fontSize: '14px', fontWeight: 600, display: 'block', marginTop: '2px' }}>
                BSc Industrial Engineering
              </span>
            </div>
            <div style={{ background: '#0f172a', padding: '12px 16px', borderRadius: '8px', border: '1px solid #334155' }}>
              <span style={{ display: 'block', fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>CAMPUS LOCATION</span>
              <span style={{ color: '#f8fafc', fontSize: '14px', fontWeight: 600, display: 'block', marginTop: '2px' }}>
                European Campus Rottal-Inn (ECRI)
              </span>
            </div>
          </div>
        </div>

        {/* Settings Form Wrapper */}
        <div style={{ marginTop: '8px' }}>
          <h3 style={{ fontSize: '14px', color: '#60a5fa', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.5px' }}>
            Contact Settings
          </h3>
          <div className="form-grid" style={{ marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px', fontWeight: 600 }}>Preferred Email</label>
              <input type="email" className="input-field" defaultValue="student@stud.th-deg.de" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px', fontWeight: 600 }}>Phone Number (Optional)</label>
              <input type="tel" className="input-field" placeholder="+49 123 456789" />
            </div>
          </div>
          <button className="interactive-btn" style={{ background: '#2563eb', padding: '10px 24px', fontWeight: 600 }}>
            Save Profile Updates
          </button>
        </div>
      </div>
    </div>
  );
};
