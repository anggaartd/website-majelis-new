
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminTab, BlogPost, Sholawat, ContactMessage, Activity } from '../../types';
import { INITIAL_BLOG_POSTS, INITIAL_SHOLAWAT, INITIAL_ACTIVITIES } from '../../constants';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AdminTab>(AdminTab.DASHBOARD);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [sholawats, setSholawats] = useState<Sholawat[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  const SHOLAWAT_CATEGORIES = ['Sholawat', 'Wirid & Doa', 'Maulid', 'Al-Qur\'an'];
  const COLOR_OPTIONS = ['emerald', 'amber', 'blue', 'rose', 'violet', 'indigo'];

  // Load Data
  useEffect(() => {
    const savedPosts = localStorage.getItem('majelis_blog');
    setPosts(savedPosts ? JSON.parse(savedPosts) : INITIAL_BLOG_POSTS);

    const savedSholawat = localStorage.getItem('majelis_sholawat');
    setSholawats(savedSholawat ? JSON.parse(savedSholawat) : INITIAL_SHOLAWAT);

    const savedActivities = localStorage.getItem('majelis_activities');
    setActivities(savedActivities ? JSON.parse(savedActivities) : INITIAL_ACTIVITIES);

    const savedMsg = localStorage.getItem('majelis_messages');
    setMessages(savedMsg ? JSON.parse(savedMsg) : []);
  }, []);

  // Save changes helpers
  const savePosts = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem('majelis_blog', JSON.stringify(newPosts));
  };

  const saveSholawats = (newS: Sholawat[]) => {
    setSholawats(newS);
    localStorage.setItem('majelis_sholawat', JSON.stringify(newS));
  };

  const saveActivities = (newA: Activity[]) => {
    setActivities(newA);
    localStorage.setItem('majelis_activities', JSON.stringify(newA));
  };

  const deletePost = (id: string) => {
    if (confirm('Hapus artikel ini?')) {
      savePosts(posts.filter(p => p.id !== id));
    }
  };

  const deleteSholawat = (id: string) => {
    if (confirm('Hapus data ini?')) {
      saveSholawats(sholawats.filter(s => s.id !== id));
    }
  };

  const deleteActivity = (id: string) => {
    if (confirm('Hapus jadwal kegiatan ini?')) {
      saveActivities(activities.filter(a => a.id !== id));
    }
  };

  const stats = [
    { label: 'Total Artikel', value: posts.length, color: 'bg-blue-500' },
    { label: 'Database Lirik', value: sholawats.length, color: 'bg-emerald-500' },
    { label: 'Jadwal Kegiatan', value: activities.length, color: 'bg-rose-500' },
  ];

  return (
    <div className="min-h-screen bg-stone-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-emerald-950 text-white p-6 hidden md:block shrink-0">
        <div className="flex items-center gap-2 mb-12">
            <div className="bg-amber-500 w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-emerald-900 font-bold">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Admin <span className="text-amber-400">Panel</span></span>
        </div>
        
        <nav className="space-y-2">
          {Object.values(AdminTab).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                activeTab === tab ? 'bg-emerald-800 text-amber-400' : 'text-emerald-300 hover:bg-emerald-900'
              }`}
            >
              {tab}
            </button>
          ))}
          <div className="pt-8 border-t border-emerald-900 mt-8">
            <Link to="/" className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-emerald-300 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Kembali ke Web
            </Link>
          </div>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-stone-800 uppercase tracking-widest">{activeTab}</h1>
          <div className="flex items-center gap-4">
             <span className="text-sm text-stone-500 font-medium">Administrator</span>
             <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-white font-bold">A</div>
          </div>
        </header>

        {activeTab === AdminTab.DASHBOARD && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map(s => (
                <div key={s.label} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                  <span className="text-stone-500 text-xs font-bold uppercase tracking-widest">{s.label}</span>
                  <div className="flex items-end justify-between mt-2">
                    <span className="text-4xl font-bold text-stone-900">{s.value}</span>
                    <div className={`w-8 h-8 ${s.color} rounded-lg opacity-20`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === AdminTab.BLOG && (
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
            <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
              <h2 className="font-bold">Manajemen Blog</h2>
              <button 
                onClick={() => {
                  const title = prompt('Judul Artikel:');
                  if (!title) return;
                  const newPost: BlogPost = {
                    id: Date.now().toString(),
                    title,
                    excerpt: 'Cuplikan artikel baru...',
                    content: 'Isi artikel lengkap di sini...',
                    date: new Date().toISOString().split('T')[0],
                    author: 'Admin',
                    category: 'Umum',
                    imageUrl: `https://picsum.photos/seed/${Date.now()}/800/400`
                  };
                  savePosts([newPost, ...posts]);
                }}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-700 transition-colors"
              >
                + Artikel Baru
              </button>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-stone-50 text-stone-500 text-xs uppercase font-bold">
                  <th className="px-6 py-4">Judul</th>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {posts.map(p => (
                  <tr key={p.id} className="hover:bg-stone-50">
                    <td className="px-6 py-4 font-medium">{p.title}</td>
                    <td className="px-6 py-4 text-stone-500">{p.category}</td>
                    <td className="px-6 py-4 space-x-2">
                      <button onClick={() => deletePost(p.id)} className="text-red-600 font-bold">Hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === AdminTab.SHOLAWAT && (
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
            <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
              <h2 className="font-bold">Database Lirik & Teks</h2>
              <button 
                onClick={() => {
                  const title = prompt('Judul (Sholawat/Wirid/Surah):');
                  if (!title) return;
                  const catChoice = prompt(`Ketikkan Kategori:\n(${SHOLAWAT_CATEGORIES.join(', ')})`, 'Sholawat');
                  if (!catChoice) return;
                  
                  const newS: Sholawat = {
                    id: Date.now().toString(),
                    title,
                    arabic: 'Teks Arab di sini...',
                    latin: 'Teks Latin di sini...',
                    translation: 'Artinya di sini...',
                    category: catChoice
                  };
                  saveSholawats([newS, ...sholawats]);
                }}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-700 transition-colors"
              >
                + Data Baru
              </button>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-stone-50 text-stone-500 text-xs uppercase font-bold">
                  <th className="px-6 py-4">Judul</th>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {sholawats.map(s => (
                  <tr key={s.id} className="hover:bg-stone-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-stone-800">{s.title}</td>
                    <td className="px-6 py-4">
                      <span className="bg-stone-100 text-stone-600 px-2 py-1 rounded text-[10px] font-bold uppercase">{s.category}</span>
                    </td>
                    <td className="px-6 py-4 space-x-2">
                      <button onClick={() => deleteSholawat(s.id)} className="text-red-600 font-bold hover:underline">Hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === AdminTab.ACTIVITIES && (
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
             <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
              <h2 className="font-bold">Manajemen Jadwal Kegiatan</h2>
              <button 
                onClick={() => {
                  const name = prompt('Nama Kegiatan:');
                  if (!name) return;
                  const days = prompt('Hari (Contoh: Senin - Rabu atau Jumat Malam):', 'Jumat');
                  if (!days) return;
                  const time = prompt('Waktu (Contoh: 18.00 - 20.00):', '19.00 - 21.00');
                  if (!time) return;
                  const color = prompt(`Pilih Warna:\n(${COLOR_OPTIONS.join(', ')})`, 'emerald');
                  
                  const newA: Activity = {
                    id: Date.now().toString(),
                    name,
                    days,
                    time,
                    color: color || 'emerald'
                  };
                  saveActivities([...activities, newA]);
                }}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-700 transition-colors"
              >
                + Jadwal Baru
              </button>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-stone-50 text-stone-500 text-xs uppercase font-bold">
                  <th className="px-6 py-4">Kegiatan</th>
                  <th className="px-6 py-4">Waktu</th>
                  <th className="px-6 py-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {activities.map(a => (
                  <tr key={a.id} className="hover:bg-stone-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-${a.color}-500`}></div>
                        <span className="font-medium">{a.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-stone-500 text-xs">
                       {a.days} | {a.time}
                    </td>
                    <td className="px-6 py-4 space-x-2">
                      <button onClick={() => deleteActivity(a.id)} className="text-red-600 font-bold hover:underline">Hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === AdminTab.MESSAGES && (
           <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
             <div className="p-6 border-b border-stone-100 bg-stone-50/50">
                <h2 className="font-bold">Pesan Masuk</h2>
             </div>
             <div className="divide-y divide-stone-100">
               {messages.length === 0 ? (
                 <div className="p-20 text-center text-stone-400 italic">Belum ada pesan yang masuk.</div>
               ) : (
                 messages.map(m => (
                   <div key={m.id} className="p-6 hover:bg-stone-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-stone-900">{m.subject}</h3>
                          <p className="text-sm text-emerald-700 font-medium">Dari: {m.name} ({m.email})</p>
                        </div>
                        <span className="text-xs text-stone-400 font-medium">{new Date(m.date).toLocaleString('id-ID')}</span>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed mt-2 p-3 bg-stone-50 rounded-xl border border-stone-100">{m.message}</p>
                   </div>
                 ))
               )}
             </div>
           </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
