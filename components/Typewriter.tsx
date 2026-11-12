"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
}

// يكتب الكلمات تباعاً ثم يمسحها (مثل: ليكرا ← قطن ← راسية).
export default function Typewriter({ words, className = "" }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const word = words[index];
    let delay = deleting ? 45 : 95;
    if (!deleting && length === word.length) delay = 1800;
    if (deleting && length === 0) delay = 350;

    const timer = setTimeout(() => {
      if (!deleting && length === word.length) setDeleting(true);
      else if (deleting && length === 0) {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      } else setLength(length + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [index, length, deleting, words]);

  return (
    <span className={className}>
      <span className="sr-only">{words.join("، ")}</span>
      <span aria-hidden="true">{words[index].slice(0, length)}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
