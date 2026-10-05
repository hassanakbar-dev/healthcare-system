import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Tag } from 'lucide-react';

const BlogPost = () => {
  const location = useLocation();
  const post = location.state?.postData;

  // Agar user direct URL type karke aaye bina data ke, toh wapas blog list par bhej dein
  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-slate-50 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100">
        
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-8 hover:bg-indigo-50 px-4 py-2 rounded-full transition-colors">
          <ArrowLeft size={20} /> Back to Blog
        </Link>

        {/* Post Headers */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="flex items-center gap-1 text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            <Tag size={14} /> {post.tag}
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-slate-500">
            <Clock size={14} /> {post.date}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Main Image */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-10 shadow-md">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Full Description */}
        <div className="prose prose-lg text-slate-700 leading-relaxed">
          <p className="text-xl text-slate-600 mb-6 font-medium">
            {post.shortDesc}
          </p>
          <p>
            {post.fullDesc}
          </p>
          {/* Aap yahan mazeed content ya headings add kar sakte hain real blog ki tarah */}
          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Conclusion</h3>
          <p>
            Maintaining your health requires consistent effort, awareness, and adopting a proactive approach. By following these guidelines and regularly consulting with healthcare professionals at NovaCare, you ensure a better quality of life for yourself and your loved ones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;