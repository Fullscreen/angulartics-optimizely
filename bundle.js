'use strict';

var AngularticsOptimizelyConfig = ['$analyticsProvider', function AngularticsOptimizelyConfig($analyticsProvider) {
  $analyticsProvider.settings.pageTracking.trackRelativePath = true;
  window.optimizely = window.optimizely || [];

  var trackEvent = function trackEvent(what, value) {
    var evt = ['trackEvent', what.replace(/\s?\|\s?/g, '_').replace(/\W+/g, 'X')];
    if (value) {
      evt.push({ revenue: value });
    }
    window.optimizely.push(evt);
  };

  $analyticsProvider.registerPageTrack(function (path, $location) {
    if ($analyticsProvider.settings.optimizely) {
      trackEvent($analyticsProvider.settings.optimizely.properties.pageName || path);
    }
  });

  $analyticsProvider.registerEventTrack(function (eventType) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        revenue = _ref.revenue;

    // the only value optimizely will track is revenue
    trackEvent(eventType, revenue);
  });
}];

/* global angular */
angular.module('angulartics.optimizely', ['angulartics']).config(AngularticsOptimizelyConfig);

module.exports = AngularticsOptimizelyConfig;
