
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <footer className="bg-emerald-950 text-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <div className="bg-amber-500 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-emerald-900 font-bold">N</span>
                </div>
                <span className="text-2xl font-bold tracking-tight">Majelis <span className="text-amber-400 font-arabic">Nurul Iman</span></span>
              </div>
              <p className="text-emerald-200/60 max-w-sm leading-relaxed">
                Wadah silaturahmi, kajian ilmu, dan syiar islam yang berlandaskan kasih sayang dan ukhuwah islamiyah.
              </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Navigasi</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Beranda</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">Tentang Kami</Link></li>
              <li><Link to="/blog" className="hover:text-amber-400 transition-colors">Blog & Warta</Link></li>
              <li><Link to="/sholawat" className="hover:text-amber-400 transition-colors">Lirik Sholawat</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Kontak Kami</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Sosial Media</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2">Instagram</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2">YouTube Channel</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2">Facebook Group</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-200/40">
          <p>© 2024 Majelis Nurul Iman. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-100 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-emerald-100 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
