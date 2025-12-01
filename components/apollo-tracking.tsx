'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export function ApolloTracking({ apolloId }: { apolloId: string }) {
  const [consentGiven, setConsentGiven] = useState(false)

  // Only load in production and if apolloId is valid
  if (!apolloId || process.env.NODE_ENV !== 'production') {
    return null
  }

  useEffect(() => {
    // Check if marketing consent was previously given
    const consent = localStorage.getItem('cookie-consent')
    if (consent) {
      const consentData = JSON.parse(consent)
      setConsentGiven(consentData.marketing === true)
    }

    // Listen for consent changes
    const handleConsentChange = (event: CustomEvent) => {
      setConsentGiven(event.detail.marketing === true)
    }

    window.addEventListener('cookie-consent-change' as any, handleConsentChange)
    return () => {
      window.removeEventListener('cookie-consent-change' as any, handleConsentChange)
    }
  }, [])

  // Only render if consent is given
  if (!consentGiven) {
    return null
  }

  return (
    <Script
      id="apollo-tracking"
      strategy="lazyOnload"
      data-category="marketing"
      dangerouslySetInnerHTML={{
        __html: `
          function initApollo(){
            var n=Math.random().toString(36).substring(7),
            o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
            o.async=!0,
            o.defer=!0,
            o.onload=function(){
              window.trackingFunctions.onLoad({appId:"${apolloId}"})
            },
            document.head.appendChild(o)
          }
          initApollo();
        `,
      }}
    />
  )
}
