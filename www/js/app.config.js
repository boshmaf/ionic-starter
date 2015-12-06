(function () {
  'use strict';

  angular
    .module('app')
    .config(appConfig);

  /* @ngInject */
  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
  appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
