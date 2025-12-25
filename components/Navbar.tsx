
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  // Menutup menu mobile saat rute berubah
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  if (isAdmin) return null;

  const navItems = [
    { label: 'Beranda', path: '/' },
    { label: 'Tentang', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Sholawat', path: '/sholawat' },
    { label: 'Kontak', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-emerald-900 text-white shadow-lg border-b border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="bg-amber-500 w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-emerald-900 font-bold">N</span>
            </div>
            <Link to="/" className="text-xl font-bold tracking-tight">
              Majelis <span className="text-amber-400 font-arabic">Nurul Iman</span>
            </Link>
          </div>
          
          {/* Desktop Nav Items */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  location.pathname === item.path ? 'text-amber-400 underline underline-offset-4' : 'text-emerald-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
             {/* Admin Button (Desktop) */}
             <Link 
                to="/admin" 
                className="hidden md:block bg-emerald-800 hover:bg-emerald-700 px-4 py-1.5 rounded-md text-xs font-semibold border border-emerald-700 transition-all"
              >
                Admin Panel
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg text-emerald-100 hover:bg-emerald-800 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                )}
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-emerald-950 border-t border-emerald-800 shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                location.pathname === item.path 
                  ? 'bg-emerald-800 text-amber-400 border-l-4 border-amber-400 pl-3' 
                  : 'text-emerald-100 hover:bg-emerald-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-emerald-800">
            <Link 
              to="/admin" 
              className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-emerald-950 px-4 py-3 rounded-xl font-bold transition-all shadow-lg"
            >
              Admin Panel
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
