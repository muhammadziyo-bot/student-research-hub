import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import type { ResearchPaper, User } from '../types'
import './ResearchDetail.css'

const mockAuthor: User = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.j@university.edu',
  institution: 'State University',
  field: 'Psychology',
  bio: 'I am a third-year psychology student with a passion for understanding human behavior and mental health. My research focuses on the impact of technology on adolescent development.',
  joinedAt: '2024-01-15'
}

const mockPaper: ResearchPaper = {
  id: '1',
  title: 'The Impact of Social Media on Adolescent Mental Health',
  abstract: 'This comprehensive study examines the correlation between social media usage patterns and mental health outcomes in teenagers. Through surveys and interviews with 500 adolescents aged 13-18, we found significant associations between high social media usage and increased rates of anxiety, depression, and sleep disorders. The research also explores protective factors and coping mechanisms that can mitigate negative effects.',
  content: `# Introduction

In today's digital age, social media has become an integral part of adolescent life. With platforms like Instagram, TikTok, and Snapchat dominating youth culture, understanding their impact on mental health is crucial for parents, educators, and healthcare professionals.

## Methodology

Our study employed a mixed-methods approach:

1. **Quantitative Analysis**: Surveyed 500 adolescents aged 13-18 across 10 different schools
2. **Qualitative Interviews**: Conducted in-depth interviews with 30 participants
3. **Longitudinal Tracking**: Monitored social media usage patterns over 6 months

## Key Findings

### Mental Health Correlations
- 68% of participants reporting high social media usage (4+ hours daily) showed symptoms of anxiety
- 45% reported depressive symptoms correlated with social comparison behaviors
- Sleep quality decreased by an average of 2.3 hours for heavy users

### Protective Factors
- Strong parental guidance reduced negative impacts by 40%
- Digital literacy programs showed promising results
- Mindfulness practices helped mitigate stress responses

## Discussion

The findings suggest a complex relationship between social media use and adolescent mental health. While negative correlations exist, the relationship is moderated by several factors including parental involvement, digital literacy, and individual coping strategies.

## Conclusion

Social media's impact on adolescent mental health requires a nuanced approach. Rather than blanket restrictions, we recommend balanced usage, digital education, and mental health support systems.

## References

1. Smith, J. et al. (2023). Digital Natives and Mental Health. Journal of Adolescent Psychology.
2. Johnson, M. (2023). Social Media Usage Patterns. Technology and Society Review.`,
  category: 'Psychology',
  author: mockAuthor,
  keywords: ['social media', 'mental health', 'adolescents', 'psychology', 'digital wellness'],
  publishedAt: '2024-02-01',
  views: 245,
  downloads: 89,
  status: 'published'
}

const ResearchDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [showFullContent, setShowFullContent] = useState(false)
  
  const paper = mockPaper // In real app, fetch based on id
  
  console.log('Research paper ID:', id) // Use id to avoid unused variable warning

  const handleDownload = () => {
    console.log('Downloading paper:', paper.id)
    // Simulate download
    alert('Download started! (This is a demo)')
  }

  const handleCite = () => {
    const citation = `Johnson, S. (${new Date(paper.publishedAt).getFullYear()}). ${paper.title}. Student Research Hub.`
    navigator.clipboard.writeText(citation)
    alert('Citation copied to clipboard!')
  }

  return (
    <div className="research-detail">
      <div className="research-container">
        <div className="research-header">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/categories">Categories</Link> / <Link to={`/categories/${paper.category.toLowerCase()}`}>{paper.category}</Link> / {paper.title}
          </div>
          
          <h1>{paper.title}</h1>
          
          <div className="research-meta">
            <div className="author-info">
              <Link to={`/profile/${paper.author.id}`} className="author-link">
                <strong>{paper.author.name}</strong>
              </Link>
              <span className="institution">{paper.author.institution}</span>
            </div>
            
            <div className="paper-stats">
              <span>👁 {paper.views} views</span>
              <span>⬇ {paper.downloads} downloads</span>
              <span>📅 {new Date(paper.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="research-content">
          <div className="main-content">
            <section className="abstract">
              <h2>Abstract</h2>
              <p>{paper.abstract}</p>
            </section>

            <section className="keywords">
              <h2>Keywords</h2>
              <div className="keywords-list">
                {paper.keywords.map((keyword, index) => (
                  <span key={index} className="keyword-tag">{keyword}</span>
                ))}
              </div>
            </section>

            <section className="content">
              <h2>Full Paper</h2>
              <div className="content-wrapper">
                {showFullContent ? (
                  <div className="paper-content">
                    {paper.content.split('\n').map((paragraph, index) => {
                      if (paragraph.startsWith('#')) {
                        const level = paragraph.match(/^#+/)?.[0].length || 1
                        const text = paragraph.replace(/^#+\s*/, '')
                        const headingLevel = Math.min(level + 1, 6)
                        if (headingLevel === 1) return <h1 key={index}>{text}</h1>
                        if (headingLevel === 2) return <h2 key={index}>{text}</h2>
                        if (headingLevel === 3) return <h3 key={index}>{text}</h3>
                        if (headingLevel === 4) return <h4 key={index}>{text}</h4>
                        if (headingLevel === 5) return <h5 key={index}>{text}</h5>
                        return <h6 key={index}>{text}</h6>
                      }
                      return <p key={index}>{paragraph}</p>
                    })}
                  </div>
                ) : (
                  <div className="content-preview">
                    <p>{paper.content.substring(0, 500)}...</p>
                    <button 
                      className="btn btn-link"
                      onClick={() => setShowFullContent(true)}
                    >
                      Read Full Paper
                    </button>
                  </div>
                )}
              </div>
            </section>
          </div>

          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Actions</h3>
              <div className="action-buttons">
                <button className="btn btn-primary btn-full" onClick={handleDownload}>
                  📥 Download PDF
                </button>
                <button className="btn btn-secondary btn-full" onClick={handleCite}>
                  📋 Cite This Paper
                </button>
                <button className="btn btn-outline btn-full">
                  🔗 Share
                </button>
              </div>
            </div>

            <div className="sidebar-card">
              <h3>Author Information</h3>
              <div className="author-profile">
                <h4>{paper.author.name}</h4>
                <p className="author-field">{paper.author.field}</p>
                <p className="author-institution">{paper.author.institution}</p>
                {paper.author.bio && (
                  <p className="author-bio">{paper.author.bio}</p>
                )}
                <Link to={`/profile/${paper.author.id}`} className="btn btn-outline btn-small">
                  View Profile
                </Link>
              </div>
            </div>

            <div className="sidebar-card">
              <h3>Category</h3>
              <Link to={`/categories/${paper.category.toLowerCase()}`} className="category-link">
                {paper.category}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchDetail
