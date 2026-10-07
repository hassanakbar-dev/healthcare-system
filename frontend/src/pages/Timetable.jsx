import React from 'react';
import { Search, Filter, Calendar, Clock, MapPin, UserPlus, CreditCard, Shield, Video, Stethoscope, FileText, CheckCircle, Smartphone, Map } from 'lucide-react';

const Timetable = () => {
  const doctors = [
    { name: "Dr. Sarah Jenkins", dept: "Cardiology", days: "Mon, Wed, Fri", time: "09:00 AM - 02:00 PM", room: "Room 302", fees: "$150" },
    { name: "Dr. David Hull", dept: "Orthopedics", days: "Tue, Thu, Sat", time: "10:00 AM - 04:00 PM", room: "Room 105", fees: "$120" },
    { name: "Dr. Emily Chen", dept: "Pediatrics", days: "Mon - Fri", time: "08:00 AM - 01:00 PM", room: "Room 201", fees: "$100" },
    { name: "Dr. Michael Ross", dept: "Neurology", days: "Mon, Tue, Wed", time: "11:00 AM - 06:00 PM", room: "Room 405", fees: "$180" },
    { name: "Dr. Lisa Cuddy", dept: "Internal Medicine", days: "Thu - Sat", time: "09:00 AM - 03:00 PM", room: "Room 110", fees: "$110" },
    { name: "Dr. James Wilson", dept: "Oncology", days: "Mon, Thu", time: "02:00 PM - 08:00 PM", room: "Room 501", fees: "$200" },
    { name: "Dr. Allison Cameron", dept: "Immunology", days: "Wed, Fri", time: "10:00 AM - 03:00 PM", room: "Room 215", fees: "$130" },
    { name: "Dr. Robert Chase", dept: "Surgery", days: "Tue, Thu", time: "08:00 AM - 05:00 PM", room: "Room 102", fees: "$250" },
  ];

  return (
    <div className="pt-28 pb-32 px-4 min-h-screen bg-slate-50 font-sans selection:bg-indigo-100">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Header */}
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-black text-sm uppercase tracking-widest mb-6 block">Schedule & Appointments</span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tight">Doctors Timetable</h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Find the perfect time to meet with our specialists. Walk-ins are welcome, but securing an appointment ensures zero waiting time.
          </p>
        </div>
        
        {/* 2. Search and Filters */}
        <div className="bg-white p-6 md:p-8 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col lg:flex-row gap-6 mb-16 relative z-20">
          <div className="flex-1 relative">
            <Search className="absolute left-8 top-7 text-slate-400" size={28} />
            <input 
              type="text" 
              placeholder="Search doctor by name or department..." 
              className="w-full pl-20 pr-8 py-6 bg-slate-50 rounded-[2rem] outline-none border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all text-slate-700 font-bold text-xl shadow-inner" 
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="relative">
              <select className="appearance-none w-full sm:w-64 bg-slate-50 border border-slate-200 px-8 py-6 rounded-[2rem] text-slate-700 font-bold outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 cursor-pointer text-xl shadow-inner">
                <option value="">All Departments</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="orthopedics">Orthopedics</option>
              </select>
              <Filter size={24} className="absolute right-6 top-6 text-slate-400 pointer-events-none" style={{top: '26px'}} />
            </div>
            <button className="flex justify-center items-center gap-4 bg-indigo-600 text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-indigo-700 shadow-2xl shadow-indigo-300 transition-all transform hover:scale-105">
              <Calendar size={28} /> Book Now
            </button>
          </div>
        </div>

        {/* 3. Timetable Data Grid */}
        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100 mb-40">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[1200px] border-collapse">
              <thead className="bg-slate-50/80 text-slate-500 border-b-2 border-slate-200">
                <tr>
                  <th className="py-8 px-10 font-black text-sm uppercase tracking-widest">Doctor Profile</th>
                  <th className="py-8 px-10 font-black text-sm uppercase tracking-widest">Speciality</th>
                  <th className="py-8 px-10 font-black text-sm uppercase tracking-widest">Available Days</th>
                  <th className="py-8 px-10 font-black text-sm uppercase tracking-widest">Visiting Hours</th>
                  <th className="py-8 px-10 font-black text-sm uppercase tracking-widest">Fee</th>
                  <th className="py-8 px-10 font-black text-sm uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {doctors.map((doc, i) => (
                  <tr key={i} className="hover:bg-indigo-50/50 transition-colors group">
                    <td className="py-8 px-10">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-100 flex items-center justify-center text-indigo-700 font-black text-2xl shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          {doc.name.split(' ')[1][0]}
                        </div>
                        <div>
                          <p className="font-black text-slate-900 text-xl">{doc.name}</p>
                          <p className="text-base text-slate-500 flex items-center gap-2 mt-2 font-bold"><MapPin size={16}/> {doc.room}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-8 px-10">
                      <span className="bg-slate-100 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-black uppercase tracking-wider group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors">
                        {doc.dept}
                      </span>
                    </td>
                    <td className="py-8 px-10 font-bold text-slate-600 text-lg">
                       <span className="flex items-center gap-3"><Calendar size={22} className="text-indigo-400"/> {doc.days}</span>
                    </td>
                    <td className="py-8 px-10 font-black text-indigo-600 text-lg">
                      <div className="flex items-center gap-3">
                        <Clock size={22} className="text-indigo-400"/> {doc.time}
                      </div>
                    </td>
                    <td className="py-8 px-10 font-black text-emerald-600 text-2xl">
                      {doc.fees}
                    </td>
                    <td className="py-8 px-10 text-right">
                      <button className="text-base bg-white border-2 border-indigo-100 text-indigo-700 px-8 py-4 rounded-[1.5rem] font-black hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all flex items-center gap-3 ml-auto shadow-sm hover:shadow-xl">
                        <UserPlus size={22} /> Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Booking Process Steps */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">How to Book an Appointment</h2>
            <p className="text-slate-600 text-2xl font-light">Four simple steps to secure your visit with our top specialists.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
             {[
               { icon: <Search size={40} />, title: "Find Doctor", desc: "Browse our directory by specialty." },
               { icon: <Calendar size={40} />, title: "Select Date", desc: "Pick an available slot that works for you." },
               { icon: <FileText size={40} />, title: "Fill Details", desc: "Provide basic info and history." },
               { icon: <CheckCircle size={40} />, title: "Confirm", desc: "Receive instant SMS confirmation." }
             ].map((step, i) => (
                <div key={i} className="text-center p-10 bg-white rounded-[3rem] shadow-xl border border-slate-100 hover:-translate-y-3 transition-transform duration-500 cursor-pointer">
                   <div className="w-24 h-24 bg-indigo-50 text-indigo-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner">
                     {step.icon}
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
                   <p className="text-slate-600 text-lg font-light">{step.desc}</p>
                </div>
             ))}
          </div>
        </div>

        {/* 5. Insurance & Mobile App (2 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-40">
           {/* Insurance */}
           <div className="bg-emerald-50 p-16 rounded-[4rem] shadow-2xl border border-emerald-100 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 text-emerald-200 opacity-50"><Shield size={300}/></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-emerald-600 text-white rounded-[2rem] flex items-center justify-center mb-10 shadow-xl shadow-emerald-200">
                  <Shield size={48} />
                </div>
                <h3 className="text-4xl font-black text-emerald-950 mb-6">Insurance Accepted</h3>
                <p className="text-emerald-800 text-xl mb-10 leading-relaxed font-light">
                  We accept major insurance plans including Medicare, Blue Cross Blue Shield, UnitedHealthcare, and Aetna. Contact billing for details.
                </p>
                <button className="bg-emerald-600 text-white px-10 py-5 rounded-full font-black text-lg shadow-xl hover:bg-emerald-700 transition-colors">
                  Verify Your Insurance
                </button>
              </div>
           </div>
           
           {/* Mobile App */}
           <div className="bg-indigo-900 text-white p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-indigo-800 text-indigo-200 rounded-[2rem] flex items-center justify-center mb-10 border-2 border-indigo-700 shadow-inner">
                  <Smartphone size={48} />
                </div>
                <h3 className="text-4xl font-black mb-6">Download Our App</h3>
                <p className="text-indigo-200 text-xl mb-10 leading-relaxed font-light">
                  Manage your appointments, view test results, and chat with doctors securely directly from your smartphone. Available on iOS and Android.
                </p>
                <button className="bg-white text-indigo-900 px-10 py-5 rounded-full font-black text-lg shadow-xl hover:bg-indigo-50 transition-colors">
                  Get the App Now
                </button>
              </div>
           </div>
        </div>

        {/* 6. Telemedicine Options */}
        <div className="bg-slate-900 rounded-[4rem] p-16 md:p-24 shadow-2xl text-white mb-40 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="relative z-10">
              <Video size={80} className="mx-auto mb-10 text-indigo-400" />
              <h2 className="text-5xl md:text-6xl font-black mb-8">Virtual Consultations</h2>
              <p className="text-2xl text-slate-300 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
                 Can't make it to the hospital? Book a secure, high-definition video consultation with our top specialists from the comfort of your home.
              </p>
              <button className="bg-indigo-600 text-white px-12 py-6 rounded-full font-black text-xl hover:bg-indigo-500 transition-all shadow-2xl hover:scale-105">
                 Learn About Telehealth
              </button>
           </div>
        </div>

        {/* 7. Clinic Locations & Maps (NEW) */}
        <div className="mb-40">
           <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-slate-900 mb-6">Find a Clinic Near You</h2>
              <p className="text-2xl text-slate-600 font-light">We have multiple outpatient clinics across the city for your convenience.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { name: "Downtown Clinic", address: "100 Main St, City Center" },
                { name: "Westside Hub", address: "450 West Ave, Commerce Park" },
                { name: "North Hills Care", address: "890 North Blvd, Residential Area" }
              ].map((loc, i) => (
                 <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 text-center hover:-translate-y-3 transition-transform cursor-pointer">
                    <Map size={48} className="mx-auto mb-6 text-indigo-600" />
                    <h3 className="text-2xl font-black text-slate-900 mb-3">{loc.name}</h3>
                    <p className="text-lg text-slate-500 font-medium">{loc.address}</p>
                 </div>
              ))}
           </div>
        </div>

        {/* 8. Urgent Care Banner */}
        <div className="bg-gradient-to-r from-rose-500 to-rose-700 rounded-[4rem] p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="flex items-center gap-10 relative z-10">
            <div className="w-28 h-28 bg-white/20 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center text-white flex-shrink-0 border-2 border-white/30 shadow-xl">
              <Clock size={56} />
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Need Urgent Care?</h3>
              <p className="text-rose-100 text-2xl font-light leading-relaxed">Our Emergency Department and Trauma Center is open 24/7. No appointment needed.</p>
            </div>
          </div>
          <div className="relative z-10 flex-shrink-0">
             <button className="bg-white text-rose-700 px-12 py-6 rounded-full font-black text-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:bg-rose-50 transition-all transform hover:scale-105 whitespace-nowrap">
               Call Emergency: 911
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Timetable;