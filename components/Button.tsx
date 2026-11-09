import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-secondary text-primary-dark hover:bg-white",
  outline: "border border-white/60 text-white hover:bg-white/10",
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
