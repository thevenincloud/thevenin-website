import Script from 'next/script'

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  // Only load in production and if gaId is valid
  if (!gaId || gaId === 'G-XXXXXXXXXX' || process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Set default consent to denied
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
