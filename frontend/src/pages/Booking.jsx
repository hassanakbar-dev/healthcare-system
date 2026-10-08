import React, { useState, useEffect } from 'react';
import { Calendar, User, Stethoscope, Clock, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctorId: '',
    doctorName: '',
    date: '',
    time: '',
    patientName: '',
    phone: '',
    notes: ''
  });

  const [dbDoctors, setDbDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch doctors from backend
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/doctors');
        if (response.ok) {
          const data = await response.json();
          setDbDoctors(data);
        }
      } catch (err) {
        console.error("Error fetching doctors", err);
      }
    };
    fetchDoctors();
  }, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Filter doctors by selected department
  const filteredDoctors = formData.department ? dbDoctors.filter(d => d.specialization === formData.department) : dbDoctors;

  // Extract unique departments from doctors
  const dbDepartments = dbDoctors.map(d => d.specialization);
  
  // Combine default departments with any new ones from DB, ensuring uniqueness
  const defaultDepartments = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Primary Care', 'Ophthalmology'];
  const departments = [...new Set([...defaultDepartments, ...dbDepartments])];

  const timeSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '04:30 PM'];

  const handleBooking = async () => {
    setLoading(true);
    setError(null);
    try {
      // Create a valid datetime format for MySQL (e.g. "2026-10-15 09:00:00")
      // We will just construct it since time is e.g. '09:00 AM'
      let time24 = formData.time; // This is a simplification. Better to parse it properly.
      const match = formData.time.match(/(\d+):(\d+)\s+(AM|PM)/);
      if(match) {
          let hours = parseInt(match[1]);
          if(match[3] === 'PM' && hours !== 12) hours += 12;
          if(match[3] === 'AM' && hours === 12) hours = 0;
          time24 = `${hours.toString().padStart(2, '0')}:${match[2]}:00`;
      } else {
          time24 = '00:00:00';
      }
      
      const appointmentDate = `${formData.date} ${time24}`;

      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          doctor_id: formData.doctorId,
          appointment_date: appointmentDate,
          notes: formData.notes,
          patientName: formData.patientName,
          phone: formData.phone
        })
      });

      if (!response.ok) {
        throw new Error('Failed to book appointment');
      }

      setLoading(false);
      nextStep(); // Go to success step
    } catch (err) {
      console.error(err);
      setError('An error occurred while booking. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Book Your Appointment</h1>
          <p className="text-slate-600">Follow the simple steps below to schedule your visit.</p>
        </div>

        {/* Progress Stepper */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mb-8 flex justify-between items-center relative">
          <div className="absolute top-1/2 left-10 right-10 h-1 bg-slate-100 -z-10 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-10 right-10 h-1 bg-indigo-600 -z-10 -translate-y-1/2 transition-all duration-500" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
          
          {[
            { num: 1, label: 'Department', icon: <Stethoscope size={20} /> },
            { num: 2, label: 'Doctor', icon: <User size={20} /> },
            { num: 3, label: 'Date & Time', icon: <Clock size={20} /> },
            { num: 4, label: 'Confirm', icon: <CheckCircle size={20} /> }
          ].map((item) => (
            <div key={item.num} className="flex flex-col items-center gap-2 bg-white px-2">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${step >= item.num ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-slate-100 text-slate-400'}`}>
                {item.icon}
              </div>
              <span className={`text-xs font-bold ${step >= item.num ? 'text-indigo-600' : 'text-slate-400'}`}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Form Area */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 min-h-[400px] flex flex-col">
          
          {/* STEP 1: Department */}
          {step === 1 && (
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Select Department</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {departments.map((dept, i) => (
                  <div 
                    key={i} 
                    onClick={() => setFormData({...formData, department: dept})}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 font-medium ${formData.department === dept ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-100 hover:border-indigo-300 text-slate-700'}`}
                  >
                    <div className={`p-2 rounded-full ${formData.department === dept ? 'bg-indigo-600 text-white' : 'bg-slate-100'}`}><Stethoscope size={18}/></div>
                    {dept}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Doctor */}
          {step === 2 && (
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Choose a Doctor</h2>
              {filteredDoctors.length === 0 ? (
                 <p className="text-slate-500">No doctors available for this department yet.</p>
              ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredDoctors.map((doc) => (
                  <div 
                    key={doc.id} 
                    onClick={() => setFormData({...formData, doctorId: doc.id, doctorName: doc.name})}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4 ${formData.doctorId === doc.id ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100 hover:border-indigo-300'}`}
                  >
                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 overflow-hidden">
                      <User size={24} />
                    </div>
                    <div>
                      <h4 className={`font-bold ${formData.doctorId === doc.id ? 'text-indigo-700' : 'text-slate-800'}`}>{doc.name}</h4>
                      <p className="text-sm text-slate-500">{doc.specialization}</p>
                    </div>
                  </div>
                ))}
              </div>
              )}
            </div>
          )}

          {/* STEP 3: Date & Time */}
          {step === 3 && (
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Select Date & Time</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Choose Date</label>
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-indigo-600 bg-slate-50 text-slate-700 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Available Time Slots</label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time, i) => (
                      <div 
                        key={i} 
                        onClick={() => setFormData({...formData, time: time})}
                        className={`p-3 text-center rounded-xl border-2 cursor-pointer transition-all font-bold text-sm ${formData.time === time ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-100 hover:border-indigo-300 text-slate-600'}`}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Confirm Details */}
          {step === 4 && (
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Patient Details</h2>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={formData.patientName}
                  onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                  className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-indigo-600 bg-slate-50"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-indigo-600 bg-slate-50"
                />
                <textarea 
                  placeholder="Any notes for the doctor? (Optional)" 
                  rows="3"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-indigo-600 bg-slate-50 resize-none"
                ></textarea>
                
                {/* Summary Box */}
                <div className="bg-indigo-50 p-4 rounded-xl mt-4">
                  <h4 className="font-bold text-indigo-900 mb-2">Appointment Summary</h4>
                  <p className="text-sm text-indigo-700"><strong>Doctor:</strong> {formData.doctorName || 'Not selected'} ({formData.department})</p>
                  <p className="text-sm text-indigo-700"><strong>When:</strong> {formData.date || 'No date'}, at {formData.time || 'No time'}</p>
                </div>
                {error && <p className="text-red-500 text-sm font-bold mt-2">{error}</p>}
              </div>
            </div>
          )}

          {/* STEP 5: Success Message (After Submission) */}
          {step === 5 && (
            <div className="flex-grow flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={48} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Booking Confirmed!</h2>
              <p className="text-slate-600 mb-8 max-w-md">Your appointment with {formData.doctorName} has been successfully scheduled for {formData.date} at {formData.time}. We have sent the details to your phone.</p>
              <Link to="/" className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-indigo-700 transition">
                Return to Home
              </Link>
            </div>
          )}

          {/* Navigation Buttons */}
          {step < 5 && (
            <div className="flex justify-between mt-10 pt-6 border-t border-slate-100">
              <button 
                onClick={prevStep} 
                disabled={step === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${step === 1 ? 'opacity-0 cursor-default' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                <ChevronLeft size={18} /> Back
              </button>

              {step < 4 ? (
                <button 
                  onClick={nextStep} 
                  className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 shadow-md transition-all hover:-translate-y-0.5"
                >
                  Next Step <ChevronRight size={18} />
                </button>
              ) : (
                <button 
                  onClick={handleBooking} 
                  disabled={loading}
                  className="flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 shadow-md transition-all hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {loading ? 'Booking...' : 'Confirm Booking'} <CheckCircle size={18} />
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Booking;