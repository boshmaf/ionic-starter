(function() {
  'use strict';

  var config = {
    appErrorPrefix: '[App Error]: ',
    appTitle: 'Bridge',
    version: '1.0.0',

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
  function coreConfig($logProvider, exceptionHandlerProvider, trackerProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }

    exceptionHandlerProvider.configure(config.appErrorPrefix);
    trackerProvider.configure(config.events, config.views);
  }
  coreConfig.$inject = ['$logProvider', 'exceptionHandlerProvider', 'trackerProvider'];

})();
