(function () {
  'use strict';

  angular
    .module('app.login')
    .controller('Login', Login);

  Login.$inject = ['logger', 'tracker'];

  /* @ngInject */
  function Login(logger, tracker) {
    var vm = this;

    vm.triggerTemplateFeatures = triggerTemplateFeatures;

    function triggerTemplateFeatures() {
      // log and error
      var errorData = {
        message: 'This is an error message',
        cause: 'And this is why we triggered it'
      };
      logger.error('Login feature unavailable', errorData);

      // track a view or an event
      tracker.trackView(tracker.views.login);
      tracker.trackEvent(tracker.events.login.tapped);
    }
  }

})();
