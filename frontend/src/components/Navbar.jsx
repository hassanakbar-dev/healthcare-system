import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, HeartPulse, Brain, Bone, Baby, Activity, Stethoscope, Eye, Thermometer, ArrowRight, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[90] w-full transition-all duration-300 font-sans mt-4 px-4">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 xl:px-8 h-[76px] bg-[#F8F9FA] rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(54,45,125,0.1)] flex items-center justify-between gap-4 xl:gap-8 relative z-20 border border-gray-100">
        
        {/* Logo */}
        <div className="flex lg:flex-1 items-center justify-start">
          <Link to="/" className="flex items-center shrink-0 gap-2.5 py-2 mr-2 lg:mr-4">
            <div className="w-9 h-9 bg-gradient-to-br from-[#352F75] to-[#4c45a7] rounded-lg flex items-center justify-center shadow-inner">
               <Activity className="text-white w-6 h-6" />
            </div>
            <span className="text-[20px] lg:text-[23px] font-black text-[#352F75] tracking-tight">NOVACARE</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 font-medium text-gray-700 text-[14px] relative shrink-0">
          
          <Link to="/" className="hover:text-[#0284C7] transition-colors py-4">Home</Link>
          <Link to="/about" className="hover:text-[#0284C7] transition-colors py-4">About Us</Link>
          
          <div className="group py-4 flex items-center gap-1 transition-colors relative">
            <Link to="/departments" className="cursor-pointer hover:text-[#0284C7] flex items-center gap-1">
              Departments <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-[100%] left-0 bg-white rounded-xl shadow-[0_15px_40px_-5px_rgba(0,0,0,0.15)] border-[1.5px] border-[#352F75] hidden group-hover:block z-50 text-left w-[900px] -ml-[250px] overflow-hidden">
              <div className="grid grid-cols-3 gap-0 p-8 pb-10">
                <div className="flex flex-col gap-8 pr-6 border-r border-gray-100">
                  <Link to="/departments/cardiology" className="flex items-start gap-4 group/item">
                    <div className="w-12 h-12 rounded-full bg-[#352F75] text-white flex items-center justify-center shrink-0"><HeartPulse size={20}/></div>
                    <div className="flex flex-col"><h4 className="text-[#333] font-bold text-[15px] mb-1 group-hover/item:text-[#352F75] transition-colors">Cardiology</h4><p className="text-gray-500 text-[13px] leading-snug">Advanced heart care and surgeries.</p></div>
                  </Link>
                  <Link to="/departments/neurology" className="flex items-start gap-4 group/item">
                    <div className="w-12 h-12 rounded-full bg-[#352F75] text-white flex items-center justify-center shrink-0"><Brain size={20}/></div>
                    <div className="flex flex-col"><h4 className="text-[#333] font-bold text-[15px] mb-1 group-hover/item:text-[#352F75] transition-colors">Neurology</h4><p className="text-gray-500 text-[13px] leading-snug">Expert care for the nervous system.</p></div>
                  </Link>
                </div>
                <div className="flex flex-col gap-8 px-6 border-r border-gray-100">
                  <Link to="/departments/orthopedics" className="flex items-start gap-4 group/item">
                    <div className="w-12 h-12 rounded-full bg-[#352F75] text-white flex items-center justify-center shrink-0"><Bone size={20}/></div>
                    <div className="flex flex-col"><h4 className="text-[#333] font-bold text-[15px] mb-1 group-hover/item:text-[#352F75] transition-colors">Orthopedics</h4><p className="text-gray-500 text-[13px] leading-snug">Joint replacements and sports injuries.</p></div>
                  </Link>
                  <Link to="/departments/pediatrics" className="flex items-start gap-4 group/item">
                    <div className="w-12 h-12 rounded-full bg-[#352F75] text-white flex items-center justify-center shrink-0"><Baby size={20}/></div>
                    <div className="flex flex-col"><h4 className="text-[#333] font-bold text-[15px] mb-1 group-hover/item:text-[#352F75] transition-colors">Pediatrics</h4><p className="text-gray-500 text-[13px] leading-snug">Gentle care for infants and children.</p></div>
                  </Link>
                </div>
                <div className="flex flex-col gap-8 px-6">
                  <Link to="/departments/primary-care" className="flex items-start gap-4 group/item">
                    <div className="w-12 h-12 rounded-full bg-[#352F75] text-white flex items-center justify-center shrink-0"><Stethoscope size={20}/></div>
                    <div className="flex flex-col"><h4 className="text-[#333] font-bold text-[15px] mb-1 group-hover/item:text-[#352F75] transition-colors">Primary Care</h4><p className="text-gray-500 text-[13px] leading-snug">Routine checkups and health screenings.</p></div>
                  </Link>
                   <Link to="/departments/ophthalmology" className="flex items-start gap-4 group/item">
                    <div className="w-12 h-12 rounded-full bg-[#352F75] text-white flex items-center justify-center shrink-0"><Eye size={20}/></div>
                    <div className="flex flex-col"><h4 className="text-[#333] font-bold text-[15px] mb-1 group-hover/item:text-[#352F75] transition-colors">Ophthalmology</h4><p className="text-gray-500 text-[13px] leading-snug">Vision correction and eye exams.</p></div>
                  </Link>
                </div>
              </div>
              <div className="bg-[#f8f9fa] px-8 py-5 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-[#111] text-[15px]">NEED URGENT CARE?</h5>
                  <p className="text-gray-500 text-[13px] mt-0.5">Our emergency department is open 24/7 for you.</p>
                </div>
                <Link to="/contact" className="bg-[#0284C7] hover:bg-[#352F75] text-white font-bold py-2.5 px-6 rounded-lg transition-colors text-[13px] shadow-sm">View Locations</Link>
              </div>
            </div>
          </div>
          
          <Link to="/timetable" className="hover:text-[#0284C7] transition-colors py-4">Timetable</Link>
          <Link to="/blog" className="hover:text-[#0284C7] transition-colors py-4">Blog</Link>
          <Link to="/contact" className="hover:text-[#0284C7] transition-colors py-4">Contact</Link>
          
        </nav>

        {/* Right Info */}
        <div className="hidden lg:flex items-center justify-end gap-4 xl:gap-5 lg:flex-1 shrink-0">
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="tel:+18000000000" className="flex items-center gap-2 text-[#352F75] font-bold hover:text-[#0284C7] transition-colors text-[14px] whitespace-nowrap ml-2">
            <Phone size={16} /> <span className="hidden xl:inline">+1 (800) 000-0000</span>
          </a>
          <Link to="/contact" className="hidden xl:flex bg-[#0284C7] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#352F75] transition-colors items-center gap-2 whitespace-nowrap">
             Talk To An Expert <ArrowRight size={16} />
          </Link>
        </div>
        
        {/* Mobile Menu */}
        <button className="lg:hidden text-gray-700 ml-auto pointer-events-auto">
          <Menu size={28} />
        </button>

      </div>
    </header>
  );
};

export default Navbar;