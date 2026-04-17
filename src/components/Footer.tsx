import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Cookie } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const linkGroups = {
  Services: [
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "Custom Bots", href: "/services/custom-bots" },
    { label: "Data Extraction", href: "/services/data-extraction" },
    { label: "Cybersecurity", href: "/services/cybersecurity" },
    { label: "Technical SEO", href: "/services/technical-seo" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Framework", href: "/framework" },
    { label: "Security", href: "/security-compliance" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Blog", href: "/resources" },
    { label: "Process", href: "/process" },
    { label: "Industries", href: "/industries" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (365) 855-8777",
    href: "tel:+13658558777",
    sub: "Mon-Fri 9am-6pm EST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@unityspiritpartners.com",
    href: "mailto:contact@unityspiritpartners.com",
    sub: "24-hour response time",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "100 King Street West, Suite 5600",
    sub: "Toronto, Ontario M5X 1C9, Canada",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background pb-20 sm:pb-8">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Get in Touch */}
        <div className="mb-16 pb-12 border-b border-border/50">
          <h3 className="font-heading font-bold text-lg mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactItems.map((item) => (
              <div key={item.label} className="flex gap-3 items-start">
                <item.icon size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      data-contact-location="Footer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold">{item.value}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold font-heading">
              <img src={logoIcon} alt="Unity Spirit logo" className="h-8 w-8" />
              Unity<span className="text-gradient">Spirit</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Security-First Operations Automation for modern organizations.
            </p>
          </div>
          {Object.entries(linkGroups).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025–{new Date().getFullYear()} Unity Spirit Partners Inc. All rights reserved.</p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("reopen-cookie-consent"))}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Cookie preferences"
          >
            <Cookie className="size-4" />
            <span>Cookie Preferences</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
