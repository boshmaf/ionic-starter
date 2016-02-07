(function() {
  'use strict';

  var config = {
    appErrorPrefix: '[App Error]: ',
    appTitle: 'Mobile',
    version: '0.0.1',

    events: {
      login: {
        tapped: 'User tapped the screen'
      }
    },

    views: {
      login: 'Login'
    }
  };

  angular
    .module('app.core')
    .value('config', config)
    .config(coreConfig);

  /* @ngInject */
  function coreConfig($logProvider, exceptionHandlerProvider, trackProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }

    exceptionHandlerProvider.configure(config.appErrorPrefix);
    trackProvider.configure();
  }
  coreConfig.$inject = ['$logProvider', 'exceptionHandlerProvider', 'trackProvider'];

})();
