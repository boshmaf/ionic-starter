(function() {
  'use strict';

  var coreConfig = {
    appErrorPrefix: '[App Error]: ',
    appTitle: 'Mobile',
    appFirebaseId: 'luminous-torch-9140',
    version: '0.0.1',

    events: {
      click: {
        button: {
          login: 'User clicked login button',
          logout: 'User clicked logout button'
        }
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
    firebaseHandlerProvider) {

    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }

    exceptionHandlerProvider.configure(coreConfig.appErrorPrefix);
    firebaseHandlerProvider.configure(coreConfig.appFirebaseId);
  }
  coreConfigure.$inject = ['$logProvider', 'exceptionHandlerProvider', 'firebaseHandlerProvider'];

})();
