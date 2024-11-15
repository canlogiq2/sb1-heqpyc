import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Licenses from './pages/dashboard/Licenses';
import Membership from './pages/dashboard/Membership';
import ActivateLicense from './pages/dashboard/ActivateLicense';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/licenses" element={<Licenses />} />
          <Route path="/dashboard/membership" element={<Membership />} />
          <Route path="/dashboard/activate" element={<ActivateLicense />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;