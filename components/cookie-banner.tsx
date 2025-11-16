'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else {
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
      applyConsent(savedPreferences)
    }
  }, [])

  const applyConsent = (prefs: typeof preferences) => {
    if (prefs.analytics) {
      enableGoogleAnalytics()
    } else {
      disableGoogleAnalytics()
    }

    if (prefs.marketing) {
      enableApollo()
    } else {
      disableApollo()
    }
  }

  const enableGoogleAnalytics = () => {
    // Update consent mode
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
  }

  const disableGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      })
    }
  }

  const enableApollo = () => {
    // Apollo.io tracking enable logic
    // Add your Apollo.io initialization here if needed
  }

  const disableApollo = () => {
    // Apollo.io tracking disable logic
    // Add your Apollo.io disable logic here if needed
  }

  const acceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    savePreferences(newPreferences)
  }

  const acceptNecessary = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    savePreferences(newPreferences)
  }

  const saveCustomPreferences = () => {
    savePreferences(preferences)
  }

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs))
    applyConsent(prefs)
    setShowBanner(false)
    setShowSettings(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 pb-4 px-4 sm:px-6 lg:px-8">
      <div className="relative bg-card border border-border rounded-lg shadow-lg p-6 max-w-5xl mx-auto">
        <button
          onClick={acceptNecessary}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {!showSettings ? (
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">We Value Your Privacy</h3>
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your browsing experience, analyze site traffic with Google Analytics, 
                and provide personalized marketing through Apollo.io. By clicking "Accept All", you consent to 
                our use of cookies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={acceptAll}
                className="flex-1"
              >
                Accept All
              </Button>
              <Button
                onClick={acceptNecessary}
                variant="secondary"
                className="flex-1"
              >
                Necessary Only
              </Button>
              <Button
                onClick={() => setShowSettings(true)}
                variant="secondary"
                className="flex-1"
              >
                Customize
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Cookie Preferences</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Choose which cookies you want to accept. You can change these settings at any time.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between p-4 border border-border rounded-lg bg-muted/50">
                <div className="flex-1">
                  <h4 className="font-medium text-sm mb-1">Necessary Cookies</h4>
                  <p className="text-xs text-muted-foreground">
                    Required for the website to function properly. Cannot be disabled.
                  </p>
                </div>
                <div className="ml-4">
                  <div className="w-11 h-6 bg-primary rounded-full flex items-center px-1">
                    <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between p-4 border border-border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-sm mb-1">Analytics Cookies (Google Analytics)</h4>
                  <p className="text-xs text-muted-foreground">
                    Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                    className={`w-11 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.analytics ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.analytics ? 'translate-x-5' : ''
                      }`}
                    ></div>
                  </button>
                </div>
              </div>

              <div className="flex items-start justify-between p-4 border border-border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-sm mb-1">Marketing Cookies (Apollo.io)</h4>
                  <p className="text-xs text-muted-foreground">
                    Used to track visitors across websites to display relevant advertisements and marketing content.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                    className={`w-11 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.marketing ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.marketing ? 'translate-x-5' : ''
                      }`}
                    ></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={saveCustomPreferences}
                className="flex-1"
              >
                Save Preferences
              </Button>
              <Button
                onClick={() => setShowSettings(false)}
                variant="secondary"
                className="flex-1"
              >
                Back
              </Button>
            </div>
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            For more information, please read our{' '}
            <a href="/privacy-policy" className="underline hover:text-foreground">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms-of-service" className="underline hover:text-foreground">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
