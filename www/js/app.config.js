(function () {
  'use strict';

  angular
    .module('app')
    .config(appConfigure);

  /* @ngInject */
  function appConfigure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

  appConfigure.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
