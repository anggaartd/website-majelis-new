
import React, { useState, useEffect } from 'react';

interface Timings {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
}

const PrayerTimes: React.FC = () => {
  const [timings, setTimings] = useState<Timings | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    
    // Fetch Jakarta prayer times as default
    fetch('https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=2')
      .then(res => res.json())
      .then(data => {
        setTimings(data.data.timings);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching prayer times:", err);
        setLoading(false);
      });

    return () => clearInterval(timer);
  }, []);

  // Fix: Use React.ReactElement instead of JSX.Element to resolve "Cannot find namespace 'JSX'" error
  const prayerIcons: Record<string, React.ReactElement> = {
    Imsak: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>,
    Fajr: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>,
    Dhuhr: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>,
    Asr: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>,
    Maghrib: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>,
    Isha: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>,
  };

  if (loading) return <div className="text-center py-10 text-stone-400">Memuat Jadwal Sholat...</div>;

  return (
    <div className="w-full bg-emerald-900 rounded-3xl p-6 md:p-10 shadow-2xl text-white relative overflow-hidden border border-emerald-800">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-amber-400 font-arabic text-3xl">مواقيت الصلاة</span>
            <span>Jadwal Sholat</span>
          </h2>
          <p className="text-emerald-200 text-sm opacity-80">Wilayah DKI Jakarta dan sekitarnya</p>
        </div>
        <div className="text-center md:text-right bg-emerald-800/50 px-6 py-3 rounded-2xl border border-emerald-700 backdrop-blur-sm">
          <p className="text-amber-400 font-bold text-2xl tracking-widest leading-none">
            {currentTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </p>
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mt-1">Waktu Indonesia Barat</p>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {timings && Object.entries({
          Imsak: timings.Imsak,
          Subuh: timings.Fajr,
          Dzuhur: timings.Dhuhr,
          Ashar: timings.Asr,
          Maghrib: timings.Maghrib,
          Isya: timings.Isha
        }).map(([name, time]) => (
          <div key={name} className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 p-4 rounded-2xl text-center group">
            <div className="w-10 h-10 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              {prayerIcons[name === 'Subuh' ? 'Fajr' : name] || prayerIcons.Fajr}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">{name}</p>
            <p className="text-xl font-bold text-white tracking-tight">{time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerTimes;
