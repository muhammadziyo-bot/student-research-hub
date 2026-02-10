import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Student Research Hub</h3>
            <p>Empowering student researchers to share their work with the world.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/categories">Categories</a></li>
              <li><a href="/submit">Submit Research</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="/categories/psychology">Psychology</a></li>
              <li><a href="/categories/business">Business</a></li>
              <li><a href="/categories/technology">Technology</a></li>
              <li><a href="/categories/medicine">Medicine</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@researchhub.com</p>
            <p>Follow us on social media</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Student Research Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
