import React from 'react';
import { ArrowUpRight, Clock, User, CalendarDays, ArrowRight, TrendingUp, PlayCircle, Mail, BookmarkPlus, Heart, Share2, MessageCircle, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { 
      id: "heart-healthy-foods",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80", 
      title: "Top 10 Heart-Healthy Foods for a Longer Life", 
      tag: "Nutrition", 
      date: "Oct 1, 2026",
      readTime: "5 min read",
      author: "Dr. Sarah Jenkins",
      shortDesc: "Discover essential tips and practices to improve your daily routine and long-term heart health...",
    },
    { 
      id: "mental-health",
      img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80", 
      title: "Understanding Mental Health and Mindfulness", 
      tag: "Wellness", 
      date: "Sep 28, 2026",
      readTime: "7 min read",
      author: "Dr. Alan Grant",
      shortDesc: "Mental wellness is just as important as physical health. Learn how to manage stress and anxiety...",
    },
    { 
      id: "physical-therapy",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80", 
      title: "How Physical Therapy Accelerates Recovery", 
      tag: "Rehab", 
      date: "Sep 24, 2026",
      readTime: "4 min read",
      author: "Dr. David Hull",
      shortDesc: "Explore how physical therapy can accelerate recovery from injuries and improve mobility...",
    },
    { 
      id: "immune-system",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80", 
      title: "Protecting Your Immune System Naturally", 
      tag: "Health Tips", 
      date: "Sep 20, 2026",
      readTime: "6 min read",
      author: "Dr. Allison Cameron",
      shortDesc: "Your immune system is your body's defense mechanism. Find out how to strengthen it naturally...",
    },
    { 
      id: "importance-of-sleep",
      img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80", 
      title: "The Importance of Sleep for Cognitive Function", 
      tag: "Lifestyle", 
      date: "Sep 15, 2026",
      readTime: "8 min read",
      author: "Dr. Eric Foreman",
      shortDesc: "Quality sleep is the foundation of good health. Read about the stages of sleep and hygiene...",
    },
    { 
      id: "managing-diabetes",
      img: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80", 
      title: "Managing Diabetes Daily: Expert Advice", 
      tag: "Care", 
      date: "Sep 10, 2026",
      readTime: "5 min read",
      author: "Dr. Lisa Cuddy",
      shortDesc: "Living with diabetes requires daily care. Get expert advice on blood sugar monitoring and diet...",
    }
  ];

  return (
    <div className="pt-28 pb-32 px-4 min-h-screen bg-slate-50 font-sans selection:bg-indigo-100">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Header & Categories */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-black text-sm uppercase tracking-widest mb-6 block">Medical Journal</span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tight">Health Hub & News</h1>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">Stay updated with the latest medical news, health tips, and wellness articles written by our world-class medical experts.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {["All Articles", "Nutrition", "Wellness", "Rehab", "Health Tips", "Lifestyle", "Pediatrics"].map((cat, i) => (
            <button key={i} className={`px-8 py-4 rounded-full font-black text-base transition-all shadow-md hover:scale-105 ${i === 0 ? 'bg-indigo-600 text-white shadow-indigo-300' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-indigo-600'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* 2. Featured Post & 3. Trending Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-32">
           {/* Featured Post */}
           <div className="lg:col-span-2 bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 group cursor-pointer hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-700 flex flex-col relative">
             <div className="h-[500px] overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 to-transparent z-10 mix-blend-multiply"></div>
               <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80" alt="Featured" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
               <div className="absolute top-10 left-10 z-20">
                  <span className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-widest shadow-xl">Featured Article</span>
               </div>
             </div>
             <div className="p-12 md:p-16 relative z-20 bg-white flex-grow flex flex-col justify-center">
               <div className="flex items-center gap-6 text-sm font-black text-slate-400 mb-8 uppercase tracking-widest">
                 <span className="flex items-center gap-2"><CalendarDays size={20}/> Oct 5, 2026</span>
                 <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                 <span className="flex items-center gap-2"><Clock size={20}/> 10 min read</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 group-hover:text-indigo-600 transition-colors leading-tight">The Future of AI in Modern Healthcare Diagnostics</h2>
               <p className="text-slate-600 text-xl mb-10 leading-relaxed font-light">
                 Explore how artificial intelligence and machine learning are revolutionizing the way doctors diagnose diseases, predict patient outcomes, and personalize treatment plans like never before.
               </p>
               <Link to="#" className="inline-flex items-center gap-4 bg-indigo-50 text-indigo-700 w-fit px-10 py-5 rounded-[1.5rem] font-black hover:bg-indigo-600 hover:text-white transition-colors text-lg shadow-inner">
                 Read Full Article <ArrowRight size={24} />
               </Link>
             </div>
           </div>

           {/* Trending Sidebar */}
           <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-slate-100 flex flex-col">
              <h3 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4"><TrendingUp size={36} className="text-rose-500"/> Trending Now</h3>
              <div className="space-y-10 flex-grow">
                 {[
                   { title: "5 Myths About Flu Shots Busted", date: "Oct 2, 2026" },
                   { title: "The Rise of Telemedicine Post-2020", date: "Sep 29, 2026" },
                   { title: "Yoga for Lower Back Pain Relief", date: "Sep 25, 2026" },
                   { title: "Superfoods: What Works & What Doesn't", date: "Sep 21, 2026" }
                 ].map((trend, i) => (
                    <div key={i} className="group cursor-pointer border-b-2 border-slate-50 pb-8 last:border-0 last:pb-0">
                       <p className="text-sm font-black uppercase tracking-widest text-indigo-400 mb-3">{trend.date}</p>
                       <h4 className="font-black text-2xl text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug">{trend.title}</h4>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* 4. Blog Grid */}
        <div className="mb-32">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900">Latest Articles</h2>
            <Link to="#" className="text-indigo-600 font-black text-xl hover:underline hidden md:block">View all articles →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-[3rem] overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col group cursor-pointer">
                <div className="h-72 bg-slate-200 overflow-hidden shrink-0 relative">
                  <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="bg-white/95 backdrop-blur-md text-slate-900 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-md">{post.tag}</span>
                  </div>
                  <div className="absolute top-6 right-6 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-700 hover:bg-rose-500 hover:text-white transition-colors shadow-lg">
                       <Heart size={20} />
                     </button>
                     <button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-700 hover:bg-indigo-600 hover:text-white transition-colors shadow-lg">
                       <BookmarkPlus size={20} />
                     </button>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow relative z-20 bg-white">
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-400 mb-6">
                    <span className="flex items-center gap-1.5"><CalendarDays size={18}/> {post.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    <span className="flex items-center gap-1.5"><Clock size={18}/> {post.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 leading-snug group-hover:text-indigo-600 transition-colors">{post.title}</h3>
                  <p className="text-slate-600 mb-10 flex-grow leading-relaxed font-light text-lg">{post.shortDesc}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-black text-lg shadow-inner">{post.author[4]}</div>
                       <span className="text-base font-black text-slate-800">{post.author}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`} 
                      state={{ postData: post }}
                      className="text-indigo-600 bg-indigo-50 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm"
                    >
                      <ArrowUpRight size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 5. Health Tips Carousel (NEW) */}
        <div className="mb-32">
           <div className="bg-indigo-50 rounded-[4rem] p-16 border-2 border-indigo-100 flex flex-col md:flex-row items-center gap-12 shadow-inner">
              <div className="md:w-1/3">
                 <h2 className="text-4xl font-black text-slate-900 mb-4">Daily Health Tip</h2>
                 <p className="text-slate-600 text-lg font-light">Bite-sized advice from our medical experts to keep you healthy everyday.</p>
              </div>
              <div className="md:w-2/3 bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 relative">
                 <Quote className="text-indigo-100 absolute top-6 left-6" size={60}/>
                 <p className="text-2xl text-slate-800 font-medium leading-relaxed relative z-10 pt-8 italic">"Drink at least 8 glasses of water daily. Hydration is key to maintaining skin health, flushing toxins, and keeping your energy levels high throughout the day."</p>
                 <div className="flex justify-end mt-6 gap-4">
                    <button className="text-slate-400 hover:text-indigo-600 font-bold flex items-center gap-2"><Share2 size={20}/> Share</button>
                 </div>
              </div>
           </div>
        </div>

        {/* 6. Author Profiles / Expert Writers (NEW) */}
        <div className="mb-40">
           <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-slate-900 mb-4">Meet Our Expert Contributors</h2>
              <p className="text-xl text-slate-600 font-light">All articles are written and medically reviewed by certified professionals.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {['Dr. Jenkins', 'Dr. Hull', 'Dr. Cameron', 'Dr. Foreman'].map((doc, i) => (
                 <div key={i} className="bg-white p-8 rounded-[3rem] text-center shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform cursor-pointer">
                    <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-6 flex items-center justify-center text-indigo-700 font-black text-2xl">
                       {doc[4]}
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">{doc}</h4>
                    <p className="text-slate-500 font-medium text-sm">Medical Reviewer</p>
                 </div>
              ))}
           </div>
        </div>

        {/* 7. Video & Podcast Section */}
        <div className="bg-slate-900 rounded-[4rem] p-16 md:p-24 text-white mb-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
           <div className="relative z-10">
              <span className="bg-slate-800 text-indigo-300 px-6 py-2 rounded-full text-sm font-black tracking-widest uppercase mb-8 inline-block border border-slate-700">NovaCare Media</span>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Tune into Health Talks Podcast</h2>
              <p className="text-slate-300 text-2xl mb-12 leading-relaxed font-light">
                Listen to our top specialists discuss breakthrough treatments, healthy living tips, and the future of medicine in our weekly video podcast series.
              </p>
              <button className="bg-indigo-600 text-white px-10 py-5 rounded-full font-black flex items-center gap-4 hover:bg-indigo-500 transition-colors shadow-2xl shadow-indigo-900/50 text-xl w-fit">
                <PlayCircle size={32} /> Listen to Episode 42
              </button>
           </div>
           <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer z-10">
              <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80" alt="Podcast" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                 <div className="w-28 h-28 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-indigo-600 shadow-2xl group-hover:scale-110 transition-transform">
                   <PlayCircle size={60} />
                 </div>
              </div>
           </div>
        </div>

        {/* 8. Newsletter */}
        <div className="bg-indigo-900 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <Mail size={80} className="mx-auto mb-10 text-indigo-300" />
            <h2 className="text-5xl md:text-7xl font-black mb-8">Subscribe to Our Newsletter</h2>
            <p className="text-indigo-200 mb-14 text-2xl font-light leading-relaxed">Get the latest health tips, medical news, and updates delivered directly to your inbox every single week.</p>
            <div className="flex flex-col sm:flex-row gap-6 bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/20 shadow-2xl">
              <input type="email" placeholder="Enter your email address" className="flex-grow px-10 py-6 rounded-full bg-transparent text-white outline-none placeholder-indigo-200 font-bold text-xl" />
              <button className="bg-white text-indigo-900 px-12 py-6 rounded-full font-black transition-transform hover:scale-105 shadow-xl text-xl">
                Subscribe Now
              </button>
            </div>
            <p className="text-indigo-300 text-base mt-8 font-medium">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;