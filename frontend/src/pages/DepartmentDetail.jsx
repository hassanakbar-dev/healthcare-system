import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Stethoscope, Calendar, CheckCircle2, ChevronDown, ChevronUp, Activity, Award, Microscope, HeartPulse } from 'lucide-react';
import { departmentData } from '../data/departmentsData';

const DepartmentDetail = () => {
  const { id } = useParams();
  const [openFaq, setOpenFaq] = useState(null);
  
  // Default fallback if not found
  const data = departmentData[id] || {
    title: 'Department Not Found',
    description: 'We could not find the department you are looking for.',
    color: 'from-gray-500 to-gray-700',
    icon: <Stethoscope size={48} />,
    overview: ['Please return to the Departments page to view all available medical specialties.'],
    services: [],
    whyChooseUs: [],
    facilities: [],
    faqs: [],
    doctors: [],
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80'
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-32">
      {/* Hero Section */}
      <div className="relative pt-40 pb-32 min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
          <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent`}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${data.color} text-white shadow-2xl mb-8 transform -rotate-3 hover:rotate-0 transition-transform duration-300`}>
            {data.icon}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-md">{data.title}</h1>
          <p className="text-xl md:text-3xl text-slate-200 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-sm mb-8">
            {data.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview Section */}
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-slate-100">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <Activity className="text-indigo-600" size={32} /> Overview
              </h2>
              <div className="space-y-5">
                {data.overview.map((paragraph, idx) => (
                  <p key={idx} className="text-lg text-slate-600 leading-relaxed font-light text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            {data.whyChooseUs && data.whyChooseUs.length > 0 && (
              <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2.5rem] p-10 md:p-14 shadow-xl text-white">
                <h2 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-3">
                  <Award className="text-indigo-400" size={32} /> Why Choose Us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {data.whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={24} />
                      <span className="text-indigo-100 font-medium text-lg leading-snug">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Services Section */}
            {data.services.length > 0 && (
              <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-slate-100">
                <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-8 flex items-center gap-3">
                  <HeartPulse className="text-rose-500" size={32} /> Specialized Services
                </h2>
                <div className="space-y-6">
                  {data.services.map((service, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{service.name}</h3>
                      <p className="text-slate-600 font-light">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology & Facilities */}
            {data.facilities && data.facilities.length > 0 && (
              <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-14 border border-slate-200">
                <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-8 flex items-center gap-3">
                  <Microscope className="text-blue-600" size={32} /> Technology & Facilities
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.facilities.map((facility, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-lg text-slate-700 font-medium">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                      {facility}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Doctors Section */}
            {data.doctors.length > 0 && (
              <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-slate-100">
                <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-8">Meet Our Specialists</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {data.doctors.map((doc, idx) => (
                    <div key={idx} className="group relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-md">
                      <img src={doc.image} alt={doc.name} className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-90"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <h4 className="text-white text-2xl font-black mb-1">{doc.name}</h4>
                        <p className="text-indigo-200 font-medium mb-3">{doc.role}</p>
                        <Link to="/booking" className="inline-block text-sm text-white font-bold uppercase tracking-wider hover:text-emerald-400 transition-colors">
                          Book Consultation &rarr;
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {data.faqs && data.faqs.length > 0 && (
              <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-slate-100">
                <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {data.faqs.map((faq, index) => (
                    <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
                      <button 
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                      >
                        <span className="font-bold text-slate-800 text-lg pr-4">{faq.q}</span>
                        {openFaq === index ? <ChevronUp className="text-indigo-600 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
                      </button>
                      <div className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 p-5 bg-white' : 'max-h-0 px-5 overflow-hidden'}`}>
                        <p className="text-slate-600 font-light leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Quick Actions */}
            <div className="bg-indigo-600 rounded-[2.5rem] p-10 shadow-2xl text-white sticky top-32">
              <h3 className="text-2xl font-black mb-6">Need an Appointment?</h3>
              <p className="text-indigo-100 mb-8 font-light leading-relaxed text-lg">
                Schedule a consultation with our top {data.title} specialists today. Skip the waiting room.
              </p>
              <Link to="/booking" className="flex items-center justify-center gap-2 w-full bg-white text-indigo-700 py-4 rounded-full font-black hover:bg-indigo-50 hover:shadow-lg transition-all text-lg transform hover:-translate-y-1">
                <Calendar size={22} /> Book Now
              </Link>
              
              <div className="mt-8 pt-8 border-t border-indigo-500/50">
                <p className="text-sm text-indigo-200 uppercase tracking-wider font-bold mb-3">Or call our 24/7 hotline</p>
                <a href="tel:+18000000000" className="flex items-center gap-3 text-3xl font-black hover:text-white transition-colors">
                   1-800-NOVA-HELP
                </a>
              </div>
            </div>
            
            {/* Working Hours */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-black text-slate-800 mb-6">Department Hours</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-slate-600 border-b border-slate-100 pb-4">
                  <span className="font-medium text-lg">Monday - Friday</span>
                  <span className="font-bold text-slate-900 text-lg">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-slate-600 border-b border-slate-100 pb-4">
                  <span className="font-medium text-lg">Saturday</span>
                  <span className="font-bold text-slate-900 text-lg">9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-slate-600 pb-2">
                  <span className="font-medium text-lg">Sunday</span>
                  <span className="font-bold inline-block bg-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-sm">Emergencies Only</span>
                </li>
              </ul>
            </div>

            {/* Insurance Accepted */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 shadow-xl text-white">
              <h3 className="text-xl font-bold mb-4">Insurance Accepted</h3>
              <p className="text-slate-400 font-light text-sm mb-4">
                We accept most major health insurance plans, Medicare, and Medicaid. Please contact our billing department to verify your coverage for {data.title} services.
              </p>
              <Link to="/contact" className="text-emerald-400 font-bold hover:text-emerald-300 text-sm uppercase tracking-wider">View Billing Info &rarr;</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;
