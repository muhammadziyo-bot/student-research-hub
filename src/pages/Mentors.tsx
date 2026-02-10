import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Professor } from '../types'
import './Mentors.css'

const mockProfessors: Professor[] = [
  {
    id: '1',
    name: 'Dr. Aziz Karimov',
    title: 'Professor of Computer Science',
    institution: 'Tashkent University of Information Technologies',
    field: 'Technology & IT',
    bio: 'Leading researcher in AI and machine learning with 15+ years of experience. Passionate about guiding young researchers in Uzbekistan.',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Software Engineering'],
    mentorshipAvailable: true,
    maxStudents: 5,
    currentStudents: 2,
    rating: 4.8,
    languages: ['Uzbek', 'Russian', 'English'],
  },
  {
    id: '2',
    name: 'Dr. Gulnora Rakhimova',
    title: 'Associate Professor of Medicine',
    institution: 'Tashkent Medical Academy',
    field: 'Medicine & Health',
    bio: 'Specialist in public health research with focus on Central Asian healthcare challenges. Committed to mentoring future medical researchers.',
    expertise: ['Public Health', 'Epidemiology', 'Clinical Research', 'Healthcare Policy'],
    mentorshipAvailable: true,
    maxStudents: 3,
    currentStudents: 1,
    rating: 4.9,
    languages: ['Uzbek', 'Russian', 'English'],
  },
  {
    id: '3',
    name: 'Dr. Bekzod Tashmatov',
    title: 'Professor of Economics',
    institution: 'University of World Economy and Diplomacy',
    field: 'Economics & Business',
    bio: 'Expert in Uzbek economic development and market reforms. Helping students understand and research local economic challenges.',
    expertise: ['Economic Development', 'Market Analysis', 'Business Strategy', 'Policy Research'],
    mentorshipAvailable: true,
    maxStudents: 4,
    currentStudents: 3,
    rating: 4.7,
    languages: ['Uzbek', 'Russian', 'English'],
  },
  {
    id: '4',
    name: 'Dr. Malika Nazarova',
    title: 'Professor of Environmental Science',
    institution: 'National University of Uzbekistan',
    field: 'Environmental Science',
    bio: 'Leading researcher on Aral Sea and Central Asian environmental issues. Dedicated to mentoring students in environmental research.',
    expertise: ['Environmental Science', 'Climate Change', 'Water Resources', 'Ecology'],
    mentorshipAvailable: true,
    maxStudents: 3,
    currentStudents: 1,
    rating: 4.9,
    languages: ['Uzbek', 'Russian', 'English'],
  }
]

const Mentors = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedField, setSelectedField] = useState('')
  
  const filteredProfessors = mockProfessors.filter(professor => {
    const matchesSearch = professor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         professor.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         professor.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesField = !selectedField || professor.field === selectedField
    
    return matchesSearch && matchesField
  })

  const fields = Array.from(new Set(mockProfessors.map(p => p.field)))

  return (
    <div className="mentors">
      <div className="floating-icons-mentors">
        <div className="floating-icon-mentor"><i className="fas fa-user-graduate"></i></div>
        <div className="floating-icon-mentor"><i className="fas fa-chalkboard-teacher"></i></div>
        <div className="floating-icon-mentor"><i className="fas fa-brain"></i></div>
        <div className="floating-icon-mentor"><i className="fas fa-microscope"></i></div>
        <div className="floating-icon-mentor"><i className="fas fa-book"></i></div>
        <div className="floating-icon-mentor"><i className="fas fa-award"></i></div>
      </div>
      <div className="mentors-header">
        <h1>Find a Research Mentor</h1>
        <p>Connect with experienced professors who can guide your research journey</p>
        
        <div className="search-filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search mentors by name, expertise, or institution..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="field-filter">
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="filter-select"
            >
              <option value="">All Fields</option>
              {fields.map(field => (
                <option key={field} value={field}>{field}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mentors-stats">
        <div className="stat-card">
          <h3>{mockProfessors.length}</h3>
          <p>Available Mentors</p>
        </div>
        <div className="stat-card">
          <h3>{mockProfessors.filter(p => p.mentorshipAvailable).length}</h3>
          <p>Currently Accepting Students</p>
        </div>
        <div className="stat-card">
          <h3>{mockProfessors.reduce((sum, p) => sum + (p.maxStudents - p.currentStudents), 0)}</h3>
          <p>Open Mentorship Spots</p>
        </div>
      </div>

      <div className="mentors-grid">
        {filteredProfessors.map(professor => (
          <div key={professor.id} className="mentor-card">
            <div className="mentor-header">
              <div className="mentor-avatar">
                <div className="avatar-placeholder">
                  {professor.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="mentor-info">
                <h3>{professor.name}</h3>
                <p className="mentor-title">{professor.title}</p>
                <p className="mentor-institution">{professor.institution}</p>
                <div className="mentor-rating">
                  <span className="stars">{'★'.repeat(Math.floor(professor.rating))}</span>
                  <span className="rating-number">{professor.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="mentor-bio">
              <p>{professor.bio}</p>
            </div>
            
            <div className="mentor-expertise">
              <h4>Areas of Expertise</h4>
              <div className="expertise-tags">
                {professor.expertise.map((skill, index) => (
                  <span key={index} className="expertise-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="mentor-languages">
              <h4>Languages</h4>
              <div className="language-tags">
                {professor.languages.map((lang, index) => (
                  <span key={index} className="language-tag">{lang}</span>
                ))}
              </div>
            </div>
            
            <div className="mentor-availability">
              <div className="availability-info">
                <span className="spots-info">
                  {professor.maxStudents - professor.currentStudents} of {professor.maxStudents} spots available
                </span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(professor.currentStudents / professor.maxStudents) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="mentor-actions">
              {professor.mentorshipAvailable && professor.currentStudents < professor.maxStudents ? (
                <button className="btn btn-primary btn-full">Request Mentorship</button>
              ) : (
                <button className="btn btn-secondary btn-full" disabled>
                  {professor.currentStudents >= professor.maxStudents ? 'Mentorship Full' : 'Not Available'}
                </button>
              )}
              <Link to={`/profile/${professor.id}`} className="btn btn-outline btn-full">
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredProfessors.length === 0 && (
        <div className="no-results">
          <h3>No mentors found</h3>
          <p>Try adjusting your search criteria or check back later for new mentors</p>
        </div>
      )}
    </div>
  )
}

export default Mentors
