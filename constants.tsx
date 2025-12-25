
import { BlogPost, Sholawat, Activity } from './types';

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Keutamaan Sholawat di Malam Jumat',
    excerpt: 'Membahas tentang fadhilah membaca sholawat kepada Baginda Nabi Muhammad SAW di malam yang mulia.',
    content: 'Membaca sholawat kepada Nabi Muhammad SAW adalah amalan yang sangat dicintai Allah. Terutama pada malam Jumat, Rasulullah SAW menganjurkan umatnya untuk memperbanyak sholawat...',
    date: '2024-05-15',
    author: 'Admin Majelis',
    category: 'Edukasi',
    imageUrl: 'https://picsum.photos/seed/majelis1/800/400'
  },
  {
    id: '2',
    title: 'Laporan Kegiatan Santunan Anak Yatim',
    excerpt: 'Alhamdulillah, kegiatan santunan bulanan telah terlaksana dengan lancar di markas Majelis Nurul Iman.',
    content: 'Terima kasih kepada para donatur yang telah menyisihkan sebagian hartanya. Kegiatan ini rutin dilakukan setiap bulan untuk membantu adik-adik yatim di sekitar lingkungan majelis...',
    date: '2024-05-10',
    author: 'Sekretariat',
    category: 'Kegiatan',
    imageUrl: 'https://picsum.photos/seed/majelis2/800/400'
  }
];

export const INITIAL_SHOLAWAT: Sholawat[] = [
  {
    id: '1',
    title: 'Sholawat Badar',
    arabic: 'صَـلا َةُ اللهِ سَـلا َمُ اللهِ ، عَـلَى طـهَ رَسُـوْلِ اللهِ',
    latin: 'Shalaatullaah Salaamullaah, ‘Alaa Thaaha Rasuulillaah',
    translation: 'Rahmat dan keselamatan Allah, semoga tetap untuk Nabi utusan Allah',
    category: 'Sholawat'
  },
  {
    id: '2',
    title: 'Ratib Al-Haddad',
    arabic: 'الفاتحة إلى حضرة النبي محمد صلى الله عليه وآله وسلم...',
    latin: 'Al-Fatihah ila hadrotin nabiyyi Muhammadin shollallahu alaihi wa alihi wa sallam...',
    translation: 'Segala puji bagi Allah, Tuhan semesta alam...',
    category: 'Wirid & Doa'
  },
  {
    id: '3',
    title: 'Simtudduror (Maulid Habsyi)',
    arabic: 'يَارَبِّ صَلِّ عَلَى مُحَمَّد مَادَامَ فِى الْقَوْمِ صَوْتُ النَّشِيْدِ',
    latin: 'Ya robbi sholli ala Muhammad madama fil qoumi shoutun nasyidi',
    translation: 'Wahai Tuhanku, limpahkanlah rahmat kepada Nabi Muhammad selama masih ada suara senandung di tengah kaum.',
    category: 'Maulid'
  },
  {
    id: '4',
    title: 'Surah Yasin (Ayat 1-5)',
    arabic: 'يسٓ . وَٱلۡقُرۡءَانِ ٱلۡحَكِيمِ . إِنَّكَ لَمِنَ ٱلۡمُرۡسَلِينَ . عَلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ . تَنزِيلَ ٱلۡعَزِيزِ ٱلرَّحِيمِ',
    latin: 'Ya-Seen. Wal-Qur\'anil-Hakeem. Innaka laminal mursaleen. \'Ala siratim mustaqeem. Tanzeelal-\'Azeezir-Raheem.',
    translation: 'Ya Sin. Demi Al-Qur\'an yang penuh hikmah. Sesungguhnya engkau salah seorang dari rasul-rasul. (Yang berada) di atas jalan yang lurus. (Sebagai wahyu) yang diturunkan oleh (Allah) Yang Mahaperkasa, Maha Penyayang.',
    category: 'Al-Qur\'an'
  }
];

export const INITIAL_ACTIVITIES: Activity[] = [
  {
    id: '1',
    name: 'TPQ Nurul Iman',
    days: 'Senin - Rabu',
    time: '18.00 - 20.00',
    color: 'emerald'
  },
  {
    id: '2',
    name: "Kajian Kitab Fiqih",
    days: 'Selasa Malam',
    time: '20.00 - 21.30',
    color: 'amber'
  },
  {
    id: '3',
    name: "Pembacaan Ratib & Burdah",
    days: "Kamis Malam",
    time: '19.30 - 21.30',
    color: 'blue'
  },
  {
    id: '4',
    name: "Latihan Hadroh Remaja",
    days: "Sabtu Sore",
    time: '16.00 - 17.30',
    color: 'rose'
  },
  {
    id: '5',
    name: "Santunan & Makan Bersama",
    days: "Minggu Pagi",
    time: '09.00 - 11.00',
    color: 'violet'
  }
];
