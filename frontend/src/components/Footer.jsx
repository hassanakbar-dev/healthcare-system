import React from 'react';
import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';

const Facebook = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Instagram = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Linkedin = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-6 border-t border-gray-100 font-sans mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center shrink-0 gap-2.5 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-[#352F75] to-[#4c45a7] rounded-lg flex items-center justify-center shadow-inner">
                 <Activity className="text-white w-6 h-6" />
              </div>
              <span className="text-[20px] lg:text-[23px] font-black text-[#352F75] tracking-tight">NOVACARE</span>
            </Link>
            <p className="text-[#64748B] text-[14px] leading-relaxed mb-8">
              NOVACARE is a full-service modern hospital that handles every aspect of your healthcare needs with compassion and excellence.
            </p>
            
            <h5 className="text-[#352F75] font-bold text-[14px] mb-4">Subscribe to Our NewsLetter</h5>
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-[#F8F9FA] border border-transparent focus:border-[#0EA5E9] focus:bg-white rounded-xl px-4 py-3 text-[14px] outline-none transition-colors"
                required
              />
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0284C7] focus:ring-[#0284C7]" required/>
                <span className="text-[#64748B] text-[13px]">Accept GDPR Terms</span>
              </label>
              <button 
                type="submit" 
                className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold py-2.5 px-6 rounded-full w-fit mt-2 transition-colors text-[14px]"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Column 2: Departments */}
          <div>
            <h4 className="text-[#352F75] font-black text-[16px] uppercase tracking-wider mb-8">DEPARTMENTS</h4>
            <ul className="space-y-4">
              {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Primary Care'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] group-hover:bg-[#352F75] transition-colors"></span>
                  <Link to={`/departments`} className="text-[#64748B] text-[14px] hover:text-[#0EA5E9] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Patient Resources */}
          <div>
            <h4 className="text-[#352F75] font-black text-[16px] uppercase tracking-wider mb-8">PATIENT RESOURCES</h4>
            <ul className="space-y-4 mb-8">
              {['Patient Portal', 'Test Results', 'Prescription Refills', 'Telehealth'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] group-hover:bg-[#352F75] transition-colors"></span>
                  <Link to={`/patient-dashboard`} className="text-[#64748B] text-[14px] hover:text-[#0EA5E9] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
            
            {/* DMCA Badge Mimic */}
            <div className="inline-flex items-center rounded overflow-hidden shadow-sm border border-gray-200 select-none">
               <div className="bg-[#84CC16] text-white text-[10px] font-black px-2 py-1.5 tracking-widest">DMCA</div>
               <div className="bg-[#F8F9FA] text-[#64748B] text-[10px] font-black px-2 py-1.5 tracking-widest border-l border-gray-200">PROTECTED</div>
            </div>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-[#352F75] font-black text-[16px] uppercase tracking-wider mb-8">QUICK LINKS</h4>
            <ul className="space-y-4 mb-10">
              {['About Us', 'Book Appointment', 'Our Doctors', 'Contact Us', 'Blog'].map((item, i) => {
                const routes = ['/about', '/timetable', '/timetable', '/contact', '/blog'];
                return (
                  <li key={i} className="flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] group-hover:bg-[#352F75] transition-colors"></span>
                    <Link to={routes[i]} className="text-[#64748B] text-[14px] hover:text-[#0EA5E9] transition-colors">{item}</Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3">
               <a href="#" className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#64748B] hover:bg-[#0EA5E9] hover:text-white transition-colors"><Facebook size={18} fill="currentColor"/></a>
               <a href="#" className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#64748B] hover:bg-[#0EA5E9] hover:text-white transition-colors"><Twitter size={18} fill="currentColor"/></a>
               <a href="#" className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#64748B] hover:bg-[#0EA5E9] hover:text-white transition-colors"><Linkedin size={18} fill="currentColor"/></a>
               <a href="#" className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#64748B] hover:bg-[#0EA5E9] hover:text-white transition-colors"><Instagram size={18} /></a>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#64748B] text-[13px] font-medium">
            © 2026 NOVACARE. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-[#64748B] text-[13px] font-medium">
            <Link to="#" className="hover:text-[#352F75] transition-colors">Privacy Policy</Link>
            <span className="text-gray-300">|</span>
            <Link to="#" className="hover:text-[#352F75] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
