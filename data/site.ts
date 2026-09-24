export const SITE = {
  name: "Ojo Ezekiel O.",
  shortName: "OJO.",
  fullName: "OJO EZEKIEL O.",
  title: "AI Automation & Web Developer",
  phone: "+234 704 563 4257",
  phoneHref: "tel:+2347045634257",
  // TODO: replace with the exact LinkedIn profile URL supplied by Ojo.
  // The user brief requires the exact URL — none was provided, so this
  // placeholder is used everywhere (footer, contact page, mobile menu).
  linkedin: "https://www.linkedin.com/in/your-profile",
  location: "Lagos, Nigeria",
  availability: "Available for select projects",
  url: "https://ojoezekiel.dev", // <-- replace with production domain for canonical URLs
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
] as const;
