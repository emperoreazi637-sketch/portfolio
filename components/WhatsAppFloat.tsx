import { MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

/** Subtle floating WhatsApp button — small, lime dot accent, out of the way. */
export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-cream transition-colors duration-200 hover:border-lime hover:text-lime md:bottom-6 md:right-6"
    >
      <MessageCircle size={19} aria-hidden />
      <span aria-hidden className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-lime" />
    </a>
  );
}
