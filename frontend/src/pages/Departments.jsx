import React from 'react';
import { HeartPulse, Brain, Bone, Activity, Syringe, ShieldCheck, Eye, Ear, Stethoscope } from 'lucide-react';

const Departments = () => {
  const depts = [
    { icon: <HeartPulse size={32}/>, title: "Cardiology", desc: "Advanced diagnostics, heart surgeries, and cardiovascular rehabilitation programs." },
    { icon: <Brain size={32}/>, title: "Neurology", desc: "Treatment for stroke, epilepsy, and complex nervous system disorders." },
    { icon: <Bone size={32}/>, title: "Orthopedics", desc: "Joint replacements, sports injuries, and comprehensive physical therapy." },
    { icon: <Activity size={32}/>, title: "Dental Care", desc: "Cosmetic dentistry, oral surgeries, and regular preventive checkups." },
    { icon: <Syringe size={32}/>, title: "Immunology", desc: "Allergy testing, vaccinations, and auto-immune disease management." },
    { icon: <ShieldCheck size={32}/>, title: "Primary Care", desc: "Your first line of defense with regular health screenings and wellness plans." },
    { icon: <Eye size={32}/>, title: "Ophthalmology", desc: "Vision correction, cataract surgery, and comprehensive eye exams." },
    { icon: <Ear size={32}/>, title: "ENT Specialists", desc: "Treatment for ear infections, sinus problems, and throat disorders." },
    { icon: <Stethoscope size={32}/>, title: "Internal Medicine", desc: "Diagnosis and management of complex, chronic multi-system diseases." }
  ];

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Centers of Excellence</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our specialized departments are equipped with state-of-the-art technology and staffed by globally recognized medical professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depts.map((dept, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all text-left group">
              <div className="text-indigo-600 bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">{dept.icon}</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">{dept.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{dept.desc}</p>
              <button className="text-indigo-600 font-semibold hover:underline flex items-center gap-2">Read Details →</button>
            </div>
          ))}
        </div>

        {/* Smart Tech Banner */}
        <div className="mt-20 bg-indigo-900 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Powered by Next-Gen Healthcare Architecture</h2>
            <p className="text-indigo-200 max-w-3xl mx-auto text-lg mb-8">
              Experience the future with our integrated logistics for medicine delivery, conversational AI support for instant health queries, and unified role-based patient dashboards.
            </p>
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition">
              Explore Patient Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;