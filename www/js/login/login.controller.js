(function () {
  'use strict';

  angular
    .module('app.login')
    .controller('Login', Login);

  /* @ngInject */
  function Login(logger) {
    var vm = this;

    vm.triggerAppError = triggerAppError;

    function triggerAppError() {
      var errorData = {
        message: 'This is the error message',
        cause: 'And this is why we are triggering it'
      };
      logger.error('Login feature unavailable', errorData);
    }
  }
  Login.$inject = ['logger'];

})();
