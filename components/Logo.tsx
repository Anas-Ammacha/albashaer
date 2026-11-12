import Image from "next/image";
import Link from "next/link";
import { asset, siteConfig } from "@/lib/site";

interface LogoProps {
  variant?: "dark" | "light";
}

// الصورة المؤقتة: public/images/logo.png — استبدلها بالشعار الحقيقي بنفس الاسم.
// في الفوتر (خلفية داكنة) توضع الصورة داخل حاوية بيضاء لتبقى واضحة.
export default function Logo({ variant = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      className={variant === "light" ? "inline-block rounded-xl bg-white px-3 py-2" : "inline-block"}
    >
      <Image
        src={asset("/images/logo.png")}
        alt={siteConfig.name}
        width={520}
        height={160}
        unoptimized
        priority={variant === "dark"}
        className={variant === "light" ? "h-9 w-auto" : "h-12 w-auto"}
      />
    </Link>
  );
}
