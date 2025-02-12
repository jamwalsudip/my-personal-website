import Script from 'next/script'

export default function GoogleAnalytics() {
  const handleGtagLoad = () => {
    console.log('Google Analytics script loaded successfully');
  };

  const handleGtagError = () => {
    console.error('Failed to load Google Analytics script');
  };

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HEQVMWMJNM"
        strategy="afterInteractive"
        onLoad={handleGtagLoad}
        onError={handleGtagError}
      />
      <Script 
        id="google-analytics" 
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Google Analytics configuration loaded');
        }}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          console.log('Initializing Google Analytics with ID: G-HEQVMWMJNM');
          gtag('config', 'G-HEQVMWMJNM');
        `}
      </Script>
    </>
  )
}
