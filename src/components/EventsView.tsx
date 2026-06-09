import React, { useState } from 'react';
import type { CampusEvent } from '../types/app';

interface EventsViewProps {
  events: CampusEvent[];
  setEvents: React.Dispatch<React.SetStateAction<CampusEvent[]>>;
}

export const EventsView: React.FC<EventsViewProps> = ({ events, setEvents }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleToggleJoin = (id: string) => {
    setEvents(prev => prev.map(evt => 
      evt.id === id ? { ...evt, isJoined: !evt.isJoined } : evt
    ));
  };

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !date || !location) return;

    const newEvent: CampusEvent = {
      id: Date.now().toString(),
      title,
      description,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      date,
      location,
      isJoined: false
    };

    setEvents(prev => [newEvent, ...prev]);
    setTitle('');
    setDescription('');
    setDate('');
    setLocation('');
    setShowForm(false);
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#f8fafc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>Campus Events</h1>
          <p style={{ color: '#94a3b8', margin: '4px 0 0 0', fontSize: '14px' }}>Discover what is happening around campus.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          style={{
            backgroundColor: showForm ? '#475569' : '#2563eb',
            color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 18px', fontWeight: 600, cursor: 'pointer'
          }}
        >
          {showForm ? 'Cancel' : '+ Add New Event'}
        </button>
      </div>

      {showForm && (
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '24px', marginBottom: '24px' }}>
          <form onSubmit={handleCreateEvent} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Event Title" style={{ padding: '12px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }} />
              <input type="text" value={date} onChange={e => setDate(e.target.value)} placeholder="Date & Time" style={{ padding: '12px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }} />
            </div>
            <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" style={{ padding: '12px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }} />
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" rows={3} style={{ padding: '12px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#fff', fontFamily: 'inherit' }} />
            <button type="submit" style={{ backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: 600, cursor: 'pointer', alignSelf: 'flex-start' }}>Publish Event</button>
          </form>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {events.map(evt => (
          <div key={evt.id} style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '16px', overflow: 'hidden' }}>
            <img src={evt.image} alt={evt.title} style={{ width: '100%', maxHeight: '220px', objectFit: 'cover' }} />
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                <div>
                  <h2 style={{ fontSize: '22px', margin: '0 0 8px 0' }}>{evt.title}</h2>
                  <p style={{ color: '#cbd5e1', margin: '0 0 16px 0' }}>{evt.description}</p>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#94a3b8' }}>
                    <span>📅 {evt.date}</span>
                    <span>📍 {evt.location}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleToggleJoin(evt.id)}
                  style={{
                    backgroundColor: evt.isJoined ? '#ef4444' : 'transparent',
                    color: evt.isJoined ? '#ffffff' : '#3b82f6',
                    border: evt.isJoined ? 'none' : '1px solid #3b82f6',
                    borderRadius: '8px', padding: '10px 20px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', minWidth: '120px'
                  }}
                >
                  {evt.isJoined ? 'Leave Event' : 'Join Event'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
