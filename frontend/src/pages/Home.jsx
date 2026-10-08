import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, FileText, Code, Users, Activity, BarChart, FileCheck, Globe, DollarSign, Star, HeartPulse, Brain, Bone, Baby, Syringe, Stethoscope, Eye, Phone, PlayCircle, Mail, Plus, Minus, Smartphone, Check, Quote, Play, Calendar, Clock } from 'lucide-react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      
      {/* Custom Animations matching Fluxacare */}
      <style>{`
        @keyframes slideUpImage {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0%); opacity: 1; }
        }
        @keyframes typing {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }
        @keyframes popIn {
          0% { transform: scale(0.8) translateY(20px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes slideRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .anim-slide-up { animation: slideUpImage 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .anim-typing-1 { animation: typing 1.2s steps(15, end) forwards; }
        .anim-typing-2 { clip-path: inset(0 100% 0 0); animation: typing 1.2s steps(15, end) 1.2s forwards; }
        .anim-pop-in-1 { animation: popIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards; opacity: 0; }
        .anim-pop-in-2 { animation: popIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards; opacity: 0; }
        .anim-pop-in-3 { animation: popIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.0s forwards; opacity: 0; }
        .anim-fade-in-up { animation: popIn 1s cubic-bezier(0.22, 1, 0.36, 1) 1.2s forwards; opacity: 0; }
        .anim-float-1 { animation: floatUpDown 4s ease-in-out infinite; }
        .anim-float-2 { animation: floatUpDown 5s ease-in-out infinite 1s; }
        .anim-float-3 { animation: floatUpDown 4.5s ease-in-out infinite 0.5s; }
        
        .ticker-track { display: flex; width: max-content; animation: ticker 25s linear infinite; }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#FCFDFD] pt-[130px] md:pt-[170px] pb-10 flex flex-col items-center text-center">
        <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center">
          
          <h1 className="text-[40px] md:text-[72px] lg:text-[80px] font-black text-[#1A1A1A] leading-[1.05] mb-6 tracking-[-0.03em]">
            Complete Healthcare<br/>
            for <span className="text-[#7F74F8]">Every Need.</span>
          </h1>
          
          <p className="text-[#595959] text-[15px] md:text-[18px] font-medium max-w-3xl mx-auto mb-14 leading-[1.6]">
            Expert medical care designed to keep you and your family healthy,<br className="hidden md:block"/> happy, and safe.
          </p>

          <div className="w-full rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative bg-gradient-to-b from-[#F0F5F9] to-[#E3EAF2] flex justify-center pt-10 md:pt-16 border border-white/80 transition-all duration-700 ease-out hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)]">
            <img 
              src="https://health-website-static.vercel.app/assets/pngwing.com.png" 
              alt="Professional Doctor" 
              className="w-full h-auto max-h-[450px] md:max-h-[600px] lg:max-h-[700px] object-contain object-bottom drop-shadow-2xl transform hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>

        </div>
      </section>


      {/* 4. OVERVIEW CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] mb-6">Comprehensive <span className="text-[#352F75]">Healthcare Services</span> in the USA</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify mb-6">NovaCare provides state-of-the-art medical solutions to assist patients with rapid recovery. Through advanced clinical practices and modern healthcare facilities, we accurately diagnose, treat, and cure a vast array of medical conditions.</p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">Beyond general checkups, our hospital is equipped with cutting-edge surgical units and intensive care facilities. We prioritize patient comfort and provide 24/7 support to ensure that everyone receives the care they deserve when they need it most. Core components of our hospital include:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Stethoscope size={24}/>, title: "Primary Care & Checkups", desc: "Our expert general practitioners offer complete routine checkups, preventative care, and health management for all ages." },
              { icon: <Activity size={24}/>, title: "Specialized Surgery", desc: "Our world-renowned surgeons perform minimally invasive and complex procedures with extremely high success rates." },
              { icon: <Shield size={24}/>, title: "Diagnostic Imaging", desc: "Equipped with MRI, CT, and advanced radiology units to instantly and accurately diagnose internal medical issues." },
              { icon: <HeartPulse size={24}/>, title: "Emergency Services", desc: "Our trauma center and emergency room are open 24/7, ready to handle severe and life-threatening conditions immediately." }
            ].map((card, i) => (
              <div key={i} className="group bg-white rounded-md p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center text-center cursor-pointer hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(54,45,125,0.15)] transition-all duration-300">
                <div className="bg-[#352F75] w-14 h-14 rounded flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-[17px] font-extrabold text-[#111111] mb-4">{card.title}</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed flex-grow text-justify">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEDICAL CLAIMS SECTION -> ADVANCED TREATMENTS SECTION */}
      <section className="bg-white py-20 px-6 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-[#352F75] text-3xl font-bold mb-2">Advanced Medical Treatments.</h2>
            <h3 className="text-gray-700 text-2xl font-semibold">We provide world-class healthcare for rapid recovery!</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative flex justify-center w-full">
              <div className="relative z-10 w-full flex justify-center lg:justify-start">
                <img alt="Medical Professionals" className="w-full max-w-[600px] xl:max-w-[700px] h-[500px] object-cover rounded-3xl shadow-xl" src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"/>
              </div>
            </div>
            <div className="relative bg-[#352F75] rounded-3xl p-2 shadow-2xl max-w-lg mx-auto lg:mx-0">
              <div className="border border-[rgba(255,255,255,0.2)] rounded-2xl p-8 sm:p-10 h-full relative bg-[#352F75]">
                <div className="absolute top-0 right-8 w-12 h-2.5 bg-[rgba(255,255,255,0.2)] rounded-b-lg"></div>
                <div className="space-y-8">
                  {[
                    { title: "State-of-the-art Facilities", desc: "Our hospitals are equipped with the latest modern medical tech." },
                    { title: "Expert Medical Team", desc: "Globally trained doctors and certified nursing staff." },
                    { title: "24/7 Patient Care", desc: "Round-the-clock monitoring and dedicated ICU wards." },
                    { title: "Comprehensive Diagnostics", desc: "In-house laboratories for instant and accurate test results." }
                  ].map((feat, i) => (
                    <div key={i}>
                      <h4 className="text-white text-sm sm:text-base font-bold uppercase tracking-wide mb-2">{feat.title}</h4>
                      <p className="text-gray-300 text-[15px] leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                  <div className="pt-4">
                    <Link to="/departments" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#352F75] font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all hover:-translate-y-1 w-full sm:w-auto">
                      Explore Departments
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-16">
            <div>
              <h3 className="text-[#352F75] text-lg font-bold mb-4">The hospital that genuinely cares about your health</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed text-justify mb-4">Managing illness poses difficulties for patients pursuing rapid recovery. But take heart - our dedicated medical staff eases the way. We optimize each treatment phase, armed with clinical knowledge and zeal for first-class patient care.</p>
              <p className="text-gray-600 text-[14px] leading-relaxed text-justify">We utilize cloud tech to keep your electronic health records safe and accessible instantly to our doctors. Plus, our expert triage team ensures every patient receives immediate attention upon arrival.</p>
            </div>
            <div>
              <h3 className="text-[#352F75] text-lg font-bold mb-4">When "good enough" isn't enough, you need a specialized hospital.</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed text-justify mb-4">As a leading healthcare provider, our hospital wrings out every inefficiency to provide 24/7 seamless oversight. We're experts in complex surgeries, chronic illness management, and pediatric care. We know the human body inside and out.</p>
              <p className="text-gray-600 text-[14px] leading-relaxed text-justify mb-6">We work hand in glove with insurance providers to make sure your treatments are covered. NovaCare Hospital makes your health and recovery happen, period!</p>
              <Link to="/timetable" className="text-[#0ea5e9] hover:text-[#352F75] text-[14px] underline underline-offset-4 font-semibold transition-colors">
                Ok.. I am interested, show me the Doctors Timetable →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUST YOUR BILLING -> TRUST YOUR HEALTH SECTION */}
      <section className="bg-[#f8f9fa] py-20 px-6 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[#111111] text-3xl font-bold mb-6 leading-tight">Trust Your Health To The Hospital That Ranks<br/><span className="text-[#0284C7]">"The Best Healthcare Provider in USA"</span></h2>
            <p className="text-gray-700 text-[15px] leading-relaxed max-w-3xl mx-auto">
              With a 4.9-star Patient Satisfaction rating from more than 10,000 reviews, and an A+ accreditation from the Joint Commission, NovaCare is widely recognized as one of the best medical facilities in the United States.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {/* Box 1 */}
            <div className="bg-white rounded-2xl p-10 flex flex-col justify-between shadow-xl border-t-[6px] border-[#0EA5E9] relative overflow-hidden h-[300px] hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <h3 className="text-[#0EA5E9] text-3xl font-extrabold mb-4 relative z-10 tracking-tight">Almost 99%</h3>
              <div className="mt-auto relative z-10">
                <p className="text-slate-800 text-base font-bold w-1/2 group-hover:text-[#0EA5E9] transition-colors">Patient<br/>Satisfaction <span className="block text-xs text-gray-500 font-normal mt-1">(Q4 2023 Avg)</span></p>
              </div>
              <div className="absolute right-4 bottom-4 opacity-100 group-hover:scale-110 transition-all duration-300">
                <div className="relative w-36 h-36">
                  <div className="absolute inset-0 rounded-full border-[3px] border-[#0EA5E9]/10 scale-110"></div>
                  <div className="absolute inset-2 rounded-full border-[3px] border-[#0EA5E9]/30 scale-105"></div>
                  <div className="absolute inset-4 rounded-full border-[3px] border-[#0EA5E9] flex items-center justify-center bg-[#F0F9FF]">
                    <CheckCircle className="w-12 h-12 text-[#0EA5E9]" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Box 2 */}
            <div className="bg-white rounded-2xl p-10 flex flex-col justify-between shadow-xl border-t-[6px] border-[#F59E0B] relative overflow-hidden h-[300px] hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <h3 className="text-[#F59E0B] text-3xl font-extrabold mb-4 relative z-10 tracking-tight">About 97.35%</h3>
              <div className="mt-auto relative z-10">
                <p className="text-slate-800 text-base font-bold w-1/2 group-hover:text-[#F59E0B] transition-colors">Surgical<br/>Success Rate <span className="block text-xs text-gray-500 font-normal mt-1">(2023 Top Procedures)</span></p>
              </div>
              <div className="absolute right-8 bottom-8 flex items-end gap-3 h-28 opacity-100 group-hover:scale-110 transition-all duration-300 transform origin-bottom">
                <div className="w-5 bg-[#FEF3C7] rounded-t h-1/4"></div>
                <div className="w-5 bg-[#FDE68A] rounded-t h-2/4"></div>
                <div className="w-5 bg-[#FCD34D] rounded-t h-3/4"></div>
                <div className="w-5 bg-[#F59E0B] rounded-t shadow-md h-full"></div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-2xl p-10 flex flex-col justify-between shadow-xl border-t-[6px] border-[#10B981] relative overflow-hidden h-[300px] hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <h3 className="text-[#10B981] text-3xl font-extrabold mb-4 relative z-10 tracking-tight">30+ Years</h3>
              <div className="mt-auto relative z-10">
                <p className="text-slate-800 text-base font-bold w-1/2 group-hover:text-[#10B981] transition-colors">Medical<br/>Excellence <span className="block text-xs text-gray-500 font-normal mt-1">(Since 1994)</span></p>
              </div>
              <div className="absolute right-0 bottom-0 w-[65%] h-36 flex items-end opacity-100 group-hover:scale-110 transition-all duration-300 transform origin-bottom-right">
                <div className="flex items-end w-full h-full gap-1 px-4">
                  <div className="w-1/4 bg-[#D1FAE5] h-1/3 rounded-t"></div>
                  <div className="w-1/4 bg-[#D1FAE5] h-1/2 rounded-t"></div>
                  <div className="w-1/4 bg-[#D1FAE5] h-2/3 rounded-t"></div>
                  <div className="w-1/4 bg-[#10B981] opacity-20 h-full rounded-t"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DEPARTMENTS SECTION (From Mockup) */}
      <section className="bg-white w-full border-t border-gray-100">
        <div className="max-w-[1100px] mx-auto pt-16 pb-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12 relative">
            
            {/* Cardiology */}
            <div className="flex gap-5 relative">
              <div className="w-[60px] h-[60px] shrink-0 rounded-full bg-[#342D73] flex items-center justify-center text-white shadow-sm">
                <HeartPulse size={26} strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <h3 className="text-[17px] font-bold text-[#2A2B3D] mb-1">Cardiology</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">Advanced heart care and<br/>surgeries.</p>
              </div>
            </div>

            {/* Orthopedics */}
            <div className="flex gap-5 relative lg:before:content-[''] lg:before:absolute lg:before:-left-6 lg:before:top-0 lg:before:bottom-0 lg:before:w-[1px] lg:before:bg-gray-200">
              <div className="w-[60px] h-[60px] shrink-0 rounded-full bg-[#342D73] flex items-center justify-center text-white shadow-sm">
                <Bone size={26} strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <h3 className="text-[17px] font-bold text-[#2A2B3D] mb-1">Orthopedics</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">Joint replacements and<br/>sports injuries.</p>
              </div>
            </div>

            {/* Primary Care */}
            <div className="flex gap-5 relative lg:before:content-[''] lg:before:absolute lg:before:-left-6 lg:before:top-0 lg:before:bottom-0 lg:before:w-[1px] lg:before:bg-gray-200">
              <div className="w-[60px] h-[60px] shrink-0 rounded-full bg-[#342D73] flex items-center justify-center text-white shadow-sm">
                <Stethoscope size={26} strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <h3 className="text-[17px] font-bold text-[#2A2B3D] mb-1">Primary Care</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">Routine checkups and<br/>health screenings.</p>
              </div>
            </div>

            {/* Neurology */}
            <div className="flex gap-5 relative">
              <div className="w-[60px] h-[60px] shrink-0 rounded-full bg-[#342D73] flex items-center justify-center text-white shadow-sm">
                <Brain size={26} strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <h3 className="text-[17px] font-bold text-[#2A2B3D] mb-1">Neurology</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">Expert care for the nervous<br/>system.</p>
              </div>
            </div>

            {/* Pediatrics */}
            <div className="flex gap-5 relative lg:before:content-[''] lg:before:absolute lg:before:-left-6 lg:before:top-0 lg:before:bottom-0 lg:before:w-[1px] lg:before:bg-gray-200">
              <div className="w-[60px] h-[60px] shrink-0 rounded-full bg-[#342D73] flex items-center justify-center text-white shadow-sm">
                <Baby size={26} strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <h3 className="text-[17px] font-bold text-[#2A2B3D] mb-1">Pediatrics</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">Gentle care for infants and<br/>children.</p>
              </div>
            </div>

            {/* Ophthalmology */}
            <div className="flex gap-5 relative lg:before:content-[''] lg:before:absolute lg:before:-left-6 lg:before:top-0 lg:before:bottom-0 lg:before:w-[1px] lg:before:bg-gray-200">
              <div className="w-[60px] h-[60px] shrink-0 rounded-full bg-[#342D73] flex items-center justify-center text-white shadow-sm">
                <Eye size={26} strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <h3 className="text-[17px] font-bold text-[#2A2B3D] mb-1">Ophthalmology</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">Vision correction and eye<br/>exams.</p>
              </div>
            </div>

          </div>
        </div>


        {/* 8. TESTIMONIALS SECTION (NEW) */}
        <div className="bg-[#F8F9FA] py-24 w-full border-t border-gray-100 mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-[#352F75] text-3xl md:text-4xl font-extrabold mb-4">Patient Success Stories</h2>
              <p className="text-gray-600 text-lg">Hear directly from those who have experienced our world-class care.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Robert Fox", treatment: "Heart Bypass Surgery", text: "The cardiology team at NovaCare saved my life. The level of care, the modern facilities, and the constant support from the nursing staff was unbelievable. I felt safe every second." },
                { name: "Eleanor Pena", treatment: "Knee Replacement", text: "After years of pain, I finally got my knee replaced here. The physical therapy team had me walking the next day! I can't thank Dr. Hull enough for giving me my mobility back." },
                { name: "Guy Hawkins", treatment: "Pediatric Care", text: "When my son was born prematurely, the NICU team was our anchor. They treated him like their own. Today he is a healthy, happy toddler, all thanks to the brilliant pediatricians here." }
              ].map((t, i) => (
                <div key={i} className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 relative hover:-translate-y-2 transition-transform duration-300">
                  <Quote size={40} className="text-[#0EA5E9] opacity-20 absolute top-8 right-8" />
                  <div className="flex gap-1 text-[#F59E0B] mb-6">
                    {[...Array(5)].map((_, idx) => <Star key={idx} fill="currentColor" size={20} />)}
                  </div>
                  <p className="text-gray-700 text-[15px] italic leading-relaxed mb-8">"{t.text}"</p>
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto">
                     <div className="w-12 h-12 rounded-full bg-[#E0E7FF] flex items-center justify-center text-[#3730A3] font-bold text-xl">{t.name[0]}</div>
                     <div>
                       <h4 className="font-bold text-[#111111]">{t.name}</h4>
                       <p className="text-[#64748B] text-xs font-semibold uppercase tracking-wider">{t.treatment}</p>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 9. HEALTH PACKAGES & PRICING (NEW) */}
        <div className="py-24 bg-white w-full">
          <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-16">
                <h2 className="text-[#111111] text-3xl md:text-4xl font-extrabold mb-4">Comprehensive Health Packages</h2>
                <p className="text-gray-600 text-lg">Preventative care is the best medicine. Choose a screening package that fits your needs.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Basic */}
                <div className="bg-white rounded-[2rem] p-10 border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                   <h3 className="text-2xl font-bold text-[#111111] mb-2">Basic Wellness</h3>
                   <p className="text-gray-500 mb-6">Essential annual checkup for healthy adults.</p>
                   <div className="mb-8"><span className="text-5xl font-black text-[#352F75]">$199</span></div>
                   <ul className="space-y-4 mb-10">
                     {['Complete Blood Count (CBC)', 'Basic Metabolic Panel', 'Blood Pressure Check', 'Physician Consultation'].map((feat, i) => (
                       <li key={i} className="flex items-center gap-3 text-gray-700 font-medium"><Check size={20} className="text-[#10B981]"/> {feat}</li>
                     ))}
                   </ul>
                   <button className="w-full bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] font-bold py-4 rounded-xl transition-colors">Book Basic</button>
                </div>
                
                {/* Premium */}
                <div className="bg-[#352F75] rounded-[2.5rem] p-12 border border-[#4338CA] shadow-2xl relative transform md:-translate-y-4">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0EA5E9] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-md">Most Popular</div>
                   <h3 className="text-2xl font-bold text-white mb-2">Executive Checkup</h3>
                   <p className="text-[#A5B4FC] mb-6">Comprehensive screening for total peace of mind.</p>
                   <div className="mb-8"><span className="text-5xl font-black text-white">$499</span></div>
                   <ul className="space-y-4 mb-10">
                     {['Everything in Basic', 'Full Lipid Panel & HbA1c', 'ECG & Chest X-Ray', 'Thyroid Function Test', 'Dietitian Consultation'].map((feat, i) => (
                       <li key={i} className="flex items-center gap-3 text-white font-medium"><Check size={20} className="text-[#38BDF8]"/> {feat}</li>
                     ))}
                   </ul>
                   <button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-4 rounded-xl transition-colors shadow-lg">Book Executive</button>
                </div>

                {/* Senior */}
                <div className="bg-white rounded-[2rem] p-10 border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                   <h3 className="text-2xl font-bold text-[#111111] mb-2">Senior Care</h3>
                   <p className="text-gray-500 mb-6">Tailored diagnostics for patients 60+.</p>
                   <div className="mb-8"><span className="text-5xl font-black text-[#352F75]">$349</span></div>
                   <ul className="space-y-4 mb-10">
                     {['Everything in Basic', 'Bone Density Scan', 'Vision & Hearing Test', 'Cardiac Stress Test'].map((feat, i) => (
                       <li key={i} className="flex items-center gap-3 text-gray-700 font-medium"><Check size={20} className="text-[#10B981]"/> {feat}</li>
                     ))}
                   </ul>
                   <button className="w-full bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] font-bold py-4 rounded-xl transition-colors">Book Senior</button>
                </div>
             </div>
          </div>
        </div>

        {/* 10. MOBILE APP PROMO (NEW) */}
        <div className="bg-[#EFF6FF] w-full py-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#DBEAFE] rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E0E7FF] rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="relative flex justify-center">
                 <div className="w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-[12px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
                    <div className="flex-1 bg-white p-6 pt-12">
                       <div className="flex justify-between items-center mb-8">
                         <div>
                           <p className="text-xs text-gray-500 font-bold">Good Morning,</p>
                           <h4 className="text-lg font-black text-[#352F75]">Amanda Richards</h4>
                         </div>
                         <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">AR</div>
                       </div>
                       <div className="bg-[#352F75] rounded-2xl p-5 text-white mb-6 shadow-lg">
                          <p className="text-sm font-semibold opacity-80 mb-1">Upcoming Appointment</p>
                          <h4 className="font-bold text-lg mb-4">Dr. Sarah Jenkins</h4>
                          <div className="flex justify-between text-sm">
                             <span className="flex gap-1 items-center"><Calendar size={14}/> Tomorrow</span>
                             <span className="flex gap-1 items-center"><Clock size={14}/> 10:00 AM</span>
                          </div>
                       </div>
                       <h4 className="font-bold text-gray-800 mb-4">Quick Actions</h4>
                       <div className="grid grid-cols-2 gap-4">
                         <div className="bg-rose-50 rounded-xl p-4 text-center">
                            <Stethoscope size={24} className="text-rose-500 mx-auto mb-2"/>
                            <span className="text-xs font-bold text-rose-700">Find Doctor</span>
                         </div>
                         <div className="bg-blue-50 rounded-xl p-4 text-center">
                            <FileText size={24} className="text-blue-500 mx-auto mb-2"/>
                            <span className="text-xs font-bold text-blue-700">Lab Results</span>
                         </div>
                         <div className="bg-emerald-50 rounded-xl p-4 text-center">
                            <Phone size={24} className="text-emerald-500 mx-auto mb-2"/>
                            <span className="text-xs font-bold text-emerald-700">Telehealth</span>
                         </div>
                         <div className="bg-purple-50 rounded-xl p-4 text-center">
                            <Activity size={24} className="text-purple-500 mx-auto mb-2"/>
                            <span className="text-xs font-bold text-purple-700">Vitals</span>
                         </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div>
                 <h2 className="text-4xl md:text-5xl font-black text-[#111111] mb-6 leading-tight">Healthcare in the Palm of Your Hand</h2>
                 <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">Download the NovaCare app to seamlessly book appointments, view your medical records in real-time, message your doctor directly, and request prescription refills from anywhere.</p>
                 <ul className="space-y-5 mb-10">
                   {['Secure 256-bit encryption for medical data', 'Instant push notifications for lab results', 'One-tap emergency SOS feature'].map((f, i) => (
                     <li key={i} className="flex items-center gap-4 text-[#352F75] font-bold text-lg"><CheckCircle className="text-[#0EA5E9]" size={28}/> {f}</li>
                   ))}
                 </ul>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:bg-slate-800 transition">
                      <Smartphone size={24} /> App Store
                    </button>
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:bg-slate-800 transition">
                      <Play size={24} /> Google Play
                    </button>
                 </div>
              </div>
           </div>
        </div>

        {/* 11. FAQ SECTION (NEW) */}
        <div className="py-24 bg-white max-w-4xl mx-auto px-6 w-full">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#111111] mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">Quick answers to help you navigate your healthcare journey.</p>
           </div>
           <div className="space-y-4">
              {[
                { q: "Do I need a referral to see a specialist?", a: "For most HMO plans, yes, you will need a referral from your primary care physician. For PPO plans, you can typically book directly with a specialist." },
                { q: "What should I bring to my first appointment?", a: "Please bring a valid photo ID, your current insurance card, a list of current medications, and any previous medical records relevant to your visit." },
                { q: "How can I pay my medical bill online?", a: "You can securely pay your bill through the NovaCare Patient Portal using a credit card or bank transfer. We also offer flexible payment plans." },
                { q: "Are visitors allowed in the ICU?", a: "Yes, but visiting hours are strictly limited to 10:00 AM - 12:00 PM and 4:00 PM - 6:00 PM to ensure patients receive adequate rest." }
              ].map((faq, i) => (
                 <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors text-left">
                       <span className="font-bold text-lg text-[#352F75]">{faq.q}</span>
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openFaq === i ? 'bg-[#352F75] text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                          {openFaq === i ? <Minus size={18}/> : <Plus size={18}/>}
                       </div>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-gray-50`}>
                       <div className="p-6 pt-0 text-gray-600 border-t border-gray-200 mt-2">
                          {faq.a}
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Urgent Care Banner */}
        <div className="bg-[#F8F9FA] border-y border-[#E5E7EB] w-full mt-4">
          <div className="max-w-[1100px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-[20px] font-bold text-[#111111] mb-1.5 uppercase tracking-wide">Need Urgent Care?</h3>
              <p className="text-[#64748B] text-[16px] font-medium">Our emergency department is open 24/7 for you.</p>
            </div>
            <button className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold py-3.5 px-8 rounded-lg transition-colors whitespace-nowrap shadow-sm hover:shadow-md">
              View Locations
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;