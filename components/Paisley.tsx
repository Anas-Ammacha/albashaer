import type { CSSProperties } from "react";

interface PaisleyProps {
  className?: string;
  style?: CSSProperties;
}

// شكل زخرفي (البوتة) مستوحى من شعار الشركة — للزينة فقط.
export default function Paisley({ className = "", style }: PaisleyProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
      style={style}
      fill="currentColor"
    >
      <path d="M55 10C97 30 98 78 62 97C35 106 5 92 10 68C15 48 42 52 44 34C45 22 50 14 55 10Z" />
    </svg>
  );
}
