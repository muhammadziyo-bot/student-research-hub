import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Category } from '../types'
import './Categories.css'

const mockCategories: Category[] = [
  { 
    id: '1', 
    name: 'Uzbek Studies', 
    description: 'Uzbek history, culture, language, literature, and national heritage research', 
    paperCount: 45, 
    color: '#FF6B6B',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg'
  },
  { 
    id: '2', 
    name: 'Technology & IT', 
    description: 'Computer science, programming, AI, and digital innovation for Uzbekistan\'s development', 
    paperCount: 38, 
    color: '#4ECDC4',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop&auto=format'
  },
  { 
    id: '3', 
    name: 'Medicine & Health', 
    description: 'Medical research, public health, and healthcare solutions for Central Asian communities', 
    paperCount: 62, 
    color: '#2C5282',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&auto=format'
  },
  { 
    id: '4', 
    name: 'Economics & Business', 
    description: 'Uzbek economy, entrepreneurship, business development, and market research', 
    paperCount: 29, 
    color: '#96CEB4',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop&auto=format'
  },
  { 
    id: '5', 
    name: 'Environmental Science', 
    description: 'Aral Sea, climate change, ecology, and environmental issues in Central Asia', 
    paperCount: 51, 
    color: '#FECA57',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop&auto=format'
  },
  { 
    id: '6', 
    name: 'Mathematics', 
    description: 'Mathematical research, statistics, and quantitative analysis for various fields', 
    paperCount: 33, 
    color: '#48C9B0',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop&auto=format'
  },
  { 
    id: '7', 
    name: 'Physics & Engineering', 
    description: 'Physics research, engineering solutions, and technological innovations', 
    paperCount: 27, 
    color: '#6B46C1',
    image: 'https://picsum.photos/seed/physics-engineering/400/250.jpg'
  },
  { 
    id: '8', 
    name: 'Chemistry', 
    description: 'Chemical research, materials science, and industrial applications', 
    paperCount: 31, 
    color: '#E74C3C',
    image: 'https://unsplash.com/photos/UmncJq4KPcA/download?force=true'
  },
  { 
    id: '9', 
    name: 'Biology & Agriculture', 
    description: 'Life sciences, agriculture, biodiversity, and biological research in Uzbekistan', 
    paperCount: 24, 
    color: '#1565C0',
    image: 'https://unsplash.com/photos/gKUC4TMhOiY/download?force=true'
  },
  { 
    id: '10', 
    name: 'Social Sciences', 
    description: 'Sociology, psychology, education, and social development research', 
    paperCount: 41, 
    color: '#1E7E34',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop&auto=format'
  },
  { 
    id: '11', 
    name: 'Languages & Literature', 
    description: 'Uzbek, Russian, English literature, linguistics, and translation studies', 
    paperCount: 35, 
    color: '#F39C12',
    image: 'https://unsplash.com/photos/OQSCtabGkSY/download?force=true'
  },
  ]

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'papers' | 'recent'>('name')
  const [filterBy, setFilterBy] = useState<'all' | 'popular' | 'recent'>('all')
  
  const filteredCategories = mockCategories
    .filter(category => {
      const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           category.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      if (filterBy === 'popular') {
        return matchesSearch && category.paperCount > 40
      } else if (filterBy === 'recent') {
        return matchesSearch && ['1', '3', '5', '7', '9'].includes(category.id)
      }
      return matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'papers') return b.paperCount - a.paperCount
      return 0 // recent would use actual dates in real app
    })

  return (
    <div className="categories">
      <div className="categories-header">
        <h1>Research Categories</h1>
        <p>Explore research papers across different academic fields</p>
        
        <div className="search-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search categories, descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-controls">
            <div className="filter-group">
              <label>Filter by:</label>
              <select value={filterBy} onChange={(e) => setFilterBy(e.target.value as any)} className="filter-select">
                <option value="all">All Categories</option>
                <option value="popular">Popular (40+ papers)</option>
                <option value="recent">Recently Updated</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>Sort by:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="filter-select">
                <option value="name">Name (A-Z)</option>
                <option value="papers">Most Papers</option>
                <option value="recent">Recently Updated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="categories-stats">
        <div className="stat-card">
          <h3>{mockCategories.length}</h3>
          <p>Total Categories</p>
        </div>
        <div className="stat-card">
          <h3>{mockCategories.reduce((sum, cat) => sum + cat.paperCount, 0)}</h3>
          <p>Total Papers</p>
        </div>
        <div className="stat-card">
          <h3>{mockCategories.filter(cat => cat.paperCount > 40).length}</h3>
          <p>Active Fields</p>
        </div>
      </div>

      <div className="categories-grid">
        {filteredCategories.map(category => (
          <Link key={category.id} to={`/categories/${category.id}`} className="category-card">
            <div className="category-image">
              <img 
                src={category.image} 
                alt={category.name}
                loading="lazy"
              />
              <div className="category-overlay">
                <div className="category-color" style={{ backgroundColor: category.color }}></div>
                <h3>{category.name}</h3>
              </div>
            </div>
            <div className="category-content">
              <p className="category-description">{category.description}</p>
              <div className="category-footer">
                <span className="paper-count">{category.paperCount} papers</span>
                <span className="explore-link">Explore →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="no-results">
          <h3>No categories found</h3>
          <p>Try adjusting your search terms</p>
        </div>
      )}
    </div>
  )
}

export default Categories
