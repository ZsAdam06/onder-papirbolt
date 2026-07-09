
export interface OpeningHours {
  day: string;
  hours: string;
  lunchBreak?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  facebook: string;
}

export interface Post {
  id: string;
  title: string;
  description: string | null;
  category: string;
  image_url: string;
  image_urls: string[];
  created_at: string;
}
