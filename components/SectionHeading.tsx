import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";

interface SectionHeadingProps {
  title: string;
  /** سطر صغير فوق العنوان (مثل: "من نحن") */
  eyebrow?: string;
  subtitle?: string;
  /** للخلفيات الداكنة */
  light?: boolean;
  /** محاذاة العنوان: في الوسط (الافتراضي) أو في بداية السطر */
  align?: "center" | "start";
}

export default function SectionHeading({
  title,
  eyebrow,
  subtitle,
  light,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-bold tracking-wide ${
            light ? "text-secondary-light" : "text-secondary-deep"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <TextReveal
        as="h2"
        text={title}
        className={`font-display text-3xl font-bold leading-snug sm:text-4xl ${
          light ? "text-white" : "text-primary"
        }`}
      />
      <span
        className={`mt-4 flex items-center gap-2 ${centered ? "justify-center" : ""}`}
        aria-hidden="true"
      >
        <span className="line-grow block h-px w-12 origin-right bg-secondary" />
        <span className="block h-1.5 w-1.5 rotate-45 bg-secondary" />
        <span className="line-grow block h-px w-12 origin-left bg-secondary" />
      </span>
      {subtitle && (
        <p className={`mt-4 leading-8 ${light ? "text-white/75" : "text-foreground/70"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
