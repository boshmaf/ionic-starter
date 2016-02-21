(function() {
  'use strict';

  angular.module('app.core', [
    /**
     * Framework modules
     */
    'ionic',
    /**
     * Block modules
     */
    'blocks.exception',
    'blocks.firebase',
    'blocks.logger',
    'blocks.track',
    'blocks.translate'
  ]);

})();
