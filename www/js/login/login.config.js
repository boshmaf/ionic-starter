(function () {
  'use strict';

  angular
    .module('app.login')
    .config(loginConfigure);

  loginConfigure.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* @ngInject */
  function loginConfigure($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
      url: '/',
      templateUrl: 'js/login/login.template.html',
      controller: 'Login',
      controllerAs: 'vm',
    });
  }

})();
