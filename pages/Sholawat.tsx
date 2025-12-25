
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sholawat } from '../types';
import { INITIAL_SHOLAWAT } from '../constants';

const SholawatPage: React.FC = () => {
  const [sholawats, setSholawats] = useState<Sholawat[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Sholawat', 'Wirid & Doa', 'Maulid', 'Al-Qur\'an'];

  useEffect(() => {
    const saved = localStorage.getItem('majelis_sholawat');
    if (saved) {
      setSholawats(JSON.parse(saved));
    } else {
      setSholawats(INITIAL_SHOLAWAT);
    }
  }, []);

  const filtered = sholawats.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Semua' || s.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Sholawat': return '📿';
      case 'Wirid & Doa': return '🤲';
      case 'Maulid': return '📜';
      case 'Al-Qur\'an': return '📖';
      default: return '✨';
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4 font-arabic"> المكتبة الرقمية <span className="font-sans block text-2xl mt-2">Perpustakaan Digital</span></h1>
          <p className="text-stone-600">Pilih kategori lirik, doa, atau surah yang ingin Anda baca hari ini.</p>
        </div>
        <div className="w-full md:w-72">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Cari judul..." 
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-5 h-5 text-stone-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Categories Tabs (Sub Menu) */}
      <div className="flex overflow-x-auto pb-4 mb-8 no-scrollbar gap-2 -mx-4 px-4 md:mx-0 md:px-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeCategory === cat 
                ? 'bg-emerald-800 text-white shadow-lg scale-105' 
                : 'bg-white text-stone-500 border border-stone-100 hover:bg-stone-50'
            }`}
          >
            <span className="text-lg">{activeCategory === cat ? '📍' : getCategoryIcon(cat)}</span>
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Content */}
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((item) => (
          <Link 
            key={item.id} 
            to={`/sholawat/${item.id}`}
            className="group bg-white rounded-3xl border border-stone-100 p-6 flex items-center justify-between hover:border-emerald-200 hover:shadow-xl transition-all relative overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
               <span className="text-6xl">{getCategoryIcon(item.category)}</span>
            </div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 bg-stone-50 text-emerald-800 rounded-2xl flex items-center justify-center font-bold text-xl group-hover:bg-emerald-800 group-hover:text-white transition-all shadow-inner">
                {getCategoryIcon(item.category)}
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-0.5 rounded-md mb-1 inline-block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-stone-800 group-hover:text-emerald-900 transition-colors">{item.title}</h3>
              </div>
            </div>
            
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-stone-200 group-hover:text-emerald-500 group-hover:bg-emerald-50 transition-all relative z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </Link>
        ))}
        
        {filtered.length === 0 && (
          <div className="sm:col-span-2 text-center py-24 bg-white rounded-3xl border border-dashed border-stone-300">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-stone-400 font-medium">Tidak ada data ditemukan di kategori "{activeCategory}".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SholawatPage;
