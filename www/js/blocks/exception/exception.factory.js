(function() {
  'use strict';

  angular
    .module('blocks.exception')
    .factory('exception', exception);

  exception.$inject = ['$log'];

  /* @ngInject */
  function exception($log) {
    var factory = {
      catcher: catcher
    };
    return factory;

    function catcher(message) {
      return function(reason) {
          $log.error(message, reason);
      };
    }
  }

})();
