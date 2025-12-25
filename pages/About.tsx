
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4">Tentang Kami</h1>
        <p className="text-stone-600 max-w-xl mx-auto italic">"Khoirunnas Anfa'uhum Linnas - Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya."</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img src="https://picsum.photos/seed/majelis_about/600/600" alt="Majelis Gathering" className="rounded-2xl shadow-lg border-4 border-white" />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-stone-800">Sejarah Singkat</h2>
          <p className="text-stone-600 leading-relaxed">
            Majelis Nurul Iman didirikan pada tahun 2018 berawal dari kumpulan kecil pemuda yang ingin belajar mengaji dan mendalami ilmu agama. Nama "Nurul Iman" dipilih dengan harapan majelis ini dapat menjadi "Cahaya Iman" bagi lingkungan sekitar.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Hingga saat ini, majelis telah berkembang menjadi wadah pembinaan umat yang tidak hanya fokus pada aspek spiritual, tetapi juga kepedulian sosial.
          </p>
        </div>
      </div>

      <div className="bg-emerald-900 rounded-3xl p-10 text-white grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-400">Visi Kami</h3>
          <p className="text-emerald-50 leading-relaxed">Menjadi pusat dakwah yang sejuk, inklusif, dan berorientasi pada kemajuan umat dengan berlandaskan Al-Qur'an dan Sunnah.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-400">Misi Kami</h3>
          <ul className="list-disc list-inside space-y-2 text-emerald-50">
            <li>Menyelenggarakan kajian ilmu agama rutin yang mudah dipahami.</li>
            <li>Mengembangkan potensi pemuda dalam bidang syiar islam.</li>
            <li>Aktif dalam kegiatan sosial dan kemanusiaan.</li>
            <li>Menjalin ukhuwah islamiyah antar seluruh lapisan masyarakat.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
