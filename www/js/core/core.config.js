(function() {
  'use strict';

  var coreConfig = {
    appErrorPrefix: '[App Error]: ',
    appTitle: 'Mobile',
    appFirebaseId: 'luminous-torch-9140',
    version: '0.0.1',

    events: {
      login: {
        tapped: 'User tapped login button'
      },
      logout: {
        tapped: 'User tapped logout button'
      }
    },

    views: {
      login: 'Login',
      logout: 'Logout'
    }
  };

  angular
    .module('app.core')
    .value('coreConfig', coreConfig)
    .config(coreConfigure);

  /* @ngInject */
  function coreConfigure(
    $logProvider,
    exceptionHandlerProvider,
    trackProvider,
    firebaseHandlerProvider) {

    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }

    exceptionHandlerProvider.configure(coreConfig.appErrorPrefix);
    trackProvider.configure();
    firebaseHandlerProvider.configure(coreConfig.appFirebaseId);
  }
  coreConfigure.$inject = ['$logProvider', 'exceptionHandlerProvider', 'trackProvider', 'firebaseHandlerProvider'];

})();
