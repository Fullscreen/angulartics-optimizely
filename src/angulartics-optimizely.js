export default function AngularticsOptimizelyConfig (
  $analyticsProvider,
  $window
) {
  $analyticsProvider.settings.pageTracking.trackRelativePath = true
  $window.optimizely = $window.optimizely || []

  const trackEvent = (type = 'trackEvent', ...what) => {
    what.unshift(type)
    $window.optimizely.push(what)
  }

  $analyticsProvider.registerPageTrack((path, $location) => {
    trackEvent($analyticsProvider.settings.optimizely.properties.pageName || path)
  })

  $analyticsProvider.registerEventTrack(function (eventType, properties) {
    trackEvent(eventType)
  })
}
