
export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

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
  created_at: string;
}
