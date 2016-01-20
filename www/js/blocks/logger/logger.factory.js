(function() {
  'use strict';

  angular
    .module('blocks.logger')
    .factory('logger', logger);

  /* @ngInject */
  function logger($log) {
    var service = {
      showToasts: true,
      error: error,
      info: info,
      success: success,
      warning: warning,
      log: $log.log
    };

    return service;

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
      if (service.showToasts) {
        window.plugins.toast.showShortBottom(message);
      }
    }
  }
  logger.$inject = ['$log'];

}());
