
import { Product, OpeningHours, ContactInfo } from './types';

export const SHOP_NAME = "Onder Papírbolt";
export const SHOP_LOCATION = "Tiszaújváros, Barcsay Jenő tér 4.";
export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1134.9878272525652!2d21.03365732973571!3d47.93082600886604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4740ae785cacd12b%3A0xf45da16884906507!2sONDER%20Pap%C3%ADr!5e0!3m2!1shu!2sus!4v1769468688790!5m2!1shu!2sus";

export const CONTACT_DATA: ContactInfo = {
  address: "3580 Tiszaújváros, Barcsay Jenő tér 4.",
  phone: "+36 20 252 4031",
  email: "onder.trade2020@gmail.com",
  facebook: "https://www.facebook.com/p/ONDER-Pap%C3%ADr-100063292235639/"
};

export const OPENING_HOURS: OpeningHours[] = [
  { day: "Hétfő - Péntek", hours: "08:00 - 17:00", lunchBreak: "12:00 - 13:00" },
  { day: "Szombat", hours: "08:00 - 12:00" },
  { day: "Vasárnap", hours: "Zárva" }
];

export const TOP_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Prémium Golyóstoll Készlet",
    category: "Írószer",
    description: "Kifinomult dizájn, sima írásélmény minden napra.",
    price: "1 290 Ft",
    image: "https://picsum.photos/seed/pen/600/800"
  },
  {
    id: 2,
    name: "A4-es Keményfedeles Füzet",
    category: "Papíráru",
    description: "Strapabíró borító, 80 grammos hófehér lapok.",
    price: "850 Ft",
    image: "https://picsum.photos/seed/notebook/600/800"
  },
  {
    id: 3,
    name: "Művész Színesceruza Szett",
    category: "Rajzeszköz",
    description: "24 élénk szín, magas pigmenttartalom.",
    price: "4 500 Ft",
    image: "https://picsum.photos/seed/pencils/600/800"
  },
  {
    id: 4,
    name: "Ergonomikus Iskolatáska",
    category: "Iskolaszer",
    description: "Gerinckímélő hátkiképzés, vízlepergető anyag.",
    price: "18 900 Ft",
    image: "https://picsum.photos/seed/backpack/600/800"
  },
  {
    id: 5,
    name: "Akvarell Festékkészlet",
    category: "Rajzeszköz",
    description: "Profi minőségű vízfesték 12 színben.",
    price: "3 200 Ft",
    image: "https://picsum.photos/seed/paint/600/800"
  },
  {
    id: 6,
    name: "Határidőnapló 2024/2025",
    category: "Irodaszer",
    description: "Heti beosztású, elegáns műbőr borítással.",
    price: "2 990 Ft",
    image: "https://picsum.photos/seed/diary/600/800"
  },
  {
    id: 7,
    name: "Vágóalátét és Hobbi Kés",
    category: "Kreatív",
    description: "Precíz vágáshoz, öngyógyuló felülettel.",
    price: "4 100 Ft",
    image: "https://picsum.photos/seed/craft/600/800"
  },
  {
    id: 8,
    name: "Irodai Lefűző Mappa",
    category: "Irodaszer",
    description: "Több színben, 8cm gerincszélesség.",
    price: "790 Ft",
    image: "https://picsum.photos/seed/folder/600/800"
  },
  {
    id: 9,
    name: "Dekortapasz Készlet",
    category: "Kreatív",
    description: "Washi tape válogatás scrapbook készítéshez.",
    price: "1 500 Ft",
    image: "https://picsum.photos/seed/tape/600/800"
  },
  {
    id: 10,
    name: "Zselés Toll Kollekció",
    category: "Írószer",
    description: "Neon és csillámos színek vegyesen.",
    price: "2 200 Ft",
    image: "https://picsum.photos/seed/gelpen/600/800"
  }
];
