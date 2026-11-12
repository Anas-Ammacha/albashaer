import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const MenuIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const CloseIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
);

export const PhoneIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </Icon>
);

export const MapPinIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Icon>
);

export const SparkleIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
    <path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
  </Icon>
);

export const MedalIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="9" r="5" />
    <path d="M9 13.5L7 21l5-3 5 3-2-7.5" />
  </Icon>
);

export const HomeHeartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 11l9-8 9 8v9a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
    <path d="M12 17.5s-3-1.8-3-3.8a1.7 1.7 0 013-1 1.7 1.7 0 013 1c0 2-3 3.8-3 3.8z" />
  </Icon>
);

export const ShieldCheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </Icon>
);

export const PaletteIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3a9 9 0 100 18c1.4 0 2-1 1.5-2.2-.5-1.2.2-2.300 1.500-2.300H17a4 4 0 004-4c0-5-4-9.500-9-9.500z" />
    <circle cx="7.500" cy="11" r="1" fill="currentColor" />
    <circle cx="10" cy="7" r="1" fill="currentColor" />
    <circle cx="15" cy="7.500" r="1" fill="currentColor" />
  </Icon>
);

export const BoxIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 7.500L12 3l9 4.500v9L12 21l-9-4.500z" />
    <path d="M3 7.500L12 12l9-4.500M12 12v9" />
  </Icon>
);

export const ChatIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 5h16v11H9l-5 4z" />
    <path d="M8 9.500h8M8 12.500h5" />
  </Icon>
);

export const GridIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="4" y="4" width="7" height="7" rx="1.500" />
    <rect x="13" y="4" width="7" height="7" rx="1.500" />
    <rect x="4" y="13" width="7" height="7" rx="1.500" />
    <rect x="13" y="13" width="7" height="7" rx="1.500" />
  </Icon>
);

export const CheckCircleIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12.500l2.800 2.800L16 9.500" />
  </Icon>
);

export const GlobeIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.600 2.500 4 5.600 4 9s-1.400 6.500-4 9c-2.600-2.500-4-5.600-4-9s1.400-6.500 4-9z" />
  </Icon>
);

export const ClockIcon =(p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

export const InstagramIcon =(p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
  </Icon>
);

export const WhatsAppIcon =(p: IconProps) => (
  <Icon {...p}>
    <path d="M3 21l1.6-4.7A8.5 8.5 0 1112 20.5a8.5 8.5 0 01-4-1z" />
    <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 01-1.8-1.8l.8-1-1-2z" />
  </Icon>
);
