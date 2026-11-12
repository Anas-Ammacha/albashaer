import Link from "next/link";
import Logo from "@/components/Logo";
import {
  ClockIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { instagramHandle, navLinks, phones, siteConfig } from "@/lib/site";

const headingClass = "mb-3 font-display text-base font-bold text-secondary-light";
const iconClass = "h-4 w-4 shrink-0 text-secondary-light";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-secondary bg-primary-dark text-white/75">
      <div className="mx-auto grid max-w-6xl gap-5 px-6 py-6 text-sm md:grid-cols-[1.2fr_0.8fr_1.2fr] md:gap-10">
        <div>
          <Logo variant="light" />
          <p className="mt-3 font-display text-lg font-bold text-secondary-light">{siteConfig.slogan}</p>
        </div>

        <div>
          <h3 className={headingClass}>روابط سريعة</h3>
          <ul className="space-y-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-secondary-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>اتصل بنا</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2.5">
              <MapPinIcon className={iconClass} />
              {siteConfig.address}
            </li>
            <li className="flex items-center gap-2.5">
              <ClockIcon className={iconClass} />
              {siteConfig.workingHours}
            </li>
            {phones.map((phone) => (
              <li key={phone.href} className="flex items-center gap-2.5">
                {phone.whatsapp ? (
                  <WhatsAppIcon className={iconClass} />
                ) : (
                  <PhoneIcon className={iconClass} />
                )}
                <span>{phone.label}:</span>
                <a
                  href={phone.href}
                  dir="ltr"
                  className="transition-colors hover:text-secondary-light"
                  {...(phone.whatsapp && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {phone.display}
                </a>
              </li>
            ))}
            {siteConfig.instagramUrl && (
              <li className="flex items-center gap-2.5">
                <InstagramIcon className={iconClass} />
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="transition-colors hover:text-secondary-light"
                >
                  {instagramHandle}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-3 text-center text-xs text-white/50">
        جميع الحقوق محفوظة © {siteConfig.name}
      </div>
    </footer>
  );
}
