
import { OpeningHours, ContactInfo } from './types';

export const SHOP_NAME = "Onder Papírbolt";
export const MAP_EMBED_URL ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1134.9878272525652!2d21.03365732973571!3d47.93082600886604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4740ae785cacd12b%3A0xf45da16884906507!2sONDER%20Pap%C3%ADr!5e0!3m2!1shu!2sus!4v1769468688790!5m2!1shu!2sus";

export const CONTACT_DATA: ContactInfo = {
  address: "3580 Tiszaújváros, Barcsay Jenő tér 4.",
  phone: "+36 20 252 4031",
  email: "onder.trade2020@gmail.com",
  facebook: "https://www.facebook.com/p/ONDER-Pap%C3%ADr-100063292235639/"
};

// Must stay in sync with the schedule in lib/openingStatus.ts
export const OPENING_HOURS: OpeningHours[] = [
  { day: "Hétfő - Péntek", hours: "08:00 - 17:00", lunchBreak: "12:00 - 13:00" },
  { day: "Szombat", hours: "09:00 - 12:00" },
  { day: "Vasárnap", hours: "Zárva" }
];
