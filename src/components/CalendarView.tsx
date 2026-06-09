import React from 'react';
import type { CampusEvent } from '../types/app';

interface CalendarViewProps {
  events: CampusEvent[];
  setEvents: React.Dispatch<React.SetStateAction<CampusEvent[]>>;
}

export const CalendarView: React.FC<CalendarViewProps> = ({ events, setEvents }) => {
  // Pull only events where the student clicked "Join"
  const joinedEventsList = events.filter(e => e.isJoined);

  const handleLeaveEvent = (id: string) => {
    setEvents(prev => prev.map(evt => 
      evt.id === id ? { ...evt, isJoined: false } : evt
    ));
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#f8fafc' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 4px 0' }}>Your Campus Calendar</h1>
      <p style={{ color: '#94a3b8', margin: '0 0 24px 0', fontSize: '14px' }}>Track your personal schedule, classes, and joined social meetups.</p>

      <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '24px' }}>
        <h2 style={{ fontSize: '20px', marginTop: 0, marginBottom: '16px', color: '#3b82f6' }}>✨ Scheduled Events ({joinedEventsList.length})</h2>
        
        {joinedEventsList.length === 0 ? (
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px' }}>You haven't joined any campus events yet. Go to the Events tab to join your first one!</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {joinedEventsList.map(evt => (
              <div key={evt.id} style={{ 
                backgroundColor: '#0f172a', 
                border: '1px solid #1e293b', 
                borderRadius: '12px', 
                padding: '16px',
                display: 'flex',
                justifyContent: 'space-between', /* FIXED: Changed from hyphenated to camelCase string wrapper */
                alignItems: 'center'
              }}>
                <div>
                  <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', color: '#f8fafc' }}>{evt.title}</h4>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#94a3b8' }}>
                    <span>📅 {evt.date}</span>
                    <span>📍 {evt.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleLeaveEvent(evt.id)}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#ef4444',
                    border: '1px solid #ef4444',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Leave
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
