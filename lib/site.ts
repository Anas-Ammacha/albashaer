import type { NavLink, PhoneNumber } from "@/types";

export const siteConfig = {
  name: "حجابات البشائر",
  nameEn: "Al-Basha'er",
  slogan: "إبتكار.. عودة.. تميّز",
  description:
    "حجابات البشائر: صناعة وتجارة الحجابات والإشاربات في دمشق - الحريقة، سوريا. تصاميم مبتكرة وجودة عالية.",
  address: "دمشق - الحريقة",
  whatsappUrl: "https://wa.me/963944481500",
  // ضع رابط حساب إنستغرام هنا (مثل "https://instagram.com/xxxx") ليظهر في صفحة اتصل بنا والفوتر.
  instagramUrl: "",
};

// صورة خلفية الهيرو (مؤقتة من Unsplash).
export const heroImage =
  "https://images.unsplash.com/photo-1522219406764-db207f1f7640?auto=format&fit=crop&w=1600&q=75";

export const phones: PhoneNumber[] = [
  { label: "هاتف", display: "00963112210084", href: "tel:+963112210084" },
  { label: "هاتف", display: "00963112247721", href: "tel:+963112247721" },
  {
    label: "واتساب",
    display: "00963944481500",
    href: siteConfig.whatsappUrl,
    whatsapp: true,
  },
];

export const navLinks: NavLink[] = [
  { label: "الرئيسية", href: "/" },
  { label: "المنتجات", href: "/products" },
  { label: "من نحن", href: "/about" },
  { label: "اتصل بنا", href: "/contact" },
];
