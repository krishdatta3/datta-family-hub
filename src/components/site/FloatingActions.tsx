import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur sm:inset-x-auto sm:bottom-6 sm:right-6 sm:flex-col sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
      <a
        href="https://wa.me/919404884450?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A4%BE%E0%A4%B0"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-medium text-whatsapp-foreground shadow-soft animate-pulse-ring press transition-transform hover:scale-[1.03] sm:flex-none"
      >
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>
      <a
        href="tel:9404884450"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft press transition-transform hover:scale-[1.03] sm:flex-none"
      >
        <Phone className="h-5 w-5" /> कॉल करा
      </a>
    </div>
  );
}
