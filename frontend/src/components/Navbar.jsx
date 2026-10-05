import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Search, PlusSquare } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-indigo-700 text-indigo-50 text-xs py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1"><MapPin size={14} /> 2702 Memory Lane, Chicago, IL 60605</span>
            <span className="flex items-center gap-1"><Clock size={14} /> Monday - Friday 08:00 - 20:00</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1"><Phone size={14} /> Emergency Line: 1-800-100-900</span>
            <div className="flex gap-4 border-l border-indigo-500 pl-4 font-bold tracking-wider">
              <span className="cursor-pointer hover:text-white transition">FB</span>
              <span className="cursor-pointer hover:text-white transition">TW</span>
              <span className="cursor-pointer hover:text-white transition">IG</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-4 px-4 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 text-indigo-800">
            <PlusSquare size={30} className="text-indigo-600" strokeWidth={2.5} />
            <span className="text-2xl font-extrabold tracking-tight">NovaCare</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex gap-8 text-slate-700 font-medium text-sm">
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 transition">Home</Link>
            <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
            <Link to="/departments" className="hover:text-indigo-600 transition">Departments</Link>
            <Link to="/timetable" className="hover:text-indigo-600 transition">Timetable</Link>
            <Link to="/blog" className="hover:text-indigo-600 transition">Blog</Link>
            <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
          </div>

          {/* Search Bar & Login Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center bg-slate-100 rounded-full px-4 py-2 w-48 lg:w-64">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder-slate-400"
              />
              <Search size={16} className="text-slate-400 cursor-pointer" />
            </div>
            
            <Link to="/auth" className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-indigo-700 transition shadow-md whitespace-nowrap">
              Login / Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;