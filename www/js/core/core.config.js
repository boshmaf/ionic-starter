(function() {
  'use strict';

  var config = {
    appErrorPrefix: '[App Error]: ',
    appTitle: 'Bridge',
    version: '1.0.0'
  };

  angular
    .module('app.core')
    .value('config', config)
    .config(coreConfig);

  /* @ngInject */
  function coreConfig($logProvider, exceptionHandlerProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }

    exceptionHandlerProvider.configure(config.appErrorPrefix);
  }
  coreConfig.$inject = ['$logProvider', 'exceptionHandlerProvider'];

})();
