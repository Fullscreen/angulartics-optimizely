/* global angular */
import AngularticsOptimizelyConfig from './angulartics-optimizely'
export default AngularticsOptimizelyConfig
angular.module('angulartics.optimizely', ['angulartics']).config(AngularticsOptimizelyConfig)
