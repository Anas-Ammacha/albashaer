/**
 * بيانات المنتجات — هذا هو الملف الوحيد الذي تعدّله لإضافة أو تغيير المنتجات.
 * (راجع README.md للشرح الكامل.)
 */

export const ALL_COLORS = "جميع الألوان";

export interface Product {
  /** رقم فريد لكل منتج */
  id: number;
  name: string;
  /** وصف قصير */
  description: string;
  /** مسار الصورة داخل public، مثل /images/products/xxx.jpg */
  image: string;
  /** مصفوفة أسماء الألوان المتوفرة، أو النص "جميع الألوان" */
  colors: string[] | typeof ALL_COLORS;
  /** true لإظهار المنتج في قسم "أحدث المنتجات" بالصفحة الرئيسية */
  isFeatured: boolean;
}

// تظهر هذه الصورة تلقائياً إذا لم يُعثر على صورة المنتج.
export const placeholderImage =
  "https://images.unsplash.com/photo-1585728748176-455ac5eed962?auto=format&fit=crop&w=800&h=1000&q=75";

export const products: Product[] = [
  {
    id: 1,
    name: "حجاب ليكرا قطعتين",
    description: "حجاب جاهز بقطعتين من قماش الليكرا المرن، مريح وعملي للاستخدام اليومي.",
    image: "/images/products/lecra-2-pieces.jpg",
    colors: ALL_COLORS,
    isFeatured: true,
  },
  {
    id: 2,
    name: "حجاب ليكرا قطعة واحدة",
    description: "حجاب جاهز بقطعة واحدة من قماش الليكرا، سهل اللبس ويثبت بشكل أنيق.",
    image: "/images/products/lecra-1-piece.jpg",
    colors: ALL_COLORS,
    isFeatured: true,
  },
  {
    id: 3,
    name: "حجاب قطن قطعتين",
    description: "حجاب جاهز بقطعتين من القطن الناعم، خفيف ومريح ومناسب لمعظم الفصول.",
    image: "/images/products/cotton-2-pieces.jpg",
    colors: ALL_COLORS,
    isFeatured: true,
  },
  {
    id: 4,
    name: "حجاب قطن قطعة واحدة",
    description: "حجاب جاهز بقطعة واحدة من القطن الناعم، خفيف على البشرة وسهل اللبس.",
    image: "/images/products/cotton-1-piece.jpg",
    colors: ALL_COLORS,
    isFeatured: false,
  },
  {
    id: 5,
    name: "راسية ليكرا",
    description: "راسية من الليكرا المرن، مريحة وثابتة وتُلبس تحت الحجاب.",
    image: "/images/products/lecra-rasiya.jpg",
    colors: ALL_COLORS,
    isFeatured: false,
  },
  {
    id: 6,
    name: "راسية قطن",
    description: "راسية من القطن الناعم، خفيفة ومريحة وتُلبس تحت الحجاب.",
    image: "/images/products/cotton-rasiya.jpg",
    colors: ALL_COLORS,
    isFeatured: false,
  },
];

export const featuredProducts = products.filter((product) => product.isFeatured);
