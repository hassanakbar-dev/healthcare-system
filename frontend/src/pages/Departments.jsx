import React from 'react';
import { HeartPulse, Brain, Bone, Activity, Syringe, ShieldCheck, Eye, Ear, Stethoscope, Baby, FlaskConical, Scissors, Microscope, Users, Phone, Shield } from 'lucide-react';

import { Link } from 'react-router-dom';

const Departments = () => {
  const depts = [
    { slug: 'cardiology', icon: <HeartPulse size={48}/>, title: "Cardiology", desc: "Advanced diagnostics, heart surgeries, and cardiovascular rehabilitation programs." },
    { slug: 'neurology', icon: <Brain size={48}/>, title: "Neurology", desc: "Comprehensive care and treatment for stroke, epilepsy, and nervous system disorders." },
    { slug: 'orthopedics', icon: <Bone size={48}/>, title: "Orthopedics", desc: "Joint replacements, sports injuries, and physical therapy for optimal health." },
    { slug: 'pediatrics', icon: <Baby size={48}/>, title: "Pediatrics", desc: "Gentle, expert care for infants, children, and adolescents focusing on developmental health." },
    { slug: 'oncology', icon: <FlaskConical size={48}/>, title: "Oncology", desc: "State-of-the-art cancer screening, targeted therapies, and compassionate oncological support." },
    { slug: 'dental-care', icon: <Activity size={48}/>, title: "Dental Care", desc: "Cosmetic dentistry, oral surgeries, and regular preventive checkups for a perfect smile." },
    { slug: 'immunology', icon: <Syringe size={48}/>, title: "Immunology", desc: "Allergy testing, vaccinations, and comprehensive auto-immune disease management." },
    { slug: 'primary-care', icon: <ShieldCheck size={48}/>, title: "Primary Care", desc: "Your first line of defense with regular health screenings, wellness plans, and checkups." },
    { slug: 'ophthalmology', icon: <Eye size={48}/>, title: "Ophthalmology", desc: "Vision correction, advanced cataract surgery, and comprehensive routine eye exams." },
    { slug: 'ent', icon: <Ear size={48}/>, title: "ENT Specialists", desc: "Expert treatment for ear infections, chronic sinus problems, and complex throat disorders." },
    { slug: 'internal-medicine', icon: <Stethoscope size={48}/>, title: "Internal Medicine", desc: "Diagnosis and long-term management of complex, chronic multi-system diseases." },
    { slug: 'general-surgery', icon: <Scissors size={48}/>, title: "General Surgery", desc: "Minimally invasive and traditional surgical procedures performed by top-tier surgeons." }
  ];

  return (
    <div className="pt-28 pb-32 px-4 min-h-screen bg-slate-50 font-sans selection:bg-indigo-100">
      
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="text-center mb-24">
          <span className="text-indigo-600 font-black tracking-widest uppercase text-sm mb-6 block">Medical Specialties</span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-tight">Centers of Excellence</h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Our specialized departments are equipped with state-of-the-art technology and staffed by globally recognized medical professionals dedicated to providing world-class care.
          </p>
        </div>

        {/* 2. Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-40">
          {depts.map((dept, index) => (
            <Link to={`/departments/${dept.slug}`} key={index} className="bg-white p-10 rounded-[3rem] shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-left group flex flex-col cursor-pointer block">
              <div className="text-indigo-600 bg-indigo-50 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500 shadow-inner">
                {dept.icon}
              </div>
              <h3 className="text-3xl font-black text-slate-800 mb-4 group-hover:text-indigo-700 transition-colors">{dept.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg flex-grow font-light">{dept.desc}</p>
              <div className="text-indigo-600 font-black flex items-center gap-2 transition-colors mt-auto text-lg uppercase tracking-wider group-hover:text-indigo-800">
                Read Details <span className="text-2xl leading-none group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* 3. Featured Department Highlight */}
        <div className="bg-indigo-900 rounded-[4rem] overflow-hidden shadow-2xl mb-40 flex flex-col lg:flex-row text-white">
          <div className="lg:w-1/2 p-16 md:p-24 flex flex-col justify-center">
            <span className="bg-indigo-800/50 text-indigo-200 px-6 py-2 rounded-full text-sm font-black tracking-widest uppercase mb-8 inline-block w-fit border border-indigo-500/30">Featured Department</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Advanced Cardiology Institute</h2>
            <p className="text-indigo-100 text-2xl mb-10 leading-relaxed font-light">
              Our flagship Cardiology Institute features the region's first fully robotic Cath Lab. We perform over 1,000 successful minimally invasive heart procedures annually.
            </p>
            <ul className="space-y-6 mb-12">
              {['24/7 Dedicated Heart Emergency Center', 'State-of-the-art ECMO support', 'Comprehensive Cardiac Rehab'].map((item, i) => (
                <li key={i} className="flex items-center text-indigo-50 font-bold text-xl">
                  <HeartPulse className="text-rose-400 mr-5" size={32} /> {item}
                </li>
              ))}
            </ul>
            <button className="bg-white text-indigo-900 px-12 py-5 rounded-full font-black w-fit hover:bg-indigo-50 transition shadow-xl text-lg hover:scale-105">Tour the Institute</button>
          </div>
          <div className="lg:w-1/2 relative min-h-[500px]">
            <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1000&q=80" alt="Cardiology Lab" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-transparent"></div>
          </div>
        </div>

        {/* 4. Patient Journey / How it works */}
        <div className="mb-40">
          <div className="text-center mb-20">
             <span className="text-indigo-600 font-black tracking-widest uppercase text-sm mb-6 block">The Process</span>
             <h2 className="text-5xl md:text-7xl font-black text-slate-900">Your Journey to Recovery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-slate-200 -translate-y-1/2 z-0 rounded-full"></div>
            
            {[
              { step: "01", title: "Consultation", desc: "Book an appointment online or walk in for an evaluation.", icon: <Users size={40}/> },
              { step: "02", title: "Diagnostics", desc: "Undergo necessary tests in our high-tech labs.", icon: <Microscope size={40}/> },
              { step: "03", title: "Treatment", desc: "Receive personalized care from our specialized teams.", icon: <Activity size={40}/> },
              { step: "04", title: "Recovery", desc: "Follow-up care and rehabilitation to ensure full health.", icon: <HeartPulse size={40}/> }
            ].map((s, i) => (
               <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 relative z-10 text-center hover:-translate-y-3 transition-transform duration-500">
                  <div className="w-24 h-24 bg-indigo-600 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-indigo-200">
                     {s.icon}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">{s.title}</h3>
                  <p className="text-slate-600 text-lg">{s.desc}</p>
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center font-black text-xl text-slate-400 border-4 border-white shadow-sm">{s.step}</div>
               </div>
            ))}
          </div>
        </div>

        {/* 5. Why Choose Us Section */}
        <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-slate-100 mb-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">Why Choose Our Specialists?</h2>
            <p className="text-slate-600 text-2xl mb-10 leading-relaxed font-light">
              We bring together the brightest minds in medicine to offer you comprehensive and collaborative care. Our specialists work as a unified team to create personalized treatment plans.
            </p>
            <ul className="space-y-6">
              {[
                "Board-certified, globally trained doctors",
                "Advanced robotic & minimally invasive surgery",
                "Seamless inter-departmental collaboration",
                "Patient-centric holistic care approach"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-bold text-xl bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <ShieldCheck className="text-indigo-600 mr-6 flex-shrink-0" size={36} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group">
            <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80" alt="Specialists" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-indigo-900/20"></div>
          </div>
        </div>

        {/* 6. Research & Clinical Trials */}
        <div className="mb-40 bg-indigo-50 rounded-[4rem] p-16 md:p-24 text-center border-2 border-indigo-100 shadow-xl">
          <Microscope size={80} className="text-indigo-600 mx-auto mb-10" />
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8">Research & Clinical Trials</h2>
          <p className="text-2xl text-slate-700 max-w-4xl mx-auto mb-14 leading-relaxed font-light">
             At NovaCare, we don't just practice medicine; we advance it. We are actively enrolling patients in over 50 groundbreaking clinical trials spanning oncology, neurology, and cardiology. 
          </p>
          <button className="bg-indigo-600 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-indigo-700 transition shadow-2xl shadow-indigo-300 hover:scale-105">
            View Active Trials
          </button>
        </div>

        {/* 7. Insurance Providers & FAQ (NEW) */}
        <div className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-10">
           <div className="bg-slate-900 text-white p-16 rounded-[4rem] shadow-2xl">
              <Shield size={60} className="text-indigo-400 mb-8" />
              <h2 className="text-5xl font-black mb-6">Insurance Partners</h2>
              <p className="text-xl text-slate-300 mb-10 font-light leading-relaxed">We work closely with major health insurance providers to ensure you receive the best care without financial stress.</p>
              <div className="grid grid-cols-2 gap-6">
                 {['Medicare', 'Blue Cross', 'Aetna', 'Cigna', 'UnitedHealth', 'Humana'].map((ins, i) => (
                    <div key={i} className="bg-slate-800 p-5 rounded-2xl text-center font-bold text-lg border border-slate-700 hover:bg-slate-700 transition-colors cursor-pointer">{ins}</div>
                 ))}
              </div>
           </div>
           <div className="bg-white p-16 rounded-[4rem] shadow-2xl border border-slate-100">
              <Phone size={60} className="text-indigo-600 mb-8" />
              <h2 className="text-5xl font-black text-slate-900 mb-6">Need Assistance?</h2>
              <p className="text-xl text-slate-600 mb-10 font-light leading-relaxed">Not sure which department you need? Our triage nurses are available 24/7 to guide you to the right specialist.</p>
              <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 mb-8">
                 <h4 className="text-2xl font-black text-indigo-900 mb-2">Triage Hotline</h4>
                 <p className="text-3xl font-black text-indigo-600">1-800-NOVA-HELP</p>
              </div>
              <button className="w-full bg-slate-100 text-slate-900 py-5 rounded-full font-black text-lg hover:bg-slate-200 transition-colors">Request a Callback</button>
           </div>
        </div>

        {/* 8. Smart Tech Banner */}
        <div className="bg-gradient-to-r from-indigo-950 to-purple-900 rounded-[4rem] p-16 md:p-32 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
          
          <div className="relative z-10">
            <span className="bg-indigo-800/50 text-indigo-200 px-6 py-2 rounded-full text-sm font-black tracking-widest uppercase mb-10 inline-block backdrop-blur-sm border border-indigo-500/30 shadow-lg">Innovation Hub</span>
            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-tight">Powered by Next-Gen Healthcare Tech</h2>
            <p className="text-indigo-100 max-w-4xl mx-auto text-xl md:text-3xl mb-14 font-light leading-relaxed">
              Experience the future with our integrated logistics for medicine delivery, AI support for instant health queries, and unified patient dashboards.
            </p>
            <button className="bg-white text-indigo-900 px-12 py-6 rounded-full font-black text-xl hover:bg-indigo-50 transition-all shadow-2xl shadow-indigo-900/50 transform hover:scale-105">
              Explore Patient Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;