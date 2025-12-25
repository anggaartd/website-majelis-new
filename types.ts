
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

export interface Sholawat {
  id: string;
  title: string;
  arabic: string;
  latin: string;
  translation: string;
  category: string;
}

export interface Activity {
  id: string;
  name: string;
  days: string;
  time: string;
  color: string; // Untuk aksen warna di UI
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  isRead: boolean;
}

export enum AdminTab {
  DASHBOARD = 'DASHBOARD',
  BLOG = 'BLOG',
  SHOLAWAT = 'SHOLAWAT',
  ACTIVITIES = 'KEGIATAN',
  MESSAGES = 'PESAN'
}
