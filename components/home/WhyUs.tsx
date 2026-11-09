import type { ComponentType, SVGProps } from "react";
import { HomeHeartIcon, MedalIcon, SparkleIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

interface Feature {
  title: string;
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const features: Feature[] = [
  {
    title: "جودة عالية",
    text: "نختار أجود الأقمشة ونراقب كل مرحلة من مراحل التصنيع لنضمن لكِ منتجاً يدوم.",
    Icon: MedalIcon,
  },
  {
    title: "تصاميم مبتكرة",
    text: "ألوان وتفاصيل عصرية تواكب الموضة وتحافظ على الاحتشام والأناقة.",
    Icon: SparkleIcon,
  },
  {
    title: "صناعة سورية",
    text: "نفخر بصناعة منتجاتنا في دمشق ودعم الصناعة المحلية وأيدي أبناء بلدنا.",
    Icon: HomeHeartIcon,
  },
];

export default function WhyUs() {
  return (
    <section className="bg-secondary-soft/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="لماذا نحن؟" subtitle="ثلاثة أسباب تجعلنا خياركِ الأول." />
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ title, text, Icon }, i) => (
            <Reveal key={title} delay={i * 150} className="h-full">
              <article className="group h-full rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-secondary/40 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-secondary transition duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                  <Icon className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-primary">{title}</h3>
                <p className="mt-3 leading-8 text-foreground/75">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
