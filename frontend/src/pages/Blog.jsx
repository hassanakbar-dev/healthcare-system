import React from 'react';
import { ArrowUpRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { 
      id: "heart-healthy-foods",
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800", 
      title: "Top 10 Heart-Healthy Foods", 
      tag: "Nutrition", 
      date: "Oct 1, 2026",
      shortDesc: "Discover essential tips and practices to improve your daily routine and long-term heart health...",
      fullDesc: "A heart-healthy diet is crucial for cardiovascular longevity. Incorporate foods rich in omega-3 fatty acids like salmon, fiber-rich oats, nuts, and leafy greens. Avoid trans fats and excessive sodium to keep your blood pressure in check. Fresh berries, avocados, and dark chocolate in moderation also provide essential antioxidants that reduce inflammation and improve blood flow."
    },
    { 
      id: "mental-health",
      // Group therapy/Counseling ki direct image
      img: "https://images.pexels.com/photos/4101156/pexels-photo-4101156.jpeg?auto=compress&cs=tinysrgb&w=800", 
      title: "Understanding Mental Health", 
      tag: "Wellness", 
      date: "Sep 28, 2026",
      shortDesc: "Mental wellness is just as important as physical health. Learn how to manage stress and anxiety...",
      fullDesc: "Mental wellness is just as important as physical health. Learn how to manage stress, practice mindfulness, and recognize the early signs of burnout. Seeking professional help when needed is a sign of strength, not weakness. Regular physical exercise, adequate sleep, and maintaining strong social connections are proven methods to support your mental and emotional well-being."
    },
    { 
      id: "physical-therapy",
      // Physical Therapy/Rehab session ki direct image
      img: "https://images.pexels.com/photos/5799379/pexels-photo-5799379.jpeg?auto=compress&cs=tinysrgb&w=800", 
      title: "Physical Therapy Benefits", 
      tag: "Rehab", 
      date: "Sep 24, 2026",
      shortDesc: "Explore how physical therapy can accelerate recovery from injuries and improve mobility...",
      fullDesc: "Physical therapy isn't just for post-surgery recovery. It helps manage chronic pain, prevents injuries, and improves overall mobility and flexibility. A tailored physical therapy plan can restore function and improve your quality of life, especially for those suffering from arthritis, sports injuries, or age-related mobility issues."
    },
    { 
      id: "immune-system",
      // Health shield/Immunity ki direct image
      img: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800", 
      title: "Protecting Your Immune System", 
      tag: "Health Tips", 
      date: "Sep 20, 2026",
      shortDesc: "Your immune system is your body's defense mechanism. Find out how to strengthen it naturally...",
      fullDesc: "Your immune system is your body's defense mechanism against infections and diseases. Strengthen it naturally by getting enough vitamin C, D, and Zinc. Regular exercise, adequate hydration, and managing stress levels are proven ways to keep your immunity robust. Don't forget the importance of regular health check-ups to monitor your vitamin levels."
    },
    { 
      id: "importance-of-sleep",
      img: "https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=800", 
      title: "The Importance of Sleep", 
      tag: "Lifestyle", 
      date: "Sep 15, 2026",
      shortDesc: "Quality sleep is the foundation of good health. Read about the stages of sleep and hygiene...",
      fullDesc: "Quality sleep is the foundation of good health. Aim for 7-9 hours of uninterrupted sleep every night. Good sleep hygiene includes keeping a consistent schedule, avoiding screens before bed, and creating a dark, cool sleeping environment. Lack of sleep is linked to numerous health issues including obesity, weakened immunity, and cognitive decline."
    },
    { 
      id: "managing-diabetes",
      img: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800", 
      title: "Managing Diabetes Daily", 
      tag: "Care", 
      date: "Sep 10, 2026",
      shortDesc: "Living with diabetes requires daily care. Get expert advice on blood sugar monitoring and diet...",
      fullDesc: "Living with diabetes requires daily care and attention. Get expert advice on continuous glucose monitoring, balancing carbohydrate intake, and the importance of regular physical activity. Small daily habits make a massive difference in long-term control. Working closely with an endocrinologist and a registered dietitian can help you create a sustainable management plan."
    }
  ];

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Health Hub & News</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-56 bg-slate-200 overflow-hidden shrink-0">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{post.tag}</span>
                  <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{post.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{post.shortDesc}</p>
                
                <Link 
                  to={`/blog/${post.id}`} 
                  state={{ postData: post }}
                  className="text-indigo-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all w-fit mt-auto"
                >
                  Read More <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;