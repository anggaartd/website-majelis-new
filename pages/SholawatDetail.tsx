
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Sholawat } from '../types';
import { INITIAL_SHOLAWAT } from '../constants';

const SholawatDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<Sholawat | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('majelis_sholawat');
    const data: Sholawat[] = saved ? JSON.parse(saved) : INITIAL_SHOLAWAT;
    const found = data.find(s => s.id === id);
    
    if (found) {
      setItem(found);
    } else {
      // Jika tidak ditemukan kembali ke daftar
      navigate('/sholawat');
    }
  }, [id, navigate]);

  if (!item) return null;

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Top Header */}
      <div className="bg-emerald-900 text-white py-12 md:py-20 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Link to="/sholawat" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white transition-colors text-sm font-bold mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Kembali ke Daftar
          </Link>
          <span className="block text-amber-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">{item.category}</span>
          <h1 className="text-3xl md:text-5xl font-bold">{item.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden">
          <div className="p-8 md:p-12 space-y-12">
            
            {/* Teks Arab */}
            <div className="text-right">
              <p className="text-3xl md:text-5xl leading-[2.5] font-arabic text-emerald-950 dir-rtl">
                {item.arabic}
              </p>
            </div>

            {/* Transliterasi & Terjemahan */}
            <div className="space-y-10 pt-10 border-t border-stone-100">
              <div className="bg-stone-50 p-6 md:p-8 rounded-2xl border-l-4 border-amber-400">
                <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Transliterasi (Latin)</h4>
                <p className="text-lg text-stone-700 italic leading-relaxed font-medium">{item.latin}</p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Terjemahan</h4>
                <p className="text-lg text-stone-600 leading-relaxed">{item.translation}</p>
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="bg-stone-50 p-6 flex justify-center border-t border-stone-100">
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 text-stone-400 hover:text-emerald-700 font-bold text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
              </svg>
              Cetak Lirik
            </button>
          </div>
        </div>
        
        {/* Next/Prev Navigation Placeholder */}
        <div className="mt-12 text-center">
            <p className="text-stone-400 text-xs italic">"Barangsiapa bershalawat kepadaku satu kali, niscaya Allah bershalawat kepadanya sepuluh kali." (HR. Muslim)</p>
        </div>
      </div>
    </div>
  );
};

export default SholawatDetail;
