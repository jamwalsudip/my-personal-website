import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const GA_ID = "G-HEQVMWMJNM";

function sendTimeOnPage(timeSpent: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "time_on_page", {
      event_category: "engagement",
      event_label: window.location.pathname,
      value: timeSpent
    });
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const startTimeRef = useRef<number>(Date.now());

  // Track pageviews and reset timer on route change
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_ID, { page_path: pathname });
    }
    // Reset start time on route change
    startTimeRef.current = Date.now();
  }, [pathname, searchParams]);

  // On unmount (or before route change), send time on page event
  useEffect(() => {
    return () => {
      const endTime = Date.now();
      const timeSpent = Math.round((endTime - startTimeRef.current) / 1000); // seconds
      sendTimeOnPage(timeSpent);
    };
  }, []);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
