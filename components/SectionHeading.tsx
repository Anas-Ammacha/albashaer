import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center">
      <h2
        className={`text-3xl font-extrabold sm:text-4xl ${light ? "text-white" : "text-primary"}`}
      >
        {title}
      </h2>
      <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-secondary" />
      {subtitle && (
        <p className={`mt-4 leading-8 ${light ? "text-white/80" : "text-foreground/75"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
