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
      <article className="group flex h-full items-start gap-4 rounded-2xl bg-white p-5 shadow-sm sm:gap-5 sm:p-7 ring-1 ring-secondary/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-secondary transition duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-7 w-7" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-primary">{title}</h2>
          <div className="mt-2 text-lg text-foreground/80">{children}</div>
        </div>
      </article>
    </Reveal>
  );
}
