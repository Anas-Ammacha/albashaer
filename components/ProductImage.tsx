"use client";

import Image from "next/image";
import { useState } from "react";
import { placeholderImage } from "@/data/products";

interface ProductImageProps {
  src: string;
  alt: string;
}

// يعرض صورة المنتج، وإذا لم تُوجد الصورة يعرض صورة افتراضية بدلاً منها.
export default function ProductImage({ src, alt }: ProductImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <Image
      src={failed ? placeholderImage : src}
      alt={alt}
      width={800}
      height={1000}
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      onError={() => setFailed(true)}
      className="aspect-[4/5] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  );
}
