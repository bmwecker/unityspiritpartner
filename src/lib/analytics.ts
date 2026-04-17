// Analytics tracking for tel: and mailto: link clicks
// Safe to use even without gtag loaded

function getContactLocation(element: HTMLElement): string {
  const dataLocation = element.closest("[data-contact-location]")?.getAttribute("data-contact-location");
  if (dataLocation) return dataLocation;
  if (element.closest("header")) return "Header";
  if (element.closest("footer")) return "Footer";
  if (element.closest(".mobile-contact-bar, [class*='fixed bottom']")) return "Mobile Bar";
  return "Other";
}

function trackContactClick(type: "phone" | "email", location: string, href: string) {
  try {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "contact_click", {
        event_category: "Contact",
        event_label: `${type}_${location}`,
        contact_type: type,
        contact_location: location,
        link_url: href,
      });
    }
    // Also log to console in dev
    if (import.meta.env.DEV) {
      console.log(`[Analytics] contact_click: ${type} from ${location}`);
    }
  } catch {
    // Silently fail - analytics should never break the site
  }
}

let initialized = false;

export function initContactTracking() {
  if (initialized) return;
  initialized = true;

  document.addEventListener("click", (e) => {
    const link = (e.target as HTMLElement).closest("a[href]") as HTMLAnchorElement | null;
    if (!link) return;

    const href = link.getAttribute("href") || "";
    if (href.startsWith("tel:")) {
      trackContactClick("phone", getContactLocation(link), href);
    } else if (href.startsWith("mailto:")) {
      trackContactClick("email", getContactLocation(link), href);
    }
  });
}
