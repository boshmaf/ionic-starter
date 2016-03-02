(function () {
  'use strict';

  angular
    .module('app.login')
    .config(loginConfigure);

  /* @ngInject */
  function loginConfigure($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
      url: '/',
      templateUrl: 'js/login/login.template.html',
      controller: 'Login',
      controllerAs: 'vm',
    });
  }

  loginConfigure.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
