import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import Home from './pages/Home'
import Categories from './pages/Categories'
import ResearchDetail from './pages/ResearchDetail'
import SubmitResearch from './pages/SubmitResearch'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Mentors from './pages/Mentors'
import './App.css'

function AppContent() {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Show loader when route changes
    setIsLoading(true)
    
    // Longer delay for login/register to hide white background flash
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register'
    const loadTime = isAuthPage ? 2500 : 1500 // 2.5 seconds for auth pages, 1.5 for others
    
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, loadTime)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <PageLoader isLoading={isLoading}>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/research/:id" element={<ResearchDetail />} />
          <Route path="/submit" element={<SubmitResearch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </PageLoader>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <AppContent />
      </div>
    </Router>
  )
}

export default App
