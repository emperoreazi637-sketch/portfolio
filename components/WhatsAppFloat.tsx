import { MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

/** Small floating WhatsApp button — bottom-right, clear of nav and CTAs. */
export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-pine text-cream shadow-[0_10px_28px_-10px_rgba(18,60,41,0.6)] transition-transform duration-300 hover:scale-105 hover:bg-pinedeep md:bottom-6 md:right-6"
    >
      <MessageCircle size={21} aria-hidden />
    </a>
  );
}
