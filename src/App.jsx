import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Guidelines from './pages/Guidelines'
import TermsOfService from './pages/TermsOfService'
import SpecifiedCommercialTransactions from './pages/SpecifiedCommercialTransactions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/commercial" element={<SpecifiedCommercialTransactions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

