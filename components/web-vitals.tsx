'use client'

import { useEffect } from 'react'
import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric)
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      const body = JSON.stringify(metric)
      const url = '/api/analytics'

      // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
      if (navigator.sendBeacon) {
        navigator.sendBeacon(url, body)
      } else {
        fetch(url, { body, method: 'POST', keepalive: true })
      }
    }
  })

  // Report custom performance metrics
  useEffect(() => {
    // Report Time to Interactive
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('Performance entry:', entry.toJSON())
          }
        })
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] })
      } catch (e) {
        // Handle errors silently
      }
    }
  }, [])

  return null
}
