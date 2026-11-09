import type { Metadata } from "next";
import ContactCard from "@/components/ContactCard";
import PageBanner from "@/components/PageBanner";
import { InstagramIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { phones, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "اتصل بنا",
  description: "تواصلي مع حجابات البشائر عبر الهاتف أو واتساب. دمشق - الحريقة.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="اتصل بنا" subtitle="يسعدنا سماعكِ في أي وقت." />

      <section className="mx-auto grid max-w-4xl grid-cols-[minmax(0,1fr)] gap-6 px-6 py-16 md:grid-cols-2">
        <ContactCard title="العنوان" Icon={MapPinIcon}>
          <p className="text-xl font-bold text-foreground">{siteConfig.address}</p>
        </ContactCard>

        <ContactCard title="أرقام التواصل" Icon={PhoneIcon} delay={120}>
          <ul className="space-y-3">
            {phones.map((phone) => (
              <li key={phone.href}>
                <a
                  href={phone.href}
                  className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-xl bg-secondary-soft/60 px-4 py-3 transition-colors hover:bg-secondary-soft"
                  {...(phone.whatsapp && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <span className="flex items-center gap-2 text-base text-foreground/80">
                    {phone.whatsapp && <WhatsAppIcon className="h-5 w-5 text-primary" />}
                    {phone.label}
                  </span>
                  <span dir="ltr" className="text-lg font-bold text-primary">
                    {phone.display}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </ContactCard>

        {siteConfig.instagramUrl && (
          <ContactCard title="تابعينا على إنستغرام" Icon={InstagramIcon} delay={240}>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="font-bold text-primary transition-colors hover:text-primary-dark"
            >
              {siteConfig.instagramUrl.replace(/^https?:\/\/(www\.)?instagram\.com\//, "@").replace(/\/$/, "")}
            </a>
          </ContactCard>
        )}
      </section>
    </>
  );
}
