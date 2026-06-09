import React, { useState } from 'react';

interface StudyGroup {
  id: string;
  courseName: string;
  topic: string;
  category: string;
  maxSeats: number;
  filledSeats: number;
  createdBy: string;
  inviteLink: string;
  isJoined: boolean;
}

export const StudyGroupsView: React.FC = () => {
  // Mock State for Study Groups
  const [groups, setGroups] = useState<StudyGroup[]>([
    {
      id: '1',
      courseName: 'Academic Writing & Research',
      topic: 'Brainstorming individual thesis structures and cross-referencing directives.',
      category: 'General',
      maxSeats: 6,
      filledSeats: 3,
      createdBy: 'Alex M.',
      inviteLink: 'https://chat.whatsapp.com/mock-link',
      isJoined: false
    }
  ]);

  // Form states
  const [courseName, setCourseName] = useState('');
  const [topic, setTopic] = useState('');
  const [category, setCategory] = useState('General');
  const [maxSeats, setMaxSeats] = useState('');
  const [inviteLink, setInviteLink] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Toggle Join status and increment seats
  const handleToggleJoin = (id: string) => {
    setGroups(prev => prev.map(group => {
      if (group.id === id) {
        const currentlyJoined = group.isJoined;
        return {
          ...group,
          isJoined: !currentlyJoined,
          filledSeats: currentlyJoined ? group.filledSeats - 1 : group.filledSeats + 1
        };
      }
      return group;
    }));
  };

  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseName || !topic || !maxSeats) return;

    const newGroup: StudyGroup = {
      id: Date.now().toString(),
      courseName,
      topic,
      category,
      maxSeats: parseInt(maxSeats) || 5,
      filledSeats: 1, // Creator takes the first spot
      createdBy: 'You',
      inviteLink: inviteLink || 'https://chat.whatsapp.com/default-link',
      isJoined: true // Automatically joined as creator
    };

    setGroups([newGroup, ...groups]);
    setCourseName('');
    setTopic('');
    setCategory('General');
    setMaxSeats('');
    setInviteLink('');
    setShowForm(false);
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#f8fafc' }}>
      
      {/* Upper Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>Study Groups</h1>
          <p style={{ color: '#94a3b8', margin: '4px 0 0 0', fontSize: '14px' }}>Find classmates, form teams, and share resources.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          style={{
            backgroundColor: showForm ? '#475569' : '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 18px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          {showForm ? 'Cancel' : '+ Start a New Group'}
        </button>
      </div>

      {/* Modern Creation Form Panel Container */}
      {showForm && (
        <div style={{
          backgroundColor: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 600, marginTop: 0 }}>Create a Study Group</h3>
          <form onSubmit={handleCreateGroup} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px', fontWeight: 600 }}>Course / Module Name</label>
                <input 
                  type="text" 
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  placeholder="e.g., Industrial Engineering Sync Study" 
                  style={{ width: '100%', padding: '12px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px', fontWeight: 600 }}>Category</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ width: '100%', padding: '12px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc', height: '45px' }}
                >
                  <option value="General">General Study</option>
                  <option value="Exam Prep">Exam Preparation</option>
                  <option value="Assignment">Assignment Team</option>
                  <option value="Lab Work">Laboratory / Practical</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px', fontWeight: 600 }}>Max Seats available</label>
                <input 
                  type="number" 
                  value={maxSeats}
                  onChange={(e) => setMaxSeats(e.target.value)}
                  placeholder="e.g., 6" 
                  style={{ width: '100%', padding: '12px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px', fontWeight: 600 }}>Invite Link (WhatsApp / Discord)</label>
              <input 
                type="url" 
                value={inviteLink}
                onChange={(e) => setInviteLink(e.target.value)}
                placeholder="https://chat.whatsapp.com/..." 
                style={{ width: '100%', padding: '12px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px', fontWeight: 600 }}>Study Topic / Goal Description</label>
              <textarea 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="What are you working on or planning to review?" 
                rows={3}
                style={{ width: '100%', padding: '12px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc', fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box' }}
              />
            </div>

            <button type="submit" style={{ backgroundColor: '#10b981', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '12px 24px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', alignSelf: 'flex-start' }}>
              Create Group
            </button>
          </form>
        </div>
      )}

      {/* Styled Grid Cards Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {groups.map((group) => {
          const isFull = group.filledSeats >= group.maxSeats;
          return (
            <div key={group.id} style={{
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              gap: '16px'
            }}>
              <div>
                {/* Badge Tag Line Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ backgroundColor: '#3b82f6', color: '#ffffff', fontSize: '11px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '20px', textTransform: 'uppercase' }}>
                    {group.category}
                  </span>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                    By {group.createdBy}
                  </span>
                </div>

                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#f8fafc', margin: '0 0 8px 0' }}>{group.courseName}</h2>
                <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>{group.topic}</p>
              </div>

              <div>
                {/* Seats Tracker Capacity Bar */}
                <div style={{ margin: '8px 0 16px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>
                    <span>👥 {group.filledSeats} / {group.maxSeats} spots taken</span>
                    <span>{isFull ? 'Full' : `${group.maxSeats - group.filledSeats} open`}</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: '#0f172a', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ 
                      width: `${(group.filledSeats / group.maxSeats) * 100}%`, 
                      height: '100%', 
                      backgroundColor: isFull ? '#ef4444' : '#10b981',
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </div>

                {/* Bottom Action Triggers */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => handleToggleJoin(group.id)}
                    disabled={isFull && !group.isJoined}
                    style={{
                      flex: 1,
                      backgroundColor: group.isJoined ? '#ef4444' : (isFull ? '#475569' : 'transparent'),
                      color: group.isJoined ? '#ffffff' : (isFull ? '#94a3b8' : '#3b82f6'),
                      border: group.isJoined || isFull ? 'none' : '1px solid #3b82f6',
                      borderRadius: '8px',
                      padding: '10px 14px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: isFull && !group.isJoined ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {group.isJoined ? 'Leave Group' : (isFull ? 'Group Full' : 'Join Group')}
                  </button>

                  {group.isJoined && (
                    <a 
                      href={group.inviteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: '#2563eb',
                        color: '#ffffff',
                        borderRadius: '8px',
                        padding: '10px 14px',
                        fontSize: '14px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        textAlign: 'center',
                        display: 'inline-block'
                      }}
                    >
                      Chat Link 💬
                    </a>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
