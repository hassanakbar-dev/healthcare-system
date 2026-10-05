import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, Stethoscope, Bone, Calendar, UserSearch, PhoneCall, Clock, 
  CheckCircle, ArrowUpRight, Activity, Brain, ShieldCheck, Syringe, Star 
} from 'lucide-react';

const Home = () => {
  return (
    <div className="font-sans text-slate-800 overflow-hidden bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16 pb-32 px-4 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10 gap-12">
          
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold mb-4 bg-indigo-100/50 px-4 py-1.5 rounded-full">
              <HeartPulse size={18} />
              <span className="text-sm tracking-wide uppercase">Your Health Our Priority</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Your Health <br /> Our Priority
            </h1>
            <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
              We provide comprehensive healthcare services with a personal touch, ensuring you receive the best care possible.
            </p>

            {/* Select Doctor Form */}
            <div className="bg-white p-2 rounded-full shadow-lg shadow-indigo-100 flex flex-col sm:flex-row items-center max-w-2xl mx-auto lg:mx-0 border border-slate-100">
              <select className="bg-transparent text-slate-600 outline-none px-4 py-3 border-b sm:border-b-0 sm:border-r border-slate-200 w-full sm:w-auto flex-1 cursor-pointer">
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
              </select>
              <select className="bg-transparent text-slate-600 outline-none px-4 py-3 w-full sm:w-auto flex-1 cursor-pointer border-b sm:border-b-0 sm:border-r border-slate-200">
                <option>Select Doctor</option>
                <option>Dr. Sarah</option>
                <option>Dr. Ahmed</option>
                <option>Dr. Hull</option>
              </select>
              <Link to="/booking" className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-indigo-700 transition-all w-full sm:w-auto mt-2 sm:mt-0 shadow-md text-center flex items-center justify-center">
                Find Doctors
              </Link>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-indigo-200/40 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative w-[320px] h-[400px] sm:w-[400px] sm:h-[500px] bg-indigo-100 rounded-t-[200px] rounded-b-full flex items-end justify-center overflow-hidden border-4 border-white shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80" 
                 alt="Main Doctor" 
                 className="relative z-10 w-full h-full object-cover object-top"
               />
            </div>

            {/* Floating Badges */}
            <div className="hidden sm:flex absolute top-24 left-0 lg:left-10 bg-white/90 backdrop-blur px-5 py-3 rounded-2xl shadow-xl shadow-indigo-100 items-center gap-3 animate-bounce-slow">
              <div className="bg-red-50 p-2 rounded-lg text-red-500"><HeartPulse size={20} /></div>
              <span className="font-semibold text-slate-700">Cardiology</span>
            </div>
            
            <div className="hidden sm:flex absolute bottom-32 -left-4 bg-white/90 backdrop-blur px-5 py-3 rounded-2xl shadow-xl shadow-indigo-100 items-center gap-3">
              <div className="bg-purple-50 p-2 rounded-lg text-purple-500"><Stethoscope size={20} /></div>
              <span className="font-semibold text-slate-700">Neurology</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Overlapping Info Cards */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Calendar size={28}/>, title: "Request", subtitle: "Appointment", color: "text-indigo-600" },
            { icon: <UserSearch size={28}/>, title: "Find", subtitle: "Doctors", color: "text-blue-500" },
            { icon: <PhoneCall size={28}/>, title: "Emergency", subtitle: "Call", color: "text-purple-500" },
            { icon: <Clock size={28}/>, title: "24/7", subtitle: "Support", color: "text-indigo-600" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 flex items-center gap-4 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-slate-50 group">
              <div className={`${item.color} bg-slate-50 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>{item.icon}</div>
              <div>
                <p className="text-slate-500 text-sm font-medium leading-tight">{item.title}</p>
                <h3 className="text-slate-800 font-bold text-lg leading-tight">{item.subtitle}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative w-full">
            <div className="aspect-[4/3] bg-slate-200 rounded-3xl overflow-hidden relative shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1000&auto=format&fit=crop" 
                alt="Medical Team" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 right-4 sm:right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <div className="flex text-yellow-400 mb-2 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" className="text-yellow-400" />)}
              </div>
              <p className="font-bold text-slate-800">Trustpilot</p>
              <p className="text-xs text-slate-500 mt-1">TrustScore 4.8 | 2k Reviews</p>
            </div>
          </div>

          <div className="flex-1 lg:pl-10 mt-10 lg:mt-0 text-center lg:text-left">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2 block">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Providing Exceptional Healthcare with a focus on patient.
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              At NovaCare, our mission is to provide exceptional healthcare services with a focus on patient-centered care. We are dedicated to improving the health and well-being of our community through innovation and compassion.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <Link to="/about" className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-indigo-700 transition flex items-center gap-2 shadow-lg shadow-indigo-200 hover:-translate-y-1">
                Learn More <ArrowUpRight size={18} />
              </Link>
              
              <div className="flex items-center gap-4 sm:border-l border-slate-200 sm:pl-8">
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-md">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Dr" />
                </div>
                <div className="text-left">
                  <p className="font-dancing-script text-2xl text-slate-800 font-bold italic leading-none">Dr. Hull</p>
                  <span className="text-xs text-slate-500">Chief Medical Officer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-16">
            We provide a wide range <br className="hidden sm:block"/> of medical services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <HeartPulse size={32}/>, title: "Cardiology", desc: "Expert diagnosis and treatment of heart and cardiovascular conditions.", path: "/departments" },
              { icon: <Brain size={32}/>, title: "Neurology", desc: "Advanced care for neurological disorders affecting the brain and nervous system.", path: "/departments" },
              { icon: <Bone size={32}/>, title: "Orthopedics", desc: "Comprehensive care for bones, joints, ligaments, tendons, and muscles.", path: "/departments" },
              { icon: <Activity size={32}/>, title: "Dental Care", desc: "Complete dental care services from routine checkups to complex procedures.", path: "/departments" },
              { icon: <Syringe size={32}/>, title: "Vaccination", desc: "Immunization services to protect you and your family from preventable diseases.", path: "/departments" },
              { icon: <ShieldCheck size={32}/>, title: "Primary Care", desc: "Your first point of contact for routine checkups, illness, and preventive care.", path: "/departments" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 text-left border border-slate-100 group">
                <div className="text-indigo-600 bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">{service.desc}</p>
                
                <Link to={service.path} className="text-indigo-600 font-medium flex items-center gap-1 hover:gap-2 transition-all w-fit cursor-pointer">
                  Learn More <ArrowUpRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3rem] p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to take control <br className="hidden sm:block"/> of your health?
            </h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
              Book your appointment today and experience healthcare that puts you first. Our team of experts is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition shadow-lg hover:-translate-y-1 inline-block">
                Book Appointment Now
              </Link>
              <Link to="/contact" className="bg-indigo-700 text-white border border-indigo-500 px-8 py-4 rounded-full font-bold hover:bg-indigo-800 transition hover:-translate-y-1 inline-block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;