'use client';

import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>

      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="GOOGLE_SEARCH_CONSOLE_CODE" />
      
      {/* Bing Webmaster Tools */}
      <meta name="msvalidate.01" content="BING_WEBMASTER_CODE" />
    </>
  );
}