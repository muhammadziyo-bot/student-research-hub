import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Student Research Hub</h1>
          </Link>
          
          <nav className="nav">
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/mentors">Find Mentors</Link></li>
              <li><Link to="/submit">Submit Research</Link></li>
            </ul>
          </nav>
          
          <div className="auth-buttons">
            <Link to="/login" className="btn btn-secondary">Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
