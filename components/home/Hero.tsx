import Image from "next/image";
import type { CSSProperties } from "react";
import ButtonLink from "@/components/Button";
import Paisley from "@/components/Paisley";
import { heroImage, siteConfig } from "@/lib/site";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section className="bg-pattern relative flex min-h-[60vh] items-center overflow-hidden text-white">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="animate-kenburns object-cover opacity-25 mix-blend-luminosity"
      />

      <Paisley
        className="animate-float absolute -start-10 top-10 h-32 w-32 text-secondary/20 sm:h-52 sm:w-52"
        style={{ "--r": "-20deg" } as CSSProperties}
      />
      <Paisley
        className="animate-float absolute -end-8 bottom-6 h-36 w-36 text-secondary/15 sm:h-60 sm:w-60"
        style={{ "--r": "160deg", animationDelay: "-3s" } as CSSProperties}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14 text-center sm:py-20">
        <h1
          className="text-shimmer animate-fade-up text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl"
          style={delay(100)}
        >
          {siteConfig.name}
        </h1>
        <p
          className="animate-fade-up mt-4 text-2xl font-bold text-secondary sm:text-3xl"
          style={delay(350)}
        >
          أناقة تليق بكِ
        </p>
        <p className="animate-fade-up mt-3 text-lg text-white/90 sm:text-xl" style={delay(550)}>
          {siteConfig.slogan}
        </p>
        <p
          className="animate-fade-up mx-auto mt-4 max-w-xl leading-8 text-white/80"
          style={delay(750)}
        >
          حجابات وإشاربات بتصاميم مبتكرة وجودة عالية، صُنعت في دمشق بعناية وإتقان.
        </p>
        <div className="animate-fade-up mt-8" style={delay(950)}>
          <ButtonLink href="/products" variant="secondary" className="animate-pulse-ring px-8 py-3 text-lg">
            تسوقي الآن
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
