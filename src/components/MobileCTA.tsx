import { Link } from "react-router-dom";
import { Phone, Mail, MessageSquare } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] bg-background/95 backdrop-blur-xl border-t border-primary/20 p-2 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="flex justify-around gap-2">
        <a
          href="tel:+13658558777"
          className="flex flex-col items-center gap-1 flex-1 py-2 px-3 rounded-xl bg-primary/10 border border-primary/20 text-primary/80 hover:bg-primary/20 transition-all text-center"
          data-contact-location="Mobile Bar"
        >
          <Phone size={20} />
          <span className="text-[0.7rem] font-semibold">Call</span>
        </a>
        <a
          href="mailto:contact@unityspiritpartners.com"
          className="flex flex-col items-center gap-1 flex-1 py-2 px-3 rounded-xl bg-primary/10 border border-primary/20 text-primary/80 hover:bg-primary/20 transition-all text-center"
          data-contact-location="Mobile Bar"
        >
          <Mail size={20} />
          <span className="text-[0.7rem] font-semibold">Email</span>
        </a>
        <Link
          to="/contact"
          className="flex flex-col items-center gap-1 flex-1 py-2 px-3 rounded-xl bg-gradient-accent text-primary-foreground transition-all text-center"
        >
          <MessageSquare size={20} />
          <span className="text-[0.7rem] font-semibold">Message</span>
        </Link>
      </div>
    </div>
  );
}
