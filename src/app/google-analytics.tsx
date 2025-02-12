import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-HEQVMWMJNM';

export default function Analytics() {
  return (
    <>
      <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
          
          // Track route changes
          const handleRouteChange = function() {
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          };

          // Track client-side route changes
          if (typeof window !== 'undefined') {
            window.addEventListener('pushstate', handleRouteChange);
            window.addEventListener('popstate', handleRouteChange);
          }
        `}
      </Script>
    </>
  );
}
