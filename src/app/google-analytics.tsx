import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HEQVMWMJNM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HEQVMWMJNM');

          // Track page views
          const handlePageView = () => {
            gtag('event', 'page_view', {
              page_path: window.location.pathname
            });
          };

          // Initial page view
          handlePageView();

          // Track route changes
          const observer = new MutationObserver(() => {
            handlePageView();
          });

          observer.observe(document.documentElement, {
            subtree: true,
            childList: true
          });
        `}
      </Script>
    </>
  );
}
