import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Users, Stethoscope, Calendar, LogOut, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ appointments: 0, patients: 0, doctors: 0 });
  
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/auth');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch stats
        const resStats = await fetch('http://localhost:5000/api/stats');
        if (resStats.ok) setStats(await resStats.json());

        // Fetch appointments
        const resAppt = await fetch('http://localhost:5000/api/appointments');
        if (resAppt.ok) setAppointmentsList(await resAppt.json());

        // Fetch doctors
        const resDocs = await fetch('http://localhost:5000/api/doctors');
        if (resDocs.ok) setDoctorsList(await resDocs.json());

        // Fetch all users (to extract patients)
        const resUsers = await fetch('http://localhost:5000/api/users');
        if (resUsers.ok) setUsersList(await resUsers.json());

      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/auth');
  };

  if (!user) return <div className="min-h-screen flex items-center justify-center font-bold text-xl text-slate-500">Redirecting...</div>;

  const patientList = usersList.filter(u => u.role === 'patient');

  // Dummy Graph Data based on stats
  const graphData = [
    { name: 'Total Patients', count: stats.patients, fill: '#10b981' },
    { name: 'Total Doctors', count: stats.doctors, fill: '#8b5cf6' },
    { name: 'Total Appointments', count: stats.appointments, fill: '#4f46e5' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col pt-20 md:pt-24 md:min-h-screen sticky top-0 z-10 text-slate-300">
        <div className="p-6 flex flex-col items-center border-b border-slate-800">
          <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
            <LayoutDashboard size={40} />
          </div>
          <h3 className="font-bold text-white text-lg">Admin Panel</h3>
          <span className="text-xs text-slate-400 font-medium bg-slate-800 px-3 py-1 rounded-full mt-1">Hello, {user.name}</span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'overview', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
            { id: 'appointments', label: 'All Appointments', icon: <Calendar size={20} /> },
            { id: 'patients', label: 'Patients List', icon: <Users size={20} /> },
            { id: 'doctors', label: 'Manage Doctors', icon: <Stethoscope size={20} /> },
            { id: 'settings', label: 'System Settings', icon: <Settings size={20} /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === item.id 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-400 hover:bg-red-950 transition-all">
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 pt-24 md:pt-28 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          
          {loading ? (
            <div className="text-center text-slate-500 py-10 font-bold text-xl">Loading stats...</div>
          ) : (
            <>
              {/* --- OVERVIEW TAB --- */}
              {activeTab === 'overview' && (
                <div>
                  <div className="mb-10">
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
                    <p className="text-slate-600">Overview of the entire hospital system data in real-time.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition">
                      <div>
                        <p className="text-slate-500 font-bold mb-1">Total Appointments</p>
                        <h3 className="text-5xl font-black text-indigo-600">{stats.appointments}</h3>
                      </div>
                      <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-500">
                        <Calendar size={40} />
                      </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition">
                      <div>
                        <p className="text-slate-500 font-bold mb-1">Total Patients</p>
                        <h3 className="text-5xl font-black text-green-500">{stats.patients}</h3>
                      </div>
                      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                        <Users size={40} />
                      </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition">
                      <div>
                        <p className="text-slate-500 font-bold mb-1">Total Doctors</p>
                        <h3 className="text-5xl font-black text-purple-500">{stats.doctors}</h3>
                      </div>
                      <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center text-purple-500">
                        <Stethoscope size={40} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Chart Section */}
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Hospital Statistics Overview</h3>
                    <div className="h-80 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={graphData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} />
                          <YAxis axisLine={false} tickLine={false} />
                          <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                          <Bar dataKey="count" radius={[8, 8, 0, 0]} barSize={50} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              )}

              {/* --- APPOINTMENTS TAB --- */}
              {activeTab === 'appointments' && (
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-6">All Appointments</h1>
                  <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-slate-500 border-b border-slate-100">
                          <th className="p-4 font-bold">Patient Name</th>
                          <th className="p-4 font-bold">Doctor</th>
                          <th className="p-4 font-bold">Date & Time</th>
                          <th className="p-4 font-bold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointmentsList.length === 0 ? (
                          <tr><td colSpan="4" className="p-6 text-center text-slate-500">No appointments found.</td></tr>
                        ) : appointmentsList.map(app => (
                          <tr key={app.id} className="border-b border-slate-100 hover:bg-slate-50 transition">
                            <td className="p-4 font-semibold text-slate-800">{app.patient_name}</td>
                            <td className="p-4 text-slate-600">{app.doctor_name} <span className="text-xs text-indigo-500 block">{app.doctor_specialty}</span></td>
                            <td className="p-4 text-slate-600">{new Date(app.appointment_date).toLocaleString()}</td>
                            <td className="p-4">
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{app.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* --- DOCTORS TAB --- */}
              {activeTab === 'doctors' && (
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-6">Manage Doctors</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {doctorsList.length === 0 ? (
                      <p className="text-slate-500 col-span-2">No doctors found.</p>
                    ) : doctorsList.map(doc => (
                      <div key={doc.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-center gap-6 hover:shadow-md transition">
                        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                          <Stethoscope size={30} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-800">{doc.name}</h3>
                          <p className="text-indigo-600 font-medium">{doc.specialization}</p>
                          <p className="text-slate-500 text-sm mt-1">{doc.email} | {doc.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* --- PATIENTS TAB --- */}
              {activeTab === 'patients' && (
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-6">Patients List</h1>
                  <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-slate-500 border-b border-slate-100">
                          <th className="p-4 font-bold">ID</th>
                          <th className="p-4 font-bold">Patient Name</th>
                          <th className="p-4 font-bold">Email</th>
                          <th className="p-4 font-bold">Joined On</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patientList.length === 0 ? (
                          <tr><td colSpan="4" className="p-6 text-center text-slate-500">No patients found.</td></tr>
                        ) : patientList.map(p => (
                          <tr key={p.id} className="border-b border-slate-100 hover:bg-slate-50 transition">
                            <td className="p-4 text-slate-500 font-medium">#{p.id}</td>
                            <td className="p-4 font-semibold text-slate-800">{p.name}</td>
                            <td className="p-4 text-slate-600">{p.email}</td>
                            <td className="p-4 text-slate-600">{new Date(p.created_at).toLocaleDateString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* --- SETTINGS TAB --- */}
              {activeTab === 'settings' && (
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-6">System Settings</h1>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Profile Settings */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                      <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Admin Profile</h3>
                      <form className="space-y-5">
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                          <input type="text" defaultValue={user.name} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-500 transition-all" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                          <input type="email" defaultValue={user.email} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-500 transition-all" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">New Password</label>
                          <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-500 transition-all" />
                        </div>
                        <button type="button" onClick={() => alert('Profile updated successfully!')} className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-indigo-700 transition shadow-md">
                          Save Changes
                        </button>
                      </form>
                    </div>

                    {/* Hospital Settings */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                      <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Hospital Preferences</h3>
                      <form className="space-y-5">
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Hospital Name</label>
                          <input type="text" defaultValue="NovaCare Hospital" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-500 transition-all" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Contact Number</label>
                          <input type="text" defaultValue="+1 (800) 000-0000" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-500 transition-all" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Email Notifications</label>
                          <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-500 transition-all">
                            <option>Send for every new appointment</option>
                            <option>Send daily summary only</option>
                            <option>Mute notifications</option>
                          </select>
                        </div>
                        <button type="button" onClick={() => alert('Hospital preferences saved!')} className="bg-slate-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-800 transition shadow-md">
                          Update Preferences
                        </button>
                      </form>
                    </div>

                  </div>
                </div>
              )}

            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
