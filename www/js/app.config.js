(function () {
  'use strict';

  angular
    .module('app')
    .config(appConfigure);

  appConfigure.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* @ngInject */
  function appConfigure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

})();
