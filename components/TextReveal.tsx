"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType } from "react";

interface TextRevealProps {
  text: string;
  /** وسم HTML المستخدم (p, h2, span ...) */
  as?: ElementType;
  className?: string;
  /** تأخير بداية الحركة بالمللي ثانية */
  delay?: number;
}

// يُظهر النص كلمة بكلمة (مع تلاشي ضبابي) عند وصوله إلى الشاشة.
export default function TextReveal({ text, as: Tag = "p", className = "", delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Tag
      ref={ref}
      aria-label={text}
      style={{ "--base": `${delay}ms` } as CSSProperties}
      className={`word-reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} aria-hidden="true" style={{ "--i": i } as CSSProperties}>
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
