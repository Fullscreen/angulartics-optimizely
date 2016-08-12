'use strict';

var AngularticsOptimizelyConfig = ['$analyticsProvider', function AngularticsOptimizelyConfig($analyticsProvider) {
  $analyticsProvider.settings.pageTracking.trackRelativePath = true;
  window.optimizely = window.optimizely || [];

  var trackEvent = function trackEvent(what) {
    window.optimizely.push(['trackEvent', what.replace(/\s+\|\s+/g, '_').replace(/\W+/g, 'X')]);
  };

  $analyticsProvider.registerPageTrack(function (path, $location) {
    if ($analyticsProvider.settings.optimizely) {
      trackEvent($analyticsProvider.settings.optimizely.properties.pageName || path);
    }
  });

  $analyticsProvider.registerEventTrack(function (eventType) {
    return trackEvent(eventType);
  });

  $analyticsProvider.registerSetUsername(function (id) {
    return window.optimizely.push(['setUserId', id]);
  });
}];

angular.module('angulartics.optimizely', ['angulartics']).config(AngularticsOptimizelyConfig);

module.exports = AngularticsOptimizelyConfig;