import Link from "next/link";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

// بنر الصفحات الداخلية: خلفية فاتحة هادئة، مسار تنقل، عنوان وزخرفة ذهبية.
export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="bg-soft border-b border-line px-6 py-14 text-center sm:py-16">
      <nav aria-label="مسار التنقل" className="animate-fade-up text-sm text-foreground/60">
        <Link href="/" className="transition-colors hover:text-primary">
          الرئيسية
        </Link>
        <span className="mx-2 text-secondary" aria-hidden="true">
          /
        </span>
        <span className="text-secondary-deep">{title}</span>
      </nav>
      <h1
        className="animate-fade-up mt-4 font-display text-4xl font-bold text-primary sm:text-5xl"
        style={{ animationDelay: "120ms" }}
      >
        {title}
      </h1>
      <span
        className="animate-fade-up mt-5 flex items-center justify-center gap-2"
        style={{ animationDelay: "220ms" }}
        aria-hidden="true"
      >
        <span className="block h-px w-12 bg-secondary" />
        <span className="block h-1.5 w-1.5 rotate-45 bg-secondary" />
        <span className="block h-px w-12 bg-secondary" />
      </span>
      {subtitle && (
        <p
          className="animate-fade-up mx-auto mt-5 max-w-xl text-lg leading-8 text-foreground/70"
          style={{ animationDelay: "320ms" }}
        >
          {subtitle}
        </p>
      )}
    </section>
  );
}
