import ButtonLink from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export default function AboutSummary() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center">
      <SectionHeading title="من نحن" />
      <Reveal delay={100}>
        <p className="text-lg leading-9 text-foreground/80">
          {siteConfig.name} شركة سورية متخصصة في صناعة وتجارة الحجابات والإشاربات، يقع
          مقرّها في {siteConfig.address}. نجمع بين الأصالة والتصميم العصري لنقدّم لكِ
          منتجات تعبّر عن ذوقكِ وتدوم معكِ.
        </p>
        <ButtonLink href="/about" className="mt-8">
          اعرفي المزيد عنا
        </ButtonLink>
      </Reveal>
    </section>
  );
}
