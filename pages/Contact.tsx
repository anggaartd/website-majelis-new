
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate saving message
    const existingMessages = JSON.parse(localStorage.getItem('majelis_messages') || '[]');
    const newMessage = {
      ...formData,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      isRead: false
    };
    localStorage.setItem('majelis_messages', JSON.stringify([newMessage, ...existingMessages]));
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const mapAddress = "Jl. Bahari No.144, RT.10/RW.6, Tj. Priok, Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14310";
  const mapLink = "https://maps.app.goo.gl/HjmXVGpyD5j82tqW8";
  // Encode address for embed
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-6 font-arabic">اتصل بنا <span className="font-sans block text-2xl mt-2">Hubungi Kami</span></h1>
            <p className="text-stone-600 leading-relaxed">Punya pertanyaan seputar kegiatan majelis, pendaftaran santri, atau ingin berdonasi? Jangan ragu untuk menghubungi kami atau datang langsung ke markas kami.</p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Alamat Markas</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{mapAddress}</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Email Kami</h4>
                <p className="text-stone-600 text-sm">kontak@majelisnuruliman.or.id</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 2.01C6.48 2.01 2 6.48 2 12.01c0 2.17.7 4.18 1.89 5.81L2.06 22l4.35-1.14c1.6.87 3.44 1.37 5.4 1.37 5.53 0 10.01-4.47 10.01-10.01S17.54 2.01 12.01 2.01zM17.02 15.39c-.23-.11-1.35-.67-1.56-.74-.21-.07-.36-.11-.51.11-.15.22-.59.74-.72.89-.13.15-.26.17-.49.06-.23-.11-.97-.36-1.85-1.14-.68-.61-1.14-1.36-1.27-1.59-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.22.23-.37.07-.15.04-.28-.02-.39-.06-.11-.51-1.23-.7-1.69-.19-.45-.38-.39-.52-.39-.13 0-.28-.01-.43-.01-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9s.82 2.21.93 2.36c.11.15 1.62 2.47 3.92 3.47.54.24.97.38 1.3.49.54.17 1.04.15 1.43.09.43-.07 1.35-.55 1.54-1.08.19-.53.19-.98.13-1.08-.06-.1-.23-.17-.46-.28z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-stone-800">WhatsApp</h4>
                <p className="text-stone-600 text-sm">0812-3456-7890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100 relative">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-stone-800 mb-2">Pesan Terkirim!</h2>
              <p className="text-stone-600 mb-8">Terima kasih telah menghubungi kami. Tim kami akan segera merespon pesan Anda.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-emerald-800 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-900 transition-colors"
              >
                Kirim Pesan Lagi
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Nama Lengkap</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-emerald-500 outline-none" 
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Alamat Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-emerald-500 outline-none" 
                    placeholder="email@contoh.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">Subjek</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-emerald-500 outline-none" 
                  placeholder="Apa keperluan Anda?"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">Pesan</label>
                <textarea 
                  required
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-emerald-500 outline-none resize-none" 
                  placeholder="Tuliskan pesan Anda..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-emerald-800 text-white py-4 rounded-xl font-bold hover:bg-emerald-900 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                Kirim Pesan
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Map Section */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-emerald-900">Lokasi Markas</h2>
            <p className="text-stone-500">Kunjungi kami untuk mengikuti kajian atau silaturahmi langsung.</p>
          </div>
          <a 
            href={mapLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-stone-200 px-6 py-3 rounded-full text-sm font-bold text-emerald-800 hover:bg-emerald-50 transition-colors shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            Buka di Google Maps
          </a>
        </div>
        
        <div className="w-full h-[450px] bg-stone-200 rounded-3xl overflow-hidden shadow-inner border border-stone-100">
          <iframe 
            src={embedUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Majelis Nurul Iman"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
