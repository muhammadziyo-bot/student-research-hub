import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    field: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Registration attempt:', formData)
      setIsLoading(false)
      navigate('/login')
    }, 1500)
  }

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-card">
          <h2>Create Your Account</h2>
          <p>Join our community of student researchers</p>
          
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="institution">Institution</label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                  placeholder="Your school/university"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="field">Field of Study</label>
                <select
                  id="field"
                  name="field"
                  value={formData.field}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your field</option>
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
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                />
              </div>
            </div>
            
            <div className="terms-agreement">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link></span>
              </label>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary btn-full"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
          
          <div className="register-divider">
            <span>OR</span>
          </div>
          
          <div className="social-login">
            <button className="btn btn-social btn-google">
              Continue with Google
            </button>
            <button className="btn btn-social btn-github">
              Continue with GitHub
            </button>
          </div>
          
          <div className="login-prompt">
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
