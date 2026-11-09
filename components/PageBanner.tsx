interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="bg-pattern py-20 text-center text-white">
      <h1 className="animate-fade-up text-4xl font-extrabold sm:text-6xl">{title}</h1>
      {subtitle && (
        <p
          className="animate-fade-up mt-4 px-6 text-xl text-secondary"
          style={{ animationDelay: "200ms" }}
        >
          {subtitle}
        </p>
      )}
    </section>
  );
}
