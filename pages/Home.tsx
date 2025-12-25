
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDailyReflection } from '../services/geminiService';
import PrayerTimes from '../components/PrayerTimes';
import { Activity } from '../types';
import { INITIAL_ACTIVITIES } from '../constants';

const Home: React.FC = () => {
  const [reflection, setReflection] = useState<string>("Memuat hikmah hari ini...");
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    getDailyReflection().then(setReflection);
    const saved = localStorage.getItem('majelis_activities');
    setActivities(saved ? JSON.parse(saved) : INITIAL_ACTIVITIES);
  }, []);

  const MAX_CHARS = 160;
  const isLongText = reflection.length > MAX_CHARS;
  const displayedText = (isLongText && !isExpanded) 
    ? reflection.substring(0, MAX_CHARS) + "..." 
    : reflection;

  const DOCUMENTATION = [
    { id: 1, title: 'Kajian Kitab Kuning', category: 'Dakwah', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop' },
    { id: 2, title: 'Santunan Anak Yatim', category: 'Sosial', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop' },
    { id: 3, title: 'Latihan Hadroh', category: 'Seni', image: 'https://images.unsplash.com/photo-1511733334857-e8908ee87802?q=80&w=800&auto=format&fit=crop' },
    { id: 4, title: 'Maulid Nabi SAW', category: 'Perayaan', image: 'https://images.unsplash.com/photo-1566155555026-c67d3448a602?q=80&w=800&auto=format&fit=crop' },
    { id: 5, title: 'Buka Puasa Bersama', category: 'Ramadhan', image: 'https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=800&auto=format&fit=crop' },
    { id: 6, title: 'Ziarah Wali Songo', category: 'Religi', image: 'https://images.unsplash.com/photo-1590076215667-873d31481e05?q=80&w=800&auto=format&fit=crop' },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100 accent-emerald-500',
      amber: 'bg-amber-50 text-amber-700 border-amber-100 accent-amber-500',
      blue: 'bg-blue-50 text-blue-700 border-blue-100 accent-blue-500',
      rose: 'bg-rose-50 text-rose-700 border-rose-100 accent-rose-500',
      violet: 'bg-violet-50 text-violet-700 border-violet-100 accent-violet-500',
      indigo: 'bg-indigo-50 text-indigo-700 border-indigo-100 accent-indigo-500',
    };
    return colors[color] || colors.emerald;
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/majelis_hero/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Menata Hati, <br/>
            <span className="text-amber-400 font-arabic italic">Mendekat Kepada Ilahi</span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Selamat datang di Majelis Nurul Iman. Tempat berkumpul untuk mencari ilmu, 
            mempererat silaturahmi, dan memperbanyak sholawat kepada Rasulullah SAW.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/about" className="bg-amber-500 hover:bg-amber-600 text-emerald-950 px-8 py-3 rounded-full font-bold transition-all shadow-lg">
              Kenali Kami
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-full font-bold transition-all">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* AI Reflection & Prayer Times */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-stone-200 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-widest mb-6">
                Hikmah Hari Ini
              </span>
              
              <div className="mb-6">
                <svg className="w-8 h-8 text-amber-400 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01698 21L2.01698 18C2.01698 16.8954 2.91241 16 4.01698 16H7.01698C7.56927 16 8.01698 15.5523 8.01698 15V9C8.01698 8.44772 7.56927 8 7.01698 8H3.01698C2.4647 8 2.01698 8.44772 2.01698 9V11C2.01698 11.5523 1.56927 12 1.01698 12H0.0169824V5H10.017V15C10.017 18.3137 7.3307 21 4.01698 21H2.01698Z" />
                </svg>
                <blockquote className={`text-lg md:text-xl font-medium text-stone-800 italic leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-6'}`}>
                  "{displayedText}"
                </blockquote>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-start gap-4 mt-4">
              {isLongText && (
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-emerald-700 text-xs font-bold hover:text-emerald-800 flex items-center gap-1 transition-colors"
                >
                  {isExpanded ? 'Sembunyikan' : 'Baca Selengkapnya'}
                  <svg className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              )}
              <div className="flex items-center gap-2 border-t border-stone-100 pt-4 w-full">
                <div className="w-8 h-8 rounded-full bg-emerald-900 flex items-center justify-center text-[10px] text-amber-400 font-bold">AI</div>
                <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">Inspirasi Majelis Nurul Iman</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <PrayerTimes />
          </div>
        </div>
      </section>

      {/* Jadwal Kegiatan Section - REDESIGNED */}
      <section className="bg-emerald-50/30 py-16 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%"><pattern id="pattern-islamic" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M20 0l5 15h15l-12 9 5 15-13-10-13 10 5-15-12-9h15z" fill="currentColor"/></pattern><rect width="100%" height="100%" fill="url(#pattern-islamic)"/></svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4 font-arabic">الأنشطة الأسبوعية</h2>
            <h3 className="text-2xl font-bold text-stone-800 mb-3">Jadwal Kegiatan Mingguan</h3>
            <p className="text-stone-600 max-w-2xl mx-auto">Mari bergabung dalam taman-taman surga untuk memperdalam ilmu dan mempererat tali silaturahmi antar jamaah.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {activities.map((activity) => {
              const theme = getColorClasses(activity.color);
              return (
                <div key={activity.id} className="group bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 flex flex-col items-start relative overflow-hidden">
                  {/* Color Accent Bar */}
                  <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-10 transition-transform duration-700 group-hover:scale-150 ${theme.split(' ')[2]}`}></div>
                  
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:rotate-6 shadow-sm ${theme.split(' ')[0]} ${theme.split(' ')[1]}`}>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-emerald-800 transition-colors">{activity.name}</h3>
                  
                  <div className="space-y-3 w-full">
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 border border-stone-100 group-hover:bg-white transition-colors">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Hari</span>
                      <span className="text-sm font-bold text-stone-700">{activity.days}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50/50 border border-emerald-100 group-hover:bg-emerald-50 transition-colors">
                      <span className="text-xs font-bold text-emerald-600/60 uppercase tracking-widest">Waktu</span>
                      <span className="text-sm font-bold text-emerald-900">{activity.time} WIB</span>
                    </div>
                  </div>

                  <div className="mt-8 w-full">
                    <div className={`h-1.5 w-full rounded-full bg-stone-100 overflow-hidden`}>
                      <div className={`h-full w-1/3 rounded-full transition-all duration-1000 group-hover:w-full ${theme.split(' ')[3].replace('accent-', 'bg-')}`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dokumentasi Kegiatan Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-emerald-900 mb-2">Dokumentasi Kegiatan</h2>
              <p className="text-stone-600">Momen-momen kebersamaan dan syiar dakwah di Majelis Nurul Iman.</p>
            </div>
            <Link to="/blog" className="text-emerald-700 font-bold text-sm flex items-center gap-2 hover:text-emerald-800 transition-colors">
              Lihat Selengkapnya
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {DOCUMENTATION.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative group overflow-hidden rounded-3xl bg-stone-200 aspect-square ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-1">{item.category}</span>
                  <h3 className="text-white font-bold text-sm md:text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Kajian Rutin</h3>
            <p className="text-stone-600 leading-relaxed">Diskusi ilmu agama yang mendalam bersama para asatidz berpengalaman setiap malam Sabtu.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Kegiatan Sosial</h3>
            <p className="text-stone-600 leading-relaxed">Berbagi kebahagiaan melalui santunan yatim dan bantuan warga kurang mampu di lingkungan majelis.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Pecinta Sholawat</h3>
            <p className="text-stone-600 leading-relaxed">Menghidupkan sunnah dan melantunkan pujian-pujian indah kepada Baginda Nabi Muhammad SAW.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
