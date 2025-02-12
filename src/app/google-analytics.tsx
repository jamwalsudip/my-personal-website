import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-HEQVMWMJNM';

const gaScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_MEASUREMENT_ID}');
`;

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {gaScript}
      </Script>
      <Script id="ga-route-change" strategy="afterInteractive">
        {`
          let lastPath = window.location.pathname;
          const handleRouteChange = () => {
            const newPath = window.location.pathname;
            if (newPath !== lastPath) {
              gtag('config', '${GA_MEASUREMENT_ID}', { page_path: newPath });
              lastPath = newPath;
            }
          };
          window.addEventListener('popstate', handleRouteChange);
          const pushState = history.pushState;
          history.pushState = function() {
            pushState.apply(history, arguments);
            handleRouteChange();
          };
        `}
      </Script>
    </>
  );
}
