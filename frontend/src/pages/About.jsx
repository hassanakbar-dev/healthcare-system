import React from 'react';
import { Activity, Users, Award, ShieldCheck, Heart, Star, Target, CheckCircle, Clock, Globe, Quote, PlayCircle, BookOpen, Fingerprint, Anchor } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 pb-32 font-sans bg-slate-50 selection:bg-indigo-100">
      
      {/* 1. Hero Section */}
      <div className="relative bg-indigo-900 text-white overflow-hidden rounded-b-[5rem] shadow-2xl mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 opacity-90 z-0"></div>
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-20 w-[30rem] h-[30rem] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-40 text-center">
          <span className="inline-block py-2 px-6 rounded-full bg-indigo-800/60 text-indigo-200 font-extrabold tracking-widest uppercase text-sm mb-8 border border-indigo-500/30 backdrop-blur-sm shadow-sm">
            Discover NovaCare
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-10 leading-tight tracking-tight drop-shadow-lg">
            Pioneering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Future</span> of Healthcare
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed max-w-4xl mx-auto font-light mb-14 opacity-90">
            NovaCare combines top-tier medical expertise with cutting-edge technology to deliver personalized, accessible, and compassionate care to every patient. We believe in healing with humanity.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-white text-indigo-900 px-10 py-5 rounded-full font-black hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-900/50 text-lg hover:scale-105">Explore History</button>
            <button className="bg-indigo-800/50 border-2 border-indigo-500/50 text-white px-10 py-5 rounded-full font-bold hover:bg-indigo-800 transition-all backdrop-blur-md flex items-center gap-3 text-lg">
              <PlayCircle size={24} /> Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* 2. Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-36 relative z-20 mb-32">
        <div className="bg-white/95 backdrop-blur-2xl rounded-[3.5rem] shadow-2xl p-10 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-2 border-white/50">
          <div className="p-6 rounded-3xl hover:bg-indigo-50/80 transition-colors cursor-pointer">
            <h3 className="text-5xl md:text-7xl font-black text-indigo-600 mb-3 drop-shadow-sm">15+</h3>
            <p className="text-slate-500 font-extrabold uppercase tracking-widest text-sm md:text-base">Years of Excellence</p>
          </div>
          <div className="p-6 rounded-3xl hover:bg-indigo-50/80 transition-colors cursor-pointer">
            <h3 className="text-5xl md:text-7xl font-black text-indigo-600 mb-3 drop-shadow-sm">50k</h3>
            <p className="text-slate-500 font-extrabold uppercase tracking-widest text-sm md:text-base">Happy Patients</p>
          </div>
          <div className="p-6 rounded-3xl hover:bg-indigo-50/80 transition-colors cursor-pointer">
            <h3 className="text-5xl md:text-7xl font-black text-indigo-600 mb-3 drop-shadow-sm">120</h3>
            <p className="text-slate-500 font-extrabold uppercase tracking-widest text-sm md:text-base">Expert Doctors</p>
          </div>
          <div className="p-6 rounded-3xl hover:bg-indigo-50/80 transition-colors cursor-pointer">
            <h3 className="text-5xl md:text-7xl font-black text-indigo-600 mb-3 drop-shadow-sm">24/7</h3>
            <p className="text-slate-500 font-extrabold uppercase tracking-widest text-sm md:text-base">Emergency Care</p>
          </div>
        </div>
      </div>

      {/* 3. Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 mb-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl group h-[600px]">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80" alt="Hospital Building" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-indigo-950 to-transparent">
             <div className="bg-white/20 backdrop-blur-xl rounded-[2rem] p-8 border border-white/20 text-white shadow-2xl">
                <p className="font-black text-3xl mb-3">Founded in 2011</p>
                <p className="text-indigo-100 text-lg font-medium">Started as a small clinic, now a leading multi-specialty hospital setting global standards.</p>
             </div>
          </div>
        </div>
        <div>
          <span className="text-indigo-600 font-extrabold tracking-widest uppercase text-sm mb-6 block">Our Story</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">A Legacy of Care and Compassion</h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-8 font-light">
            NovaCare was founded with a singular vision: to make world-class healthcare accessible to everyone. Over the last decade, we have expanded our facilities, brought in the brightest medical minds, and integrated next-generation technology to redefine the patient experience.
          </p>
          <p className="text-slate-600 text-xl leading-relaxed mb-12 font-light">
            From our humble beginnings to our current state-of-the-art campus, our core philosophy remains unchanged—putting the patient first in everything we do.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform">
               <Globe className="text-indigo-600 mb-4" size={40} />
               <h4 className="font-black text-slate-900 text-xl">Global Standards</h4>
               <p className="text-slate-500 text-base mt-3 leading-relaxed">JCI Accredited facilities ensuring international quality.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform">
               <Clock className="text-indigo-600 mb-4" size={40} />
               <h4 className="font-black text-slate-900 text-xl">Rapid Response</h4>
               <p className="text-slate-500 text-base mt-3 leading-relaxed">Pioneering emergency protocols that save lives daily.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. & 5. Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 mb-40 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-16 rounded-[4rem] shadow-2xl border border-slate-100 hover:shadow-indigo-200/50 transition-shadow duration-500 group">
          <div className="w-24 h-24 bg-indigo-50 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 transition-colors duration-500 shadow-inner">
            <Target size={48} />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-6">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed text-xl mb-10 font-light">
            To provide comprehensive, patient-centered healthcare driven by innovation and powered by modern technology. We aim to integrate smart patient dashboards and advanced diagnostics to make health management seamless, transparent, and stress-free.
          </p>
          <ul className="space-y-5">
            {['Patient-first approach in every decision', 'Adopting advanced medical technology', 'Maintaining transparent and fair pricing', 'Fostering holistic well-being for the community'].map((item, i) => (
              <li key={i} className="flex items-start text-slate-700 font-bold text-lg">
                <CheckCircle size={28} className="text-emerald-500 mr-5 flex-shrink-0" /> <span className="pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-indigo-900 text-white p-16 rounded-[4rem] shadow-2xl transition-shadow duration-500 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="relative z-10">
            <div className="w-24 h-24 bg-indigo-800 rounded-[2rem] flex items-center justify-center mb-10 text-indigo-200 border border-indigo-600 shadow-inner">
              <ShieldCheck size={48} />
            </div>
            <h2 className="text-4xl font-black mb-6">Our Vision</h2>
            <p className="text-indigo-200 leading-relaxed text-xl mb-10 font-light">
              To be the leading unified healthcare gateway where patients, doctors, and administration connect flawlessly. We envision a future where secure digital records and conversational AI assistants empower individuals to take complete control of their health destiny.
            </p>
            <ul className="space-y-5">
              {['Global health leadership and advocacy', 'Pioneering AI-driven predictive diagnostics', 'Striving for zero wait times across departments', 'Building a sustainable, eco-friendly hospital'].map((item, i) => (
                <li key={i} className="flex items-start text-indigo-100 font-bold text-lg">
                  <CheckCircle size={28} className="text-blue-400 mr-5 flex-shrink-0" /> <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 6. Core Values */}
      <div className="bg-slate-900 py-40 px-4 text-white relative overflow-hidden mb-40 rounded-[4rem] max-w-[95%] mx-auto shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="text-indigo-400 font-black tracking-widest uppercase text-sm mb-6 block">Our Principles</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8">Our Core Values</h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-xl md:text-2xl font-light">The foundational pillars that guide our medical practice and shape our everyday decisions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Heart size={48}/>, title: "Compassion", desc: "We treat every patient like family, providing care with empathy, kindness, and deep respect for their dignity." },
              { icon: <Award size={48}/>, title: "Excellence", desc: "We strive for the absolute highest standards in medical care, clinical outcomes, and professional conduct." },
              { icon: <Users size={48}/>, title: "Collaboration", desc: "Our multidisciplinary teams of specialists work together seamlessly to provide comprehensive, unified care." }
            ].map((val, i) => (
              <div key={i} className="bg-slate-800/50 p-12 rounded-[3rem] border border-slate-700 hover:bg-slate-800 transition-colors backdrop-blur-xl hover:-translate-y-3 transform duration-500 shadow-2xl">
                <div className="text-indigo-400 mb-10 bg-slate-900/80 w-24 h-24 flex items-center justify-center rounded-[2rem] shadow-inner">{val.icon}</div>
                <h3 className="text-3xl font-black mb-5">{val.title}</h3>
                <p className="text-slate-400 leading-relaxed text-xl font-light">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. Leadership Team */}
      <div className="bg-white py-32 px-4 mb-32 rounded-[4rem] shadow-xl border border-slate-100 max-w-[95%] mx-auto">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-indigo-600 font-black tracking-widest uppercase text-sm mb-6 block">Leadership</span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-24">Meet Our Medical Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Dr. Sarah Jenkins", role: "Chief of Cardiology", desc: "Over 20 years of experience in cardiovascular surgery and research.", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" },
              { name: "Dr. David Hull", role: "Chief Medical Officer", desc: "Pioneer in robotic surgery and hospital administration.", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80" },
              { name: "Dr. Emily Chen", role: "Head of Pediatrics", desc: "Dedicated to advancing pediatric care and neonatal intensive treatments.", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" }
            ].map((doc, i) => (
              <div key={i} className="group cursor-pointer text-left bg-slate-50 rounded-[3rem] p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:-translate-y-3">
                <div className="overflow-hidden rounded-[2.5rem] mb-10 bg-slate-200 relative shadow-inner">
                  <div className="absolute inset-0 bg-indigo-900/30 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img src={doc.img} alt={doc.name} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 shadow-xl border border-white/50">
                     <p className="text-slate-700 text-base font-bold leading-relaxed">{doc.desc}</p>
                  </div>
                </div>
                <div className="px-4 pb-2">
                  <h3 className="text-3xl font-black text-slate-900 mb-3">{doc.name}</h3>
                  <p className="text-indigo-600 font-extrabold text-lg uppercase tracking-wide mb-6">{doc.role}</p>
                  <div className="flex gap-2 text-amber-400">
                    {[...Array(5)].map((_, idx) => <Star key={idx} fill="currentColor" size={22} />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 8. Certifications & Partners (NEW) */}
      <div className="max-w-7xl mx-auto px-4 mb-40 text-center">
         <h2 className="text-4xl font-black text-slate-900 mb-16">Accreditations & Global Partners</h2>
         <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-4 text-3xl font-black text-slate-800"><Anchor size={40}/> JCI Global</div>
            <div className="flex items-center gap-4 text-3xl font-black text-slate-800"><Fingerprint size={40}/> ISO 9001</div>
            <div className="flex items-center gap-4 text-3xl font-black text-slate-800"><BookOpen size={40}/> WHO Partner</div>
            <div className="flex items-center gap-4 text-3xl font-black text-slate-800"><ShieldCheck size={40}/> FDA Approved</div>
         </div>
      </div>

      {/* 9. Patient Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="text-center mb-24">
          <span className="text-indigo-600 font-black tracking-widest uppercase text-sm mb-6 block">Testimonials</span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900">What Our Patients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: "Amanda Richards", text: "The care I received at NovaCare was nothing short of miraculous. The cardiology team explained everything perfectly and made me feel completely at ease." },
            { name: "James Peterson", text: "The smart patient portal is a game changer. I was able to book my appointments, see my lab results, and chat with a nurse all from my phone." },
            { name: "Linda Evans", text: "I had my knee replaced here last month. The physical therapy team is top-notch and the facilities look like a 5-star hotel." }
          ].map((t, i) => (
             <div key={i} className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 relative hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
                <Quote className="text-indigo-50 absolute top-10 right-10" size={80} />
                <div className="relative z-10">
                  <div className="flex gap-1 text-amber-400 mb-8">
                    {[...Array(5)].map((_, idx) => <Star key={idx} fill="currentColor" size={24} />)}
                  </div>
                  <p className="text-slate-600 text-2xl leading-relaxed italic mb-10 font-light">"{t.text}"</p>
                  <div className="flex items-center gap-6 pt-8 border-t border-slate-100">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-black text-2xl shadow-inner">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-black text-slate-900 text-xl">{t.name}</p>
                      <p className="text-base text-slate-500 font-bold uppercase tracking-wider mt-1">Verified Patient</p>
                    </div>
                  </div>
                </div>
             </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;