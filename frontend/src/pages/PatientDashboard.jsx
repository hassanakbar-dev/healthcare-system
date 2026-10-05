import React, { useState } from 'react';
import { 
  LayoutDashboard, Calendar, FileText, Pill, Settings, 
  LogOut, User, Clock, CalendarDays, Activity, ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex flex-col pt-20 md:pt-24 md:min-h-screen sticky top-0 z-10">
        <div className="p-6 flex flex-col items-center border-b border-slate-100">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-3 overflow-hidden">
            <User size={40} />
          </div>
          <h3 className="font-bold text-slate-800 text-lg">John Doe</h3>
          <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full mt-1">Patient ID: #NC-8892</span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={20} /> },
            { id: 'appointments', label: 'My Appointments', icon: <Calendar size={20} /> },
            { id: 'records', label: 'Medical Records', icon: <FileText size={20} /> },
            { id: 'prescriptions', label: 'Prescriptions', icon: <Pill size={20} /> },
            { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === item.id 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200">
          <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-500 hover:bg-red-50 transition-all">
            <LogOut size={20} />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 pt-24 md:pt-28">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, John! 👋</h1>
          <p className="text-slate-600">Here is an overview of your health and upcoming schedules.</p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center"><CalendarDays size={28}/></div>
            <div>
              <p className="text-sm font-bold text-slate-500">Upcoming Visit</p>
              <h4 className="text-xl font-black text-slate-800">Oct 12, 2026</h4>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center"><Activity size={28}/></div>
            <div>
              <p className="text-sm font-bold text-slate-500">Blood Pressure</p>
              <h4 className="text-xl font-black text-slate-800">120/80 <span className="text-sm text-green-500 font-medium">Normal</span></h4>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center"><FileText size={28}/></div>
            <div>
              <p className="text-sm font-bold text-slate-500">Lab Reports</p>
              <h4 className="text-xl font-black text-slate-800">2 New</h4>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Appointments & Actions */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Upcoming Appointment Card */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-0"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Next Appointment</h3>
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Confirmed</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-800 mb-1">Dr. Sarah Jenkins</h4>
                    <p className="text-slate-500 text-sm mb-4">Cardiology Department</p>
                    <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
                      <span className="flex items-center gap-1"><CalendarDays size={16} className="text-indigo-600"/> Monday, Oct 12</span>
                      <span className="flex items-center gap-1"><Clock size={16} className="text-indigo-600"/> 10:30 AM</span>
                    </div>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                    <button className="flex-1 sm:flex-none bg-white border border-slate-200 text-slate-600 px-4 py-2.5 rounded-xl font-semibold hover:bg-slate-50 transition">Reschedule</button>
                    <button className="flex-1 sm:flex-none bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 shadow-md transition">Join Call</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Medical Records */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">Recent Test Results</h3>
                <button className="text-indigo-600 font-bold text-sm hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Complete Blood Count (CBC)", date: "Sep 28, 2026", status: "Normal" },
                  { title: "Lipid Panel (Cholesterol)", date: "Sep 28, 2026", status: "Review Suggested" }
                ].map((test, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:shadow-md transition cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center"><FileText size={20}/></div>
                      <div>
                        <h4 className="font-bold text-slate-800 group-hover:text-indigo-600 transition">{test.title}</h4>
                        <p className="text-xs text-slate-500">{test.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${test.status === 'Normal' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                        {test.status}
                      </span>
                      <ChevronRight size={20} className="text-slate-400 group-hover:text-indigo-600 transition"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quick Actions & Profile info */}
          <div className="space-y-8">
            
            {/* Quick Actions */}
            <div className="bg-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-indigo-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-xl font-bold mb-6 relative z-10">Quick Actions</h3>
              <div className="space-y-3 relative z-10">
                <Link to="/booking" className="w-full flex items-center justify-between bg-indigo-800 hover:bg-indigo-700 px-5 py-4 rounded-2xl transition">
                  <span className="font-semibold">Book Appointment</span>
                  <CalendarDays size={20} />
                </Link>
                <button className="w-full flex items-center justify-between bg-indigo-800 hover:bg-indigo-700 px-5 py-4 rounded-2xl transition">
                  <span className="font-semibold">Request Prescription</span>
                  <Pill size={20} />
                </button>
              </div>
            </div>

            {/* Current Medications */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Current Medications</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="mt-1 text-indigo-600"><Pill size={24}/></div>
                  <div>
                    <h4 className="font-bold text-slate-800">Lisinopril 10mg</h4>
                    <p className="text-sm text-slate-600 mt-1">1 tablet daily in the morning with food.</p>
                    <p className="text-xs font-bold text-indigo-600 mt-2">Refill available</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;