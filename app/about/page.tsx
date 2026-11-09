import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرّفي على قصة ورؤية ورسالة حجابات البشائر في دمشق.",
};

const blocks = [
  {
    title: "قصتنا",
    text: `انطلقت ${siteConfig.name} من دمشق بشغف كبير لتقديم حجابات وإشاربات تجمع بين الأصالة والذوق الرفيع. بدأنا بإيمان راسخ بأن الحجاب جزء من هوية المرأة وجمالها، فعملنا على تطوير منتجاتنا عاماً بعد عام حتى أصبحنا اسماً يثق به كثيرون في صناعة وتجارة الحجابات والإشاربات.`,
  },
  {
    title: "رؤيتنا",
    text: "أن نكون الخيار الأول للمرأة العربية في عالم الحجابات والإشاربات، وأن نقدّم صناعة سورية تنافس بجودتها وإبداعها في الأسواق المحلية والعالمية.",
  },
  {
    title: "رسالتنا",
    text: "تقديم منتجات عالية الجودة بتصاميم مبتكرة وأسعار مناسبة، مع الالتزام بخدمة عملائنا بصدق واحترام، والمساهمة في دعم الصناعة الوطنية وإحياء حرفة الحجاب بروح عصرية.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner title="من نحن" subtitle={siteConfig.slogan} />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className="space-y-10">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 120}>
              <h2 className="text-2xl font-extrabold text-primary">{b.title}</h2>
              <p className="mt-3 leading-9 text-foreground/80">{b.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <Image
            src="/images/about.jpg"
            alt="حجابات البشائر - صناعة وتجارة الحجابات والإشاربات"
            width={754}
            height={1080}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="mx-auto h-auto w-full max-w-md rounded-3xl shadow-lg ring-1 ring-secondary/60"
          />
        </Reveal>
      </section>
    </>
  );
}
