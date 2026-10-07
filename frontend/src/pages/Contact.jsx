import React, { useState } from 'react';
import { Mail, Phone, MapPin, Plus, Minus, Send, Clock, MessageSquare, Building, Navigation, LifeBuoy, ThumbsUp, MessageCircle } from 'lucide-react';

const Facebook = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Instagram = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Linkedin = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "How do I book an appointment online?", a: "You can book directly through our Patient Portal dashboard or call our 24/7 hotline." },
    { q: "Do you accept major health insurance plans?", a: "Yes, we accept most major insurance providers including Medicare, Blue Cross, and UnitedHealthcare." },
    { q: "How can I access my medical records?", a: "Your medical records are securely stored and can be accessed anytime through our unified online Patient Portal." },
    { q: "Are emergency services available 24/7?", a: "Absolutely. Our Level 1 Trauma Center is fully operational 24 hours a day, 365 days a year." },
    { q: "Can I request a prescription refill online?", a: "Yes, registered patients can request prescription refills directly through their Patient Dashboard." },
    { q: "Do you offer virtual or telehealth consultations?", a: "Yes, we offer secure video consultations with our specialists." },
    { q: "What should I bring to my first appointment?", a: "Please bring a valid photo ID, your current insurance card, and a list of current medications." },
    { q: "Is parking available at the hospital?", a: "Yes, we have a multi-level parking garage located right next to the main entrance." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-32 px-4 font-sans selection:bg-indigo-100">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Page Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">We're Here to Help</h1>
          <p className="text-slate-600 text-xl leading-relaxed font-light">
            Have questions about our services, need to schedule an appointment, or want to provide feedback? Our dedicated team of professionals is available around the clock.
          </p>
        </div>

        {/* 2. Main Contact Form & Direct Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-slate-100 hover:shadow-2xl transition-shadow flex items-start gap-6 group">
              <div className="bg-indigo-50 text-indigo-600 p-5 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-2xl mb-2">Main Campus</h4>
                <p className="text-slate-600 text-lg leading-relaxed">2702 Memory Lane<br/>Chicago, IL 60605, USA</p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-slate-100 hover:shadow-2xl transition-shadow flex items-start gap-6 group">
              <div className="bg-rose-50 text-rose-600 p-5 rounded-2xl group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Phone size={32} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-2xl mb-2">Emergency Line</h4>
                <p className="text-slate-600 text-lg leading-relaxed font-bold text-rose-600">1-800-100-900 (24/7)</p>
                <p className="text-slate-500 mt-1">Reception: (312) 555-0198</p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-slate-100 hover:shadow-2xl transition-shadow flex items-start gap-6 group">
              <div className="bg-indigo-50 text-indigo-600 p-5 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Mail size={32} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-2xl mb-2">Email Directory</h4>
                <p className="text-slate-600 text-lg leading-relaxed">support@novacare.com<br/>careers@novacare.com</p>
              </div>
            </div>
            
            {/* 3. Social Links */}
            <div className="pt-6 pl-4">
              <h4 className="font-bold text-slate-900 mb-6 text-xl">Follow Our Journey</h4>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-600 shadow-md border border-slate-100 hover:bg-indigo-600 hover:text-white hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
                   <MessageSquare size={28} />
                </div>
                <h3 className="text-4xl font-extrabold text-slate-900">Send a Message</h3>
              </div>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3 ml-2 uppercase tracking-wider">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-700 text-lg shadow-inner" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3 ml-2 uppercase tracking-wider">Your Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-700 text-lg shadow-inner" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 ml-2 uppercase tracking-wider">Subject / Department</label>
                  <select className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-700 text-lg shadow-inner cursor-pointer appearance-none">
                     <option>General Inquiry</option>
                     <option>Billing & Insurance</option>
                     <option>Feedback & Complaints</option>
                     <option>Careers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 ml-2 uppercase tracking-wider">Message</label>
                  <textarea rows="6" placeholder="Write your detailed message here..." className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-700 text-lg resize-none shadow-inner"></textarea>
                </div>

                <button type="button" className="bg-indigo-600 text-white font-bold px-12 py-5 rounded-full hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center gap-3 text-lg w-full sm:w-auto justify-center group transform hover:-translate-y-1">
                  Submit Message <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 4. Branch Locations */}
        <div className="mb-32">
           <div className="text-center mb-16">
              <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Network</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900">Branch Locations</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { city: "New York City", address: "1200 Health Ave, NY 10001", phone: "(212) 555-0921" },
                { city: "Los Angeles", address: "849 Wellness Blvd, CA 90028", phone: "(323) 555-8832" },
                { city: "Miami", address: "400 Ocean Drive, FL 33139", phone: "(305) 555-1144" }
              ].map((branch, i) => (
                 <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100 flex flex-col items-center text-center hover:shadow-2xl transition-all hover:-translate-y-2">
                    <Building className="text-indigo-400 mb-6" size={50} />
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">{branch.city}</h3>
                    <p className="text-slate-600 text-lg mb-6">{branch.address}</p>
                    <p className="text-indigo-600 font-bold text-xl">{branch.phone}</p>
                 </div>
              ))}
           </div>
        </div>

        {/* 5. Support & Transport Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
           <div className="bg-indigo-900 text-white p-12 lg:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 opacity-20"><LifeBuoy size={250} /></div>
              <div className="relative z-10">
                 <h3 className="text-4xl font-extrabold mb-6">Patient Support</h3>
                 <p className="text-indigo-200 text-xl mb-10 leading-relaxed font-light">
                   Need a wheelchair upon arrival? Require language translation services? Our patient support team is dedicated to making your visit as comfortable as possible.
                 </p>
                 <button className="bg-white text-indigo-900 px-10 py-4 rounded-full font-bold shadow-xl hover:bg-indigo-50 transition-colors text-lg">
                   Request Support
                 </button>
              </div>
           </div>
           <div className="bg-slate-200 p-12 lg:p-20 rounded-[3rem] border border-slate-300 relative overflow-hidden shadow-inner">
              <div className="absolute -bottom-10 -right-10 text-slate-300"><Navigation size={250} /></div>
              <div className="relative z-10">
                 <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Transport & Parking</h3>
                 <p className="text-slate-700 text-xl mb-10 leading-relaxed font-light">
                   We offer a massive 5-level parking structure. Valet parking is available at the main entrance for $10. We are also conveniently located next to the Blue Line transit station.
                 </p>
                 <button className="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-indigo-700 transition-colors text-lg">
                   Get Directions
                 </button>
              </div>
           </div>
        </div>

        {/* 6. Feedback / Rate Visit Section (NEW) */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-16 shadow-2xl text-white text-center mb-32 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="relative z-10">
             <MessageCircle size={60} className="mx-auto mb-8 text-blue-200" />
             <h2 className="text-5xl font-black mb-6">How was your experience?</h2>
             <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 font-light">We constantly strive to improve our services. Let us know what we did well and where we can improve.</p>
             <button className="bg-white text-indigo-900 px-12 py-5 rounded-full font-extrabold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">Submit Feedback</button>
           </div>
        </div>

        {/* 7. Map & Operating Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
           <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-slate-100 flex flex-col justify-center">
              <h3 className="text-4xl font-extrabold text-slate-900 mb-10 flex items-center gap-4">
                 <div className="p-4 bg-indigo-100 rounded-2xl"><Clock className="text-indigo-600" size={36}/></div> 
                 Operating Hours
              </h3>
              <div className="space-y-6">
                {[
                  { day: "Monday - Friday", hours: "08:00 AM - 08:00 PM" },
                  { day: "Saturday", hours: "09:00 AM - 06:00 PM" },
                  { day: "Sunday", hours: "10:00 AM - 04:00 PM" },
                  { day: "Emergency Dept", hours: "24 Hours / 7 Days", highlight: true }
                ].map((schedule, i) => (
                  <div key={i} className={`flex justify-between items-center p-6 rounded-2xl text-xl ${schedule.highlight ? 'bg-rose-50 text-rose-900 font-bold border border-rose-100 shadow-md' : 'bg-slate-50 text-slate-700 font-medium border border-slate-100'}`}>
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
           </div>
           
           <div className="bg-slate-200 rounded-[3rem] h-[500px] lg:h-auto overflow-hidden relative shadow-inner">
             <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" alt="Map Location" className="w-full h-full object-cover opacity-80" />
             <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/50 animate-bounce cursor-pointer border-4 border-white">
                  <MapPin size={48} />
                </div>
             </div>
           </div>
        </div>

        {/* 8. Extensive FAQ Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-4 block">Knowledge Base</span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-xl">Find quick answers to common questions about our hospital and services.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border-2 rounded-[2.5rem] overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-2xl shadow-indigo-200/50 border-indigo-300 bg-white scale-[1.02]' : 'border-slate-100 shadow-sm hover:border-indigo-200 bg-white'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full flex justify-between items-center p-8 md:p-10 text-left font-bold transition-colors outline-none ${openIndex === index ? 'text-indigo-900' : 'text-slate-800 hover:text-indigo-600'}`}
                >
                  <span className="text-xl md:text-2xl pr-8 leading-tight">{faq.q}</span>
                  <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'bg-indigo-600 text-white rotate-180 shadow-lg shadow-indigo-300' : 'bg-indigo-50 text-indigo-600'}`}>
                    {openIndex === index ? <Minus size={28} /> : <Plus size={28} />}
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out origin-top ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 md:p-10 pt-0 text-slate-600 leading-relaxed text-xl border-t-2 border-slate-50">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;