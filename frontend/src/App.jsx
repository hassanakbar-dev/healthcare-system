import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Timetable from './pages/Timetable';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Booking from './pages/Booking';
import PatientDashboard from './pages/PatientDashboard';
import DepartmentDetail from './pages/DepartmentDetail';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:id" element={<DepartmentDetail />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;