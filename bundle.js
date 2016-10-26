'use strict';

var AngularticsOptimizelyConfig = ['$analyticsProvider', function AngularticsOptimizelyConfig($analyticsProvider) {
  $analyticsProvider.settings.pageTracking.trackRelativePath = true;
  window.optimizely = window.optimizely || [];

  var trackEvent = function trackEvent(what, value) {
    var evt = ['trackEvent', what.replace(/\s+\|\s+/g, '_').replace(/\W+/g, 'X')];
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

  $analyticsProvider.registerEventTrack(function (eventType, _ref) {
    var revenue = _ref.revenue;

    // optimizely only has one event that accepts a value
    trackEvent(eventType, revenue);
  });

  $analyticsProvider.registerSetUsername(function (id) {
    return window.optimizely.push(['setUserId', id]);
  });
}];

angular.module('angulartics.optimizely', ['angulartics']).config(AngularticsOptimizelyConfig);

module.exports = AngularticsOptimizelyConfig;