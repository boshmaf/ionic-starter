(function() {
  'use strict';

  var coreConfig = {
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
    .value('coreConfig', coreConfig)
    .config(coreConfigure);

  /* @ngInject */
  function coreConfigure($logProvider, exceptionHandlerProvider, trackProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }

    exceptionHandlerProvider.configure(coreConfig.appErrorPrefix);
    trackProvider.configure();
  }
  coreConfigure.$inject = ['$logProvider', 'exceptionHandlerProvider', 'trackProvider'];

})();
