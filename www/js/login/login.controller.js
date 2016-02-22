(function () {
  'use strict';

  angular
    .module('app.login')
    .controller('Login', Login);

  /* @ngInject */
  function Login(
    $scope,
    logger,
    track,
    coreConfig,
    firebaseAuth) {

    var vm = this;

    vm.displayName = firebaseAuth.getDisplayName();

    vm.isLoggedIn = isLoggedIn;
    vm.loginWithGithub = loginWithGithub;
    vm.logout = logout;

    $scope.$on('$ionicView.enter', onViewEnterHandler);

    function isLoggedIn() {
      return firebaseAuth.isAuth;
    }

    function loginWithGithub() {
      firebaseAuth.authWithOAuthPopup('github');
    }

    function logout() {
      firebaseAuth.unAuth();
    }

    function onViewEnterHandler() {
      track.view(coreConfig.views.login);
    }
  }

  Login.$inject = ['$scope', 'logger', 'track', 'coreConfig', 'firebaseAuth'];

})();
