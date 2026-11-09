import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const colors = [
  { name: "أسود", hex: "#1f1f1f" },
  { name: "وردي", hex: "#e8b4d8" },
  { name: "كريمي", hex: "#f3ead9" },
  { name: "بيج", hex: "#c9a66b" },
  { name: "بني", hex: "#7a4b32" },
  { name: "كحلي", hex: "#1e3a5f" },
  { name: "عنابي", hex: "#8e2f46" },
  { name: "رمادي", hex: "#8b8f98" },
];

export default function ColorsStrip() {
  return (
    <section className="bg-pattern py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          light
          title="متوفر بجميع الألوان"
          subtitle="اختاري اللون الذي يناسب ذوقكِ، فجميع منتجاتنا تأتي بتشكيلة ألوان واسعة."
        />
        <ul className="flex flex-wrap justify-center gap-6">
          {colors.map((color, i) => (
            <li key={color.hex}>
              <Reveal delay={i * 70} className="group flex flex-col items-center gap-2">
                <span
                  className="block h-14 w-14 rounded-full ring-2 ring-white/70 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110 sm:h-16 sm:w-16"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-sm text-white/80">{color.name}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
