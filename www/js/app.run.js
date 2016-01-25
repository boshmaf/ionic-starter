(function () {
  'use strict';

  angular
    .module('app')
    .run(appRun);

  appRun.$inject = ['$ionicPlatform'];

  /* @ngInject */
  function appRun($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }

})();
