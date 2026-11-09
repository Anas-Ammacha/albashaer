import Link from "next/link";
import Logo from "@/components/Logo";
import { InstagramIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { navLinks, phones, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-primary-dark text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-lg font-bold text-secondary">{siteConfig.slogan}</p>
          <p className="mt-2 text-sm leading-7">صناعة وتجارة الحجابات والإشاربات.</p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">روابط سريعة</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-secondary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">اتصل بنا</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <MapPinIcon className="h-5 w-5 shrink-0 text-secondary" />
              {siteConfig.address}
            </li>
            {phones.map((phone) => (
              <li key={phone.href} className="flex items-center gap-3">
                {phone.whatsapp ? (
                  <WhatsAppIcon className="h-5 w-5 shrink-0 text-secondary" />
                ) : (
                  <PhoneIcon className="h-5 w-5 shrink-0 text-secondary" />
                )}
                <span>{phone.label}:</span>
                <a
                  href={phone.href}
                  dir="ltr"
                  className="hover:text-secondary"
                  {...(phone.whatsapp && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {phone.display}
                </a>
              </li>
            ))}
            {siteConfig.instagramUrl && (
              <li className="flex items-center gap-3">
                <InstagramIcon className="h-5 w-5 shrink-0 text-secondary" />
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary"
                >
                  إنستغرام
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        جميع الحقوق محفوظة © {siteConfig.name}
      </div>
    </footer>
  );
}
