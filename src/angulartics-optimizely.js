export default [
  '$analyticsProvider',
  function AngularticsOptimizelyConfig (
    $analyticsProvider
  ) {
    $analyticsProvider.settings.pageTracking.trackRelativePath = true
    window.optimizely = window.optimizely || []

    const trackEvent = (what) => {
      window.optimizely.push(['trackEvent', what.replace(/\s+\|\s+/g, '_').replace(/\W+/g, 'X')])
    }

    $analyticsProvider.registerPageTrack((path, $location) => {
      if ($analyticsProvider.settings.optimizely) {
        trackEvent($analyticsProvider.settings.optimizely.properties.pageName || path)
      }
    })

    $analyticsProvider.registerEventTrack(eventType => trackEvent(eventType))

    $analyticsProvider.registerSetUsername(id => window.optimizely.push(['setUserId', id]))
  }
]
