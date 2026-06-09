import React from 'react';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: any) => void;
  onSignOut: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate, onSignOut }) => {
  const menuItems = [
    { id: 'events', label: 'Events', icon: '✨' },
    { id: 'study-groups', label: 'Groups', icon: '👥' },
    { id: 'calendar', label: 'Schedule', icon: '📅' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <div className="app-navigation-sidebar">
      <style>{`
        .app-navigation-sidebar {
          width: 100%;
          background-color: #0f172a;
          border-bottom: 1px solid #1e293b;
          display: flex;
          flex-direction: row; /* Horizontal nav header layout on mobile phones */
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          box-sizing: border-box;
          z-index: 50;
        }

        .sidebar-brand-title {
          font-size: 16px;
          font-weight: bold;
          color: #f8fafc;
          display: none; /* Hide brand name text on tight mobile viewports to preserve space */
        }

        .nav-items-container {
          display: flex;
          flex-direction: row;
          gap: 6px;
          flex: 1;
          justify-content: space-around;
        }

        .nav-menu-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 8px;
          border: none;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .signout-action-btn {
          padding: 8px;
          border-radius: 8px;
          border: none;
          background: transparent;
          color: #ef4444;
          font-size: 13px;
          fontWeight: 600;
          cursor: pointer;
        }

        /* 💻 DESKTOP COMPONENT LAYOUT MEDIA ADJUSTMENTS */
        @media (min-width: 768px) {
          .app-navigation-sidebar {
            width: 260px;
            height: 100vh;
            flex-direction: column; /* Reverts back to a standard vertical column layout on laptops */
            justify-content: flex-start;
            border-bottom: none;
            border-right: 1px solid #1e293b;
            padding: 24px;
          }

          .sidebar-brand-title {
            display: block;
            margin-bottom: 32px;
            font-size: 18px;
            width: 100%;
            border-bottom: 1px solid #1e293b;
            padding-bottom: 16px;
          }

          .nav-items-container {
            flex-direction: column;
            width: 100%;
            gap: 8px;
            justify-content: flex-start;
          }

          .nav-menu-btn {
            width: 100%;
            font-size: 14px;
            padding: 12px 16px;
            justify-content: flex-start;
          }

          .signout-action-btn {
            width: 100%;
            margin-top: auto;
            padding: 12px 16px;
            justify-content: flex-start;
            display: flex;
            align-items: center;
            gap: 12px;
          }
        }
      `}</style>

      {/* Brand Icon Text */}
      <div className="sidebar-brand-title">
        🎓 ECRI Smart Hub
      </div>

      {/* Navigation Options Links */}
      <nav className="nav-items-container">
        {menuItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="nav-menu-btn"
              style={{
                background: isActive ? '#2563eb' : 'transparent',
                color: isActive ? '#ffffff' : '#94a3b8',
              }}
            >
              <span>{item.icon}</span>
              <span className="btn-text-label">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Signout Block */}
      <button onClick={onSignOut} className="signout-action-btn">
        <span>🚪</span>
        <span className="btn-text-label" style={{ marginLeft: '6px' }}>Sign Out</span>
      </button>
    </div>
  );
};
