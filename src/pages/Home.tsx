import { Link } from 'react-router-dom'
import type { Category, ResearchPaper } from '../types'
import './Home.css'

const mockCategories: Category[] = [
  { 
    id: '1', 
    name: 'Psychology', 
    description: 'Human behavior and mental processes', 
    paperCount: 45, 
    color: '#FF6B6B',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&auto=format'
  },
  { 
    id: '2', 
    name: 'Business', 
    description: 'Commerce, management, and entrepreneurship', 
    paperCount: 38, 
    color: '#4ECDC4',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format'
  },
  { 
    id: '3', 
    name: 'Technology', 
    description: 'Computer science and innovation', 
    paperCount: 62, 
    color: '#45B7D1',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop&auto=format'
  },
  { 
    id: '4', 
    name: 'Medicine', 
    description: 'Health sciences and medical research', 
    paperCount: 29, 
    color: '#96CEB4',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&auto=format'
  },
  { 
    id: '5', 
    name: 'Social Sciences', 
    description: 'Society, culture, and human interactions', 
    paperCount: 51, 
    color: '#FECA57',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop&auto=format'
  },
  { 
    id: '6', 
    name: 'Environmental Science', 
    description: 'Ecology and environmental studies', 
    paperCount: 33, 
    color: '#48C9B0',
    image: 'https://picsum.photos/400/250?random=6'
  }
]

const mockPapers: ResearchPaper[] = [
  {
    id: '1',
    title: 'The Impact of Social Media on Adolescent Mental Health',
    abstract: 'A comprehensive study examining the correlation between social media usage patterns and mental health outcomes in teenagers.',
    content: '',
    category: 'Psychology',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.j@university.edu',
      institution: 'State University',
      field: 'Psychology',
      joinedAt: '2024-01-15'
    },
    keywords: ['social media', 'mental health', 'adolescents', 'psychology'],
    publishedAt: '2024-02-01',
    views: 245,
    downloads: 89,
    status: 'published'
  },
  {
    id: '2',
    title: 'Machine Learning Applications in Healthcare Diagnosis',
    abstract: 'Exploring the potential of ML algorithms to improve diagnostic accuracy in medical imaging.',
    content: '',
    category: 'Technology',
    author: {
      id: '2',
      name: 'Michael Chen',
      email: 'm.chen@tech.edu',
      institution: 'Tech Institute',
      field: 'Computer Science',
      joinedAt: '2024-01-20'
    },
    keywords: ['machine learning', 'healthcare', 'diagnosis', 'AI'],
    publishedAt: '2024-02-05',
    views: 189,
    downloads: 67,
    status: 'published'
  }
]

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="floating-icons">
          <div className="floating-icon"><i className="fas fa-book-open"></i></div>
          <div className="floating-icon"><i className="fas fa-flask"></i></div>
          <div className="floating-icon"><i className="fas fa-laptop-code"></i></div>
          <div className="floating-icon"><i className="fas fa-seedling"></i></div>
        </div>
        <div className="hero-content">
          <h1>Your Research Journey Starts Here</h1>
          <p>Empowering Uzbek high school and university students with mentorship, collaboration, and publishing opportunities - completely free</p>
          <div className="hero-buttons">
            <Link to="/submit" className="btn btn-large">Submit Your Research</Link>
            <Link to="/categories" className="btn btn-secondary btn-large">Find a Mentor</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="floating-icons-features">
          <div className="floating-icon-feature"><i className="fas fa-graduation-cap"></i></div>
          <div className="floating-icon-feature"><i className="fas fa-handshake"></i></div>
          <div className="floating-icon-feature"><i className="fas fa-star"></i></div>
          <div className="floating-icon-feature"><i className="fas fa-users"></i></div>
          <div className="floating-icon-feature"><i className="fas fa-lightbulb"></i></div>
          <div className="floating-icon-feature"><i className="fas fa-rocket"></i></div>
        </div>
        <h2>Why Choose Student Research Hub?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3><span><i className="fas fa-graduation-cap"></i></span> Free Mentorship</h3>
            <p>Connect with experienced professors from top Uzbek universities who guide your research journey at no cost</p>
          </div>
          <div className="feature-card">
            <h3><span><i className="fas fa-handshake"></i></span> Real Collaboration</h3>
            <p>Work directly with mentors on your research papers, getting valuable feedback and co-authorship opportunities</p>
          </div>
          <div className="feature-card">
            <h3><span><i className="fas fa-star"></i></span> Career Building</h3>
            <p>Build your academic portfolio with published research that strengthens university applications and career prospects</p>
          </div>
          <div className="feature-card">
            <h3><span><i className="fas fa-users"></i></span> Academic Network</h3>
            <p>Join a community of motivated students and professors dedicated to advancing research in Uzbekistan</p>
          </div>
        </div>
      </section>

      <section className="categories-preview">
        <div className="floating-icons-categories">
          <div className="floating-icon-category"><i className="fas fa-brain"></i></div>
          <div className="floating-icon-category"><i className="fas fa-briefcase"></i></div>
          <div className="floating-icon-category"><i className="fas fa-microscope"></i></div>
          <div className="floating-icon-category"><i className="fas fa-heartbeat"></i></div>
          <div className="floating-icon-category"><i className="fas fa-globe"></i></div>
          <div className="floating-icon-category"><i className="fas fa-leaf"></i></div>
        </div>
        <h2>Popular Categories</h2>
        <div className="categories-grid">
          {mockCategories.map(category => (
            <Link key={category.id} to={`/categories/${category.id}`} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay"></div>
              </div>
              <div className="category-content">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span className="paper-count">{category.paperCount} papers</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="recent-papers">
        <div className="floating-icons-papers">
          <div className="floating-icon-paper"><i className="fas fa-file-alt"></i></div>
          <div className="floating-icon-paper"><i className="fas fa-quote-left"></i></div>
          <div className="floating-icon-paper"><i className="fas fa-chart-line"></i></div>
          <div className="floating-icon-paper"><i className="fas fa-download"></i></div>
          <div className="floating-icon-paper"><i className="fas fa-eye"></i></div>
          <div className="floating-icon-paper"><i className="fas fa-bookmark"></i></div>
        </div>
        <h2>Recent Publications</h2>
        <div className="papers-grid">
          {mockPapers.map(paper => (
            <div key={paper.id} className="paper-card">
              <h3>{paper.title}</h3>
              <p className="paper-abstract">{paper.abstract}</p>
              <div className="paper-meta">
                <span className="author">{paper.author.name}</span>
                <span className="category">{paper.category}</span>
                <span className="date">{new Date(paper.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="paper-stats">
                <span>👁 {paper.views}</span>
                <span>⬇ {paper.downloads}</span>
              </div>
              <Link to={`/research/${paper.id}`} className="btn">Read More</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
