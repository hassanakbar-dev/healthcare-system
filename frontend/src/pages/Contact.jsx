import React, { useState } from 'react';
import { Mail, Phone, MapPin, Plus, Minus, Send, Clock, ShieldPlus } from 'lucide-react';

const Contact = () => {
  // State to track which FAQ accordion is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  // Expanded FAQs Data
  const faqs = [
    {
      q: "How do I book an appointment online?",
      a: "You can book directly through our Patient Portal dashboard or call our 24/7 hotline. Registered patients can use the smart booking system."
    },
    {
      q: "Do you accept major health insurance plans?",
      a: "Yes, we accept most major insurance providers. Please contact our billing department to verify your specific coverage."
    },
    {
      q: "How can I access my medical records?",
      a: "Your medical records are securely stored and can be accessed anytime through our unified online platform using your credentials."
    },
    {
      q: "What are the visiting hours for inpatients?",
      a: "General visiting hours are daily from 10:00 AM to 8:00 PM. ICU visiting hours have specific restrictions—please check with the front desk for details."
    },
    {
      q: "Are emergency services available 24/7?",
      a: "Yes, our Emergency Department and trauma center are fully operational 24 hours a day, 7 days a week, with specialist doctors on standby."
    },
    {
      q: "Can I request a prescription refill online?",
      a: "Yes, registered patients can request prescription refills directly through their Patient Dashboard under the 'Prescriptions' tab."
    },
    {
      q: "Do you offer virtual or telehealth consultations?",
      a: "Yes, we offer secure video consultations with our specialists. You can select the 'Join Call' option from your appointment dashboard when it's time."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">We Are Here For You</h1>
          <p className="text-slate-600 text-lg">Have questions or need assistance? Reach out to our team or check our FAQs below.</p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Contact Details Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-indigo-50 text-indigo-600 p-3.5 rounded-2xl"><MapPin size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Our Location</h4>
                <p className="text-slate-600 text-sm">2702 Memory Lane, Chicago, IL 60605</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-indigo-50 text-indigo-600 p-3.5 rounded-2xl"><Phone size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Emergency Line</h4>
                <p className="text-slate-600 text-sm">1-800-100-900 (24/7 Available)</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-indigo-50 text-indigo-600 p-3.5 rounded-2xl"><Mail size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Email Address</h4>
                <p className="text-slate-600 text-sm">support@novacarehospital.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-600" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-600" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <input type="text" placeholder="How can we help you?" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-600" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows="4" placeholder="Write your message here..." className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-600 resize-none"></textarea>
              </div>

              <button type="button" className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-full hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 flex items-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* FAQ Section with Interactive Plus/Minus Toggle */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-slate-600">Click the plus icon to view answers to common questions.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Question Header */}
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-800 bg-slate-50/50 hover:bg-slate-50 transition-colors outline-none"
                >
                  <span className="text-lg">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-200 text-slate-700'}`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Answer Body */}
                {openIndex === index && (
                  <div className="p-6 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;