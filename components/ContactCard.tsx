import type { ComponentType, ReactNode, SVGProps } from "react";
import Reveal from "@/components/Reveal";

interface ContactCardProps {
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  delay?: number;
  children: ReactNode;
}

export default function ContactCard({ title, Icon, delay = 0, children }: ContactCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-xl hover:shadow-primary/10 sm:gap-5 sm:p-7">
        <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-secondary-soft p-3 text-primary ring-1 ring-secondary/30 transition duration-300 group-hover:bg-primary group-hover:text-secondary-light">
          <Icon className="h-7 w-7" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-xl font-bold text-primary">{title}</h2>
          <div className="mt-2 text-lg text-foreground/80">{children}</div>
        </div>
      </article>
    </Reveal>
  );
}
