
import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { INITIAL_BLOG_POSTS } from '../constants';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('majelis_blog');
    if (saved) {
      setPosts(JSON.parse(saved));
    } else {
      setPosts(INITIAL_BLOG_POSTS);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4">Warta & Catatan Hikmah</h1>
        <p className="text-stone-600">Update terbaru seputar kegiatan majelis dan tulisan inspiratif dari para asatidz.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 flex flex-col hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
              <div className="absolute top-4 left-4">
                <span className="bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 text-stone-400 text-xs mb-3">
                <span>{new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                <span>Oleh {post.author}</span>
              </div>
              <h2 className="text-xl font-bold text-stone-800 mb-3 line-clamp-2 leading-snug">
                {post.title}
              </h2>
              <p className="text-stone-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-auto">
                <button className="text-emerald-700 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Baca Selengkapnya
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
