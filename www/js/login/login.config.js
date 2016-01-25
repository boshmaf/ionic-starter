(function () {
  'use strict';

  angular
    .module('app.login')
    .config(loginConfig);

  loginConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* @ngInject */
  function loginConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
      url: '/',
      templateUrl: 'js/login/login.template.html',
      controller: 'Login',
      controllerAs: 'vm',
    });
  }

})();
