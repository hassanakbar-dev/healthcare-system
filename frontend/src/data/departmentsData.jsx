import React from 'react';
import { HeartPulse, Brain, Bone, ShieldCheck, Eye, Baby } from 'lucide-react';

export const departmentData = {
  cardiology: {
    title: 'Cardiology',
    icon: <HeartPulse size={48} />,
    color: 'from-rose-500 to-red-600',
    description: 'Advanced diagnostics, heart surgeries, and cardiovascular rehabilitation programs for comprehensive heart care.',
    overview: [
      'Our Cardiology Department is recognized globally for its excellence in diagnosing, managing, and treating a wide spectrum of heart and vascular conditions. We bring together a multidisciplinary team of board-certified cardiologists, cardiovascular surgeons, and specialized nurses dedicated to providing holistic and personalized care.',
      'Equipped with state-of-the-art technology, we offer both non-invasive diagnostic procedures and complex surgical interventions. From your initial consultation to post-treatment rehabilitation, we are committed to ensuring your heart health is in the best possible hands.',
      'We emphasize preventive care and early detection, offering comprehensive screening programs designed to identify risks before they develop into critical conditions. Our continuous research and clinical trials also mean our patients have access to the latest therapies available.'
    ],
    whyChooseUs: [
      'Top-ranked cardiovascular specialists with decades of experience.',
      '24/7 emergency heart care and rapid response stroke team.',
      'Advanced hybrid operating rooms for complex procedures.',
      'Comprehensive cardiac rehabilitation and wellness programs.'
    ],
    services: [
      { name: 'Echocardiography & Stress Testing', desc: 'Non-invasive imaging and exercise tests to evaluate heart function, valve health, and blood flow dynamically.' },
      { name: 'Coronary Angiography & Angioplasty', desc: 'Minimally invasive procedures utilizing advanced catheters to open blocked arteries and restore normal blood flow instantly.' },
      { name: 'Electrophysiology', desc: 'Advanced diagnosis and treatment for irregular heartbeats (arrhythmias), atrial fibrillation, and pacemaker implantations.' },
      { name: 'Heart Failure Management', desc: 'Specialized care plans including medication optimization, lifestyle changes, and advanced therapies like ventricular assist devices.' },
      { name: 'Cardiac Rehabilitation', desc: 'Customized exercise and education programs designed to help you safely recover and rebuild strength after a heart event.' }
    ],
    facilities: [
      '24/7 Dedicated Cardiac Catheterization Lab',
      'Intensive Cardiac Care Unit (CCU)',
      'Advanced 3D Echocardiography Suites',
      'High-Resolution Cardiac MRI and CT Scanning'
    ],
    faqs: [
      { q: 'What should I bring to my first cardiology appointment?', a: 'Please bring your photo ID, insurance card, a complete list of current medications (including supplements), and any previous medical records or test results related to your heart health.' },
      { q: 'How do I know if I need a stress test?', a: 'Your cardiologist may recommend a stress test if you experience symptoms like chest pain, shortness of breath, or unexplained fatigue, in order to safely evaluate how your heart handles physical exertion.' },
      { q: 'What is the typical recovery time after an angioplasty?', a: 'Most patients can return home the same day or the following morning. Normal, light activities can usually be resumed within a few days, but your doctor will provide specific, personalized guidelines.' }
    ],
    doctors: [
      { name: 'Dr. Sarah Jenkins', role: 'Head of Cardiology', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80' },
      { name: 'Dr. Michael Chen', role: 'Interventional Cardiologist', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=80'
  },
  neurology: {
    title: 'Neurology',
    icon: <Brain size={48} />,
    color: 'from-violet-500 to-purple-600',
    description: 'Comprehensive care and treatment for stroke, epilepsy, and complex nervous system disorders.',
    overview: [
      'Our Neurology department offers expert diagnosis and treatment for disorders of the brain, spinal cord, and peripheral nerves. The nervous system is complex, and our team of highly trained neurologists, neurosurgeons, and specialized therapists work collaboratively to deliver cutting-edge care.',
      'We utilize the most advanced neuroimaging and neurodiagnostic techniques available today, enabling precise diagnoses and targeted treatment plans. From managing chronic conditions like migraines and Parkinson’s to acute stroke interventions, our focus is always on preserving and enhancing cognitive and motor functions.',
      'We believe in a compassionate approach, ensuring patients and their families are fully informed and supported throughout their healthcare journey with dedicated counseling and rehabilitation.'
    ],
    whyChooseUs: [
      'Certified Comprehensive Stroke Center with 24/7 availability.',
      'Pioneering research and access to neuro-clinical trials.',
      'Dedicated neuro-intensive care unit (Neuro-ICU).',
      'Multidisciplinary teams integrating physical and cognitive therapy.'
    ],
    services: [
      { name: 'Stroke Center & Acute Care', desc: 'Rapid response evaluation and intervention for acute strokes, utilizing clot-busting medications and endovascular thrombectomy.' },
      { name: 'Epilepsy Monitoring Unit', desc: 'Advanced continuous EEG monitoring for accurate diagnosis, seizure classification, and surgical evaluation of epilepsy.' },
      { name: 'Movement Disorders Clinic', desc: 'Specialized management for Parkinson’s disease, essential tremor, and dystonia, including Deep Brain Stimulation (DBS) management.' },
      { name: 'Multiple Sclerosis Center', desc: 'Comprehensive care including disease-modifying therapies, symptom management, and infusion services for MS patients.' },
      { name: 'Neuropsychological Testing', desc: 'In-depth cognitive evaluations to assist in diagnosing dementia, Alzheimer’s, and traumatic brain injuries.' }
    ],
    facilities: [
      'State-of-the-Art Neuro-Intensive Care Unit',
      'Advanced 3T MRI and PET Scanning',
      'Continuous EEG Monitoring Suites',
      'Dedicated Neuro-Rehabilitation Gymnasium'
    ],
    faqs: [
      { q: 'What is the difference between a neurologist and a neurosurgeon?', a: 'A neurologist diagnoses and treats neurological disorders using non-surgical methods (like medication or therapy), while a neurosurgeon is specifically trained to perform surgical procedures on the brain and spine.' },
      { q: 'How can I prepare for an EEG test?', a: 'Wash your hair the night before or morning of the test, but do not use any conditioners, hair creams, sprays, or styling gels. Your doctor will advise if you need to adjust any medications.' },
      { q: 'What are the early warning signs of a stroke?', a: 'Remember B.E. F.A.S.T.: Balance loss, Eyesight changes, Facial drooping, Arm weakness, Speech difficulty, and Time to call emergency services immediately.' }
    ],
    doctors: [
      { name: 'Dr. Elena Rodriguez', role: 'Chief Neurologist', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80' },
      { name: 'Dr. James Wilson', role: 'Neurosurgeon', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1600&q=80'
  },
  orthopedics: {
    title: 'Orthopedics',
    icon: <Bone size={48} />,
    color: 'from-blue-500 to-cyan-600',
    description: 'Joint replacements, sports injuries, and comprehensive physical therapy for optimal mobility.',
    overview: [
      'The Orthopedics department specializes in the diagnosis, treatment, and rehabilitation of musculoskeletal injuries and diseases. Whether you are dealing with a sports-related injury, arthritis, or require a complex joint replacement, our team is dedicated to restoring your mobility and quality of life.',
      'Our orthopedic surgeons are leaders in minimally invasive and robotic-assisted surgical techniques, which significantly reduce recovery time, minimize pain, and improve surgical precision. We treat patients of all ages, from pediatric bone conditions to geriatric joint care.',
      'Recovery doesn\'t end in the operating room. We offer an integrated physical therapy and rehabilitation center to ensure a seamless transition from treatment to full functionality.'
    ],
    whyChooseUs: [
      'Pioneers in robotic-assisted joint replacement surgery.',
      'Dedicated sports medicine clinic for athletes of all levels.',
      'Comprehensive pain management and non-surgical options.',
      'On-site state-of-the-art physical therapy center.'
    ],
    services: [
      { name: 'Total Joint Replacement', desc: 'Advanced hip, knee, and shoulder replacements utilizing durable materials and minimally invasive surgical approaches.' },
      { name: 'Sports Medicine & Arthroscopy', desc: 'Expert treatment for ACL tears, rotator cuff injuries, and meniscus tears to get athletes back in the game safely.' },
      { name: 'Spine Surgery & Care', desc: 'Comprehensive solutions for back pain, herniated discs, spinal stenosis, and complex spinal deformities.' },
      { name: 'Pediatric Orthopedics', desc: 'Specialized care for growing bones, treating conditions like scoliosis, clubfoot, and congenital abnormalities.' },
      { name: 'Physical & Occupational Therapy', desc: 'Personalized rehabilitation programs to build strength, flexibility, and independence following injury or surgery.' }
    ],
    facilities: [
      'Robotic Surgery Operation Theaters',
      'High-resolution Musculoskeletal Ultrasound',
      'Advanced Gait Analysis Laboratory',
      'Custom Orthotics and Prosthetics Lab'
    ],
    faqs: [
      { q: 'How do I know if I need a joint replacement?', a: 'Joint replacement is typically considered when severe joint pain limits your everyday activities, and conservative treatments like medication, physical therapy, and injections no longer provide adequate relief.' },
      { q: 'What is the recovery like after ACL surgery?', a: 'Recovery generally takes 6 to 9 months of dedicated physical therapy to regain full strength and stability, though you will be walking with assistance much sooner.' },
      { q: 'Do you offer non-surgical treatments for back pain?', a: 'Yes, we always explore non-surgical options first, including specialized physical therapy, epidural steroid injections, acupuncture, and anti-inflammatory medications.' }
    ],
    doctors: [
      { name: 'Dr. Robert Thompson', role: 'Lead Orthopedic Surgeon', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80' },
      { name: 'Dr. Lisa Patel', role: 'Sports Medicine Specialist', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=300&q=80' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80'
  },
  pediatrics: {
    title: 'Pediatrics',
    icon: <Baby size={48} />,
    color: 'from-pink-500 to-rose-400',
    description: 'Gentle, expert care for infants, children, and adolescents focusing on developmental health.',
    overview: [
      'Our Pediatrics department provides compassionate and comprehensive care for your child from infancy through adolescence. We understand that children are not just small adults, and our board-certified pediatricians are specially trained to address their unique physical, emotional, and developmental needs.',
      'We have designed our pediatric wings to be child-friendly, colorful, and welcoming to reduce the anxiety often associated with medical visits. Our approach is family-centered, meaning we actively involve parents in all decision-making and health education.',
      'From routine immunizations and well-child checkups to managing chronic childhood illnesses and behavioral disorders, we are here to support your child\'s health at every critical stage of their growth.'
    ],
    whyChooseUs: [
      'Child-friendly environment designed to reduce anxiety.',
      '24/7 dedicated pediatric emergency care unit.',
      'Access to top pediatric subspecialists in one location.',
      'Comprehensive developmental and behavioral support.'
    ],
    services: [
      { name: 'Well-Child Visits & Immunizations', desc: 'Regular checkups to track growth, development milestones, and administer standard vaccines to prevent diseases.' },
      { name: 'Pediatric Emergency Care', desc: 'Rapid, specialized emergency intervention tailored specifically for the physiology and needs of children.' },
      { name: 'Developmental & Behavioral Assessments', desc: 'Expert evaluation and support for conditions such as ADHD, autism spectrum disorders, and learning delays.' },
      { name: 'Pediatric Subspecialty Clinics', desc: 'Access to pediatric cardiology, neurology, and gastroenterology without leaving our facility.' },
      { name: 'Adolescent Medicine', desc: 'Confidential, age-appropriate care addressing the unique physical and psychological changes during teenage years.' }
    ],
    facilities: [
      'Colorful, Interactive Waiting Areas',
      'Dedicated Pediatric ICU (PICU)',
      'Neonatal Intensive Care Unit (NICU)',
      'Sensory-friendly Examination Rooms'
    ],
    faqs: [
      { q: 'When should my baby have their first checkup?', a: 'Your baby’s first checkup usually occurs 3 to 5 days after birth, followed by regular visits at 1, 2, 4, 6, 9, and 12 months of age.' },
      { q: 'Are vaccinations safe for my child?', a: 'Yes. Vaccines undergo rigorous safety testing and are the safest, most effective way to protect your child from serious, preventable diseases.' },
      { q: 'What should I do if my child has a high fever?', a: 'If your infant is under 3 months and has a fever over 100.4°F, seek immediate care. For older children, ensure they are hydrated and comfortable, and contact us if the fever is persistent or accompanied by severe symptoms.' }
    ],
    doctors: [
      { name: 'Dr. Emily Carter', role: 'Chief Pediatrician', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80' },
      { name: 'Dr. David Lee', role: 'Pediatric Specialist', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80'
  },
  'primary-care': {
    title: 'Primary Care',
    icon: <ShieldCheck size={48} />,
    color: 'from-emerald-500 to-teal-600',
    description: 'Your first line of defense with regular health screenings, wellness plans, and chronic condition management.',
    overview: [
      'Primary Care is the absolute foundation of your long-term health journey. Our primary care physicians act as your dedicated healthcare partners, coordinating all aspects of your medical care and guiding you through the complex healthcare system.',
      'We focus heavily on prevention, early detection, and managing chronic conditions to keep you out of the hospital and living your best life. By building a long-term relationship with you, we can better understand your medical history, lifestyle, and personalized risk factors.',
      'Whether you need a routine physical, treatment for a minor illness, or comprehensive management of conditions like diabetes or hypertension, our Primary Care team provides compassionate, evidence-based care tailored to you.'
    ],
    whyChooseUs: [
      'Long-term, personalized doctor-patient relationships.',
      'Same-day appointments for urgent care needs.',
      'Seamless coordination with specialized departments.',
      'Focus on holistic lifestyle and preventive wellness.'
    ],
    services: [
      { name: 'Annual Physicals & Wellness Exams', desc: 'Comprehensive health evaluations, routine blood work, and personalized health planning.' },
      { name: 'Chronic Disease Management', desc: 'Expert ongoing care and monitoring for diabetes, high blood pressure, asthma, and cholesterol.' },
      { name: 'Preventive Screenings', desc: 'Scheduled screenings for cancer, heart disease, and osteoporosis based on your age and risk factors.' },
      { name: 'Women\'s & Men\'s Health', desc: 'Gender-specific preventive care, reproductive health, and hormone management services.' },
      { name: 'Lifestyle & Nutritional Counseling', desc: 'Professional guidance on diet, exercise, weight management, and smoking cessation.' }
    ],
    facilities: [
      'On-site Diagnostic Laboratory',
      'Modern, Comfortable Examination Rooms',
      'Telehealth & Virtual Visit Capabilities',
      'In-house Vaccination Center'
    ],
    faqs: [
      { q: 'How often should I get a routine physical?', a: 'For most healthy adults, an annual physical is recommended. It allows your doctor to monitor baseline health metrics and catch potential issues early.' },
      { q: 'Do I need a primary care doctor if I am healthy?', a: 'Yes! Establishing a relationship with a primary care doctor ensures you have a trusted professional who knows your baseline health in case you do get sick or injured.' },
      { q: 'Can I do a telehealth visit for primary care?', a: 'Absolutely. We offer secure virtual visits for many routine concerns, follow-ups, and medication management for your convenience.' }
    ],
    doctors: [
      { name: 'Dr. Amanda Foster', role: 'Lead Primary Care Physician', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80' },
      { name: 'Dr. Marcus Johnson', role: 'Family Medicine Doctor', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80'
  },
  ophthalmology: {
    title: 'Ophthalmology',
    icon: <Eye size={48} />,
    color: 'from-indigo-500 to-blue-600',
    description: 'Advanced vision correction, cataract surgery, and comprehensive care for a lifetime of healthy eyesight.',
    overview: [
      'Our Ophthalmology department is completely dedicated to preserving and improving your vision. We offer a full spectrum of world-class eye care services, ranging from routine eye exams and prescription lens fittings to highly advanced surgical procedures.',
      'Our facility is equipped with state-of-the-art diagnostic imaging and laser technology, allowing us to detect eye conditions like glaucoma and macular degeneration at their earliest, most treatable stages. We are committed to utilizing the safest, most effective interventions available.',
      'Vision is arguably our most precious sense. Our team of board-certified ophthalmologists and optometrists works tirelessly to ensure you receive clear, comfortable vision and compassionate care at every visit.'
    ],
    whyChooseUs: [
      'Leaders in bladeless, laser-assisted cataract surgery.',
      'Comprehensive care for complex retinal and corneal diseases.',
      'On-site optical shop with a wide selection of premium eyewear.',
      'Pediatric eye care specialists on staff.'
    ],
    services: [
      { name: 'Comprehensive Eye Exams', desc: 'Detailed assessments of visual acuity and comprehensive checks for underlying eye diseases.' },
      { name: 'Advanced Cataract Surgery', desc: 'Laser-assisted surgery offering premium intraocular lenses (IOLs) to correct astigmatism and presbyopia.' },
      { name: 'Glaucoma Management', desc: 'Early detection and advanced medical, laser, and surgical treatments to lower intraocular pressure.' },
      { name: 'LASIK & Refractive Surgery', desc: 'Customized laser vision correction to significantly reduce or eliminate the need for glasses and contacts.' },
      { name: 'Retinal Disease Treatment', desc: 'Specialized care for diabetic retinopathy, macular degeneration, and retinal detachments.' }
    ],
    facilities: [
      'Advanced Laser Vision Correction Suite',
      'Optical Coherence Tomography (OCT) Imaging',
      'Dedicated Retinal Treatment Rooms',
      'Full-Service Optical Boutique'
    ],
    faqs: [
      { q: 'At what age should I start getting annual eye exams?', a: 'Adults with no risk factors should have a baseline exam at age 40, and then every 1-2 years based on their doctor\'s recommendation. Seniors and those with diabetes should be examined annually.' },
      { q: 'Is cataract surgery painful?', a: 'No, cataract surgery is generally painless. Patients are given localized numbing drops and mild sedation, and most report only a slight pressure sensation during the quick procedure.' },
      { q: 'Am I a candidate for LASIK?', a: 'Good candidates are typically over 18, have had a stable prescription for at least a year, and have healthy corneas. We offer free consultations to determine your eligibility.' }
    ],
    doctors: [
      { name: 'Dr. Sophia Wang', role: 'Chief Ophthalmologist', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80' },
      { name: 'Dr. Richard Evans', role: 'Retinal Specialist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1584036533827-45bce166ad94?auto=format&fit=crop&w=1600&q=80'
  }
};
