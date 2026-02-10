import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { User, ResearchPaper } from '../types'
import './Profile.css'

const mockUser: User = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.j@university.edu',
  institution: 'State University',
  field: 'Psychology',
  bio: 'I am a third-year psychology student with a passion for understanding human behavior and mental health. My research focuses on the impact of technology on adolescent development.',
  joinedAt: '2024-01-15'
}

const mockPapers: ResearchPaper[] = [
  {
    id: '1',
    title: 'The Impact of Social Media on Adolescent Mental Health',
    abstract: 'A comprehensive study examining the correlation between social media usage patterns and mental health outcomes in teenagers.',
    content: '',
    category: 'Psychology',
    author: mockUser,
    keywords: ['social media', 'mental health', 'adolescents', 'psychology'],
    publishedAt: '2024-02-01',
    views: 245,
    downloads: 89,
    status: 'published'
  },
  {
    id: '2',
    title: 'Study Habits and Academic Performance in High School Students',
    abstract: 'An analysis of effective study techniques and their correlation with academic achievement.',
    content: '',
    category: 'Psychology',
    author: mockUser,
    keywords: ['study habits', 'academic performance', 'education', 'students'],
    publishedAt: '2024-01-20',
    views: 178,
    downloads: 56,
    status: 'published'
  }
]

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'papers' | 'about' | 'stats'>('papers')
  const user = mockUser
  const papers = mockPapers

  const totalViews = papers.reduce((sum, paper) => sum + paper.views, 0)
  const totalDownloads = papers.reduce((sum, paper) => sum + paper.downloads, 0)

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <div className="avatar-placeholder">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          
          <div className="profile-info">
            <h1>{user.name}</h1>
            <p className="profile-field">{user.field}</p>
            <p className="profile-institution">{user.institution}</p>
            
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">{papers.length}</span>
                <span className="stat-label">Papers</span>
              </div>
              <div className="stat">
                <span className="stat-number">{totalViews}</span>
                <span className="stat-label">Views</span>
              </div>
              <div className="stat">
                <span className="stat-number">{totalDownloads}</span>
                <span className="stat-label">Downloads</span>
              </div>
            </div>
            
            <div className="profile-actions">
              <button className="btn btn-primary">Edit Profile</button>
              <Link to="/submit" className="btn btn-secondary">Submit New Paper</Link>
            </div>
          </div>
        </div>

        <div className="profile-tabs">
          <button 
            className={`tab ${activeTab === 'papers' ? 'active' : ''}`}
            onClick={() => setActiveTab('papers')}
          >
            Research Papers
          </button>
          <button 
            className={`tab ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button 
            className={`tab ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            Statistics
          </button>
        </div>

        <div className="profile-content">
          {activeTab === 'papers' && (
            <div className="papers-section">
              <h2>Published Research</h2>
              {papers.length > 0 ? (
                <div className="papers-grid">
                  {papers.map(paper => (
                    <div key={paper.id} className="paper-card">
                      <h3>{paper.title}</h3>
                      <p className="paper-abstract">{paper.abstract}</p>
                      <div className="paper-meta">
                        <span className="category">{paper.category}</span>
                        <span className="date">{new Date(paper.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="paper-stats">
                        <span>👁 {paper.views}</span>
                        <span>⬇ {paper.downloads}</span>
                      </div>
                      <Link to={`/research/${paper.id}`} className="btn btn-small">View Paper</Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>No papers published yet.</p>
                  <Link to="/submit" className="btn btn-primary">Submit Your First Paper</Link>
                </div>
              )}
            </div>
          )}

          {activeTab === 'about' && (
            <div className="about-section">
              <h2>About</h2>
              <div className="about-content">
                <div className="about-item">
                  <h3>Biography</h3>
                  <p>{user.bio || 'No biography provided yet.'}</p>
                </div>
                
                <div className="about-item">
                  <h3>Contact Information</h3>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Institution:</strong> {user.institution}</p>
                  <p><strong>Field of Study:</strong> {user.field}</p>
                </div>
                
                <div className="about-item">
                  <h3>Research Interests</h3>
                  <div className="interests-tags">
                    {papers.flatMap(p => p.keywords).filter((v, i, a) => a.indexOf(v) === i).map((keyword, index) => (
                      <span key={index} className="interest-tag">{keyword}</span>
                    ))}
                  </div>
                </div>
                
                <div className="about-item">
                  <h3>Member Since</h3>
                  <p>{new Date(user.joinedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="stats-section">
              <h2>Research Statistics</h2>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Total Papers</h3>
                  <div className="stat-number">{papers.length}</div>
                  <p>Published research papers</p>
                </div>
                
                <div className="stat-card">
                  <h3>Total Views</h3>
                  <div className="stat-number">{totalViews.toLocaleString()}</div>
                  <p>Cumulative paper views</p>
                </div>
                
                <div className="stat-card">
                  <h3>Total Downloads</h3>
                  <div className="stat-number">{totalDownloads.toLocaleString()}</div>
                  <p>Paper downloads</p>
                </div>
                
                <div className="stat-card">
                  <h3>Average Views per Paper</h3>
                  <div className="stat-number">{papers.length > 0 ? Math.round(totalViews / papers.length) : 0}</div>
                  <p>Average engagement</p>
                </div>
              </div>
              
              <div className="performance-chart">
                <h3>Recent Performance</h3>
                <div className="chart-placeholder">
                  <p>Chart showing views and downloads over time would appear here</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
