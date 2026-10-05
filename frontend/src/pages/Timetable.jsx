import React from 'react';
import { Search, Filter, Calendar } from 'lucide-react';

const Timetable = () => {
  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Schedule</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Doctors Timetable</h1>
          <p className="text-slate-600 max-w-xl mx-auto">Find the right time to meet with our specialists. Walk-ins are welcome, but appointments are highly recommended.</p>
        </div>
        
        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input type="text" placeholder="Search doctor by name or department..." className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl outline-none border border-slate-200 focus:border-indigo-500" />
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-6 py-3 rounded-xl text-slate-600 hover:bg-slate-100 font-medium">
              <Filter size={18} /> Department
            </button>
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 shadow-md">
              <Calendar size={18} /> Book Now
            </button>
          </div>
        </div>

        {/* Timetable Data Grid */}
        <div className="bg-white rounded-3xl shadow-lg overflow-x-auto border border-slate-100">
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-indigo-50 text-indigo-900 border-b border-indigo-100">
              <tr>
                <th className="py-5 px-6 font-bold text-sm uppercase">Doctor Name</th>
                <th className="py-5 px-6 font-bold text-sm uppercase">Speciality</th>
                <th className="py-5 px-6 font-bold text-sm uppercase">Available Days</th>
                <th className="py-5 px-6 font-bold text-sm uppercase">Visiting Hours</th>
                <th className="py-5 px-6 font-bold text-sm uppercase text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: "Dr. Sarah Jenkins", dept: "Cardiology", days: "Mon, Wed, Fri", time: "09:00 AM - 02:00 PM" },
                { name: "Dr. David Hull", dept: "Orthopedics", days: "Tue, Thu, Sat", time: "10:00 AM - 04:00 PM" },
                { name: "Dr. Emily Chen", dept: "Pediatrics", days: "Monday - Friday", time: "08:00 AM - 01:00 PM" },
                { name: "Dr. Michael Ross", dept: "Neurology", days: "Mon, Tue, Wed", time: "11:00 AM - 06:00 PM" },
                { name: "Dr. Lisa Cuddy", dept: "Internal Medicine", days: "Thursday - Saturday", time: "09:00 AM - 03:00 PM" },
                { name: "Dr. James Wilson", dept: "Oncology", days: "Mon, Thu", time: "02:00 PM - 08:00 PM" }
              ].map((doc, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-bold text-slate-800">{doc.name}</td>
                  <td className="py-5 px-6 font-medium text-slate-600">{doc.dept}</td>
                  <td className="py-5 px-6 text-slate-600">{doc.days}</td>
                  <td className="py-5 px-6 font-semibold text-indigo-600">{doc.time}</td>
                  <td className="py-5 px-6 text-right">
                    <button className="text-sm bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg font-bold hover:bg-indigo-600 hover:text-white transition">Book</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Timetable;