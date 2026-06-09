import { useState } from 'react';
import type { CurrentView, CampusEvent } from './types/app';
import { Sidebar } from './components/Sidebar';
import { EventsView } from './components/EventsView';
import { StudyGroupsView } from './components/StudyGroupsView';
import { CalendarView } from './components/CalendarView';
import { ProfileView } from './components/ProfileView';
import { LoginView } from './components/LoginView';
import { RegisterView } from './components/RegisterView';

export default function App() {
  const [currentView, setCurrentView] = useState<CurrentView>('login');
  const [events, setEvents] = useState<CampusEvent[]>([
    {
      id: '1',
      title: 'Industrial Engineering Sync Study',
      description: 'Weekly breakdown covering core layout planning, automation logistics pipelines, and bottleneck calculation methods.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
      date: 'June 10, 2026 - 14:00',
      location: 'Study Room 1, Pfarrkirchen Hub',
      isJoined: false,
    }
  ]);

  const handleSignOut = () => {
    setCurrentView('login');
  };

  const renderView = () => {
    switch (currentView) {
      case 'events':
        return <EventsView events={events} setEvents={setEvents} />;
      case 'study-groups':
        return <StudyGroupsView />;
      case 'calendar':
        return <CalendarView events={events} setEvents={setEvents} />;
      case 'profile':
        return <ProfileView />;
      default:
        return <EventsView events={events} setEvents={setEvents} />;
    }
  };

  const isAuthView = currentView === 'login' || currentView === 'register';

// 1. CLEAN FULL-SCREEN AUTHENTICATION (Bypasses layout template splits completely)
  if (isAuthView) {
    return (
      <div style={{ 
        backgroundColor: '#0f172a', /* Locks the background to the deep dark blue theme */
        minHeight: '100vh', 
        width: '100%',
        margin: 0,
        padding: '24px',
        display: 'flex',
        alignItems: 'center',       /* Forces absolute vertical centering */
        justifyContent: 'center',     /* Forces absolute horizontal centering */
        boxSizing: 'border-box'
      }}>
        {/* Isolated card boundary envelope */}
        <div style={{ 
          width: '100%', 
          maxWidth: '440px', 
          backgroundColor: '#ffffff', /* Gives the card a clean white background */
          padding: '40px 32px',
          borderRadius: '24px',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
          boxSizing: 'border-box'
        }}>
          {currentView === 'login' ? (
            <LoginView 
              onNavigateToRegister={() => setCurrentView('register')} 
              onLoginSuccess={() => setCurrentView('events')} 
            />
          ) : (
            <RegisterView 
              onNavigateToLogin={() => setCurrentView('login')} 
            />
          )}
        </div>
      </div>
    );
  }

  // 2. MAIN APPLICATION SCALED DASHBOARD
  return (
    <div className="responsive-dashboard-shell">
      <style>{`
        .responsive-dashboard-shell {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width: 100%;
          background-color: #0f172a;
        }
        .main-content-window {
          flex: 1;
          padding: 16px;
          background-color: #0f172a;
          width: 100%;
        }
        @media (min-width: 768px) {
          .responsive-dashboard-shell { flex-direction: row; }
          .main-content-window { padding: 40px; overflow-y: auto; height: 100vh; }
        }
      `}</style>
      
      <Sidebar currentView={currentView} onNavigate={setCurrentView} onSignOut={handleSignOut} />
      
      <div className="main-content-window">
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          {renderView()}
        </div>
      </div>
    </div>
  );
}
