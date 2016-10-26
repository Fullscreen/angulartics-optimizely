export default [
  '$analyticsProvider',
  function AngularticsOptimizelyConfig (
    $analyticsProvider
  ) {
    $analyticsProvider.settings.pageTracking.trackRelativePath = true
    window.optimizely = window.optimizely || []

    const trackEvent = (what, value) => {
      window.optimizely.push(['trackEvent', what.replace(/\s+\|\s+/g, '_').replace(/\W+/g, 'X')])
    }

    $analyticsProvider.registerPageTrack((path, $location) => {
      if ($analyticsProvider.settings.optimizely) {
        trackEvent($analyticsProvider.settings.optimizely.properties.pageName || path)
      }
    })

    $analyticsProvider.registerEventTrack((eventType, {revenue}) => {
      // optimizely only has one event that accepts a value
      trackEvent(eventType, revenue)
    })

    $analyticsProvider.registerSetUsername(id => window.optimizely.push(['setUserId', id]))
  }
]
