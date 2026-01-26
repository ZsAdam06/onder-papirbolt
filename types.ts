
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
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  facebook: string;
}
