export default [
  '$analyticsProvider',
  function AngularticsOptimizelyConfig (
    $analyticsProvider
  ) {
    $analyticsProvider.settings.pageTracking.trackRelativePath = true
    window.optimizely = window.optimizely || []

    const trackEvent = (what, value) => {
      const evt = ['trackEvent', what.replace(/\s+\|\s+/g, '_').replace(/\W+/g, 'X')]
      if (value) {
        evt.push({revenue: value})
      }
      window.optimizely.push(evt)
    }

    $analyticsProvider.registerPageTrack((path, $location) => {
      if ($analyticsProvider.settings.optimizely) {
        trackEvent($analyticsProvider.settings.optimizely.properties.pageName || path)
      }
    })

    $analyticsProvider.registerEventTrack((eventType, {revenue} = {}) => {
      // the only value optimizely will track is revenue
      trackEvent(eventType, revenue)
    })

    $analyticsProvider.registerSetUsername(id => window.optimizely.push(['setUserId', id]))
  }
]
