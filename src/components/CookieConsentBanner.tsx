import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const CONSENT_KEY = "cookie-consent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleReopen = () => setVisible(true);
    window.addEventListener("reopen-cookie-consent", handleReopen);
    return () => window.removeEventListener("reopen-cookie-consent", handleReopen);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-20 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] sm:bottom-6 sm:right-6"
        >
          <div className="rounded-2xl border border-border bg-card/95 backdrop-blur-lg p-5 shadow-2xl shadow-black/20">
            <div className="flex items-start gap-3 mb-4">
              <Cookie className="size-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                We use cookies to improve your experience.{" "}
                <Link
                  to="/cookie-policy"
                  className="text-primary hover:underline font-medium"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="flex-1 text-xs"
              >
                Decline
              </Button>
              <Button
                variant="gradient"
                size="sm"
                onClick={handleAccept}
                className="flex-1 text-xs"
              >
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
