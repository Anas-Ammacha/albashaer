import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  // بنفسجي: الزر الأساسي على الخلفيات الفاتحة
  primary: "bg-primary text-white hover:bg-primary-dark",
  // ذهبي: للخلفيات الداكنة
  secondary: "bg-secondary text-primary-dark hover:bg-secondary-light",
  // إطار فقط: زر ثانوي على الخلفيات الفاتحة
  outline: "border border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-white",
};

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: Variant;
}

export default function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`btn-shine inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-bold transition duration-300 hover:-translate-y-0.5 hover:shadow-lg ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
