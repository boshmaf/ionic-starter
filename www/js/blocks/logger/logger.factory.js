(function() {
  'use strict';

  angular
    .module('blocks.logger')
    .factory('logger', logger);

  logger.$inject = ['$log'];

  /* @ngInject */
  function logger($log) {
    var factory = {
      showToasts: true,

      error: error,
      info: info,
      success: success,
      warning: warning,
      log: $log.log
    };
    return factory;

    function error(message, data) {
      toast(message);
      $log.error('Error: ' + message, data);
    }

    function info(message, data) {
      toast(message);
      $log.info('Info: ' + message, data);
    }

    function success(message, data) {
      toast(message);
      $log.info('Success: ' + message, data);
    }

    function warning(message, data) {
      toast(message);
      $log.warn('Warning: ' + message, data);
    }

    function toast(message) {
      if (factory.showToasts) {
        window.plugins.toast.showShortBottom(message);
      }
    }
  }

}());
