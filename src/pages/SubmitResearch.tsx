import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SubmitResearch.css'

const SubmitResearch = () => {
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    content: '',
    category: '',
    keywords: '',
    coauthors: '',
    pdfFile: null as File | null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        pdfFile: e.target.files[0]
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Research submission:', formData)
      setIsSubmitting(false)
      navigate('/')
    }, 2000)
  }

  return (
    <div className="submit-research">
      <div className="floating-emojis-submit">
        <div className="floating-emoji-submit"><i className="fas fa-dna"></i></div>
        <div className="floating-emoji-submit"><i className="fas fa-microscope"></i></div>
        <div className="floating-emoji-submit"><i className="fas fa-chart-bar"></i></div>
        <div className="floating-emoji-submit"><i className="fas fa-calculator"></i></div>
        <div className="floating-emoji-submit"><i className="fas fa-globe"></i></div>
        <div className="floating-emoji-submit"><i className="fas fa-laptop-code"></i></div>
      </div>
      <div className="submit-container">
        <div className="submit-header">
          <h1>Submit Your Research</h1>
          <p>Share your findings with our student research community</p>
        </div>

        <form onSubmit={handleSubmit} className="submit-form">
          <div className="form-section">
            <h3>Basic Information</h3>
            
            <div className="form-group">
              <label htmlFor="title">Research Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Enter your research title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                <option value="psychology">Psychology</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="medicine">Medicine</option>
                <option value="social-sciences">Social Sciences</option>
                <option value="environmental-science">Environmental Science</option>
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="biology">Biology</option>
                <option value="literature">Literature</option>
                <option value="history">History</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="keywords">Keywords *</label>
              <input
                type="text"
                id="keywords"
                name="keywords"
                value={formData.keywords}
                onChange={handleChange}
                required
                placeholder="Enter keywords separated by commas"
              />
              <small>Separate keywords with commas (e.g., machine learning, healthcare, AI)</small>
            </div>
          </div>

          <div className="form-section">
            <h3>Research Content</h3>
            
            <div className="form-group">
              <label htmlFor="abstract">Abstract *</label>
              <textarea
                id="abstract"
                name="abstract"
                value={formData.abstract}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Provide a brief summary of your research (150-300 words)"
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">Full Paper Content</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={12}
                placeholder="Paste your full research paper content here or upload a PDF file below"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pdfFile">Or Upload PDF File</label>
              <input
                type="file"
                id="pdfFile"
                name="pdfFile"
                onChange={handleFileChange}
                accept=".pdf"
                className="file-input"
              />
              <small>Accepted format: PDF (Max size: 10MB)</small>
            </div>
          </div>

          <div className="form-section">
            <h3>Collaborators</h3>
            
            <div className="form-group">
              <label htmlFor="coauthors">Co-authors (Optional)</label>
              <input
                type="text"
                id="coauthors"
                name="coauthors"
                value={formData.coauthors}
                onChange={handleChange}
                placeholder="Enter co-author names separated by commas"
              />
              <small>List all co-authors who contributed to this research</small>
            </div>
          </div>

          <div className="submit-actions">
            <button 
              type="submit" 
              className="btn btn-primary btn-large"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Research'}
            </button>
            
            <button 
              type="button" 
              className="btn btn-secondary btn-large"
              onClick={() => navigate('/')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SubmitResearch
