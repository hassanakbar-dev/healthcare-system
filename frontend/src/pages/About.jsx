import React from 'react';
import { Activity, Users, Award, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20 font-sans bg-slate-50">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-indigo-200 font-bold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Pioneering the Future of Healthcare</h1>
          <p className="text-lg text-indigo-100 leading-relaxed max-w-2xl mx-auto">
            NovaCare combines top-tier medical expertise with cutting-edge technology to deliver personalized, accessible, and compassionate care to every patient.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border border-slate-100">
          <div><h3 className="text-4xl font-black text-indigo-600">15+</h3><p className="text-slate-500 font-medium mt-2">Years of Excellence</p></div>
          <div><h3 className="text-4xl font-black text-indigo-600">50k+</h3><p className="text-slate-500 font-medium mt-2">Happy Patients</p></div>
          <div><h3 className="text-4xl font-black text-indigo-600">120+</h3><p className="text-slate-500 font-medium mt-2">Expert Doctors</p></div>
          <div><h3 className="text-4xl font-black text-indigo-600">24/7</h3><p className="text-slate-500 font-medium mt-2">Emergency Care</p></div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
          <Activity size={40} className="text-indigo-600 mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed">
            To provide comprehensive, patient-centered healthcare driven by innovation and powered by modern technology. We aim to integrate smart patient dashboards and advanced diagnostics to make health management seamless and stress-free.
          </p>
        </div>
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
          <ShieldCheck size={40} className="text-indigo-600 mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
          <p className="text-slate-600 leading-relaxed">
            To be the leading unified healthcare gateway where patients, doctors, and administration connect flawlessly. We envision a future where secure digital records and conversational AI assistants empower individuals to take control of their health.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">Meet Our Medical Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                name: "Dr. Sarah Jenkins", 
                role: "Chief of Cardiology", 
                img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80" 
              },
              { 
                name: "Dr. David Hull", 
                role: "Chief Medical Officer", 
                img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80" 
              },
              { 
                name: "Dr. Emily Chen", 
                role: "Head of Pediatrics", 
                img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80" 
              }
            ].map((doc, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-3xl mb-6 shadow-md bg-slate-200">
                  <img 
                    src={doc.img} 
                    alt={doc.name} 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{doc.name}</h3>
                <p className="text-indigo-600 font-medium">{doc.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;