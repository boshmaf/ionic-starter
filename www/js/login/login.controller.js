(function () {
  'use strict';

  angular
    .module('app.login')
    .controller('Login', Login);

  Login.$inject = ['logger', 'track', 'coreConfig', '$translate'];

  /* @ngInject */
  function Login(logger, track, coreConfig, $translate) {
    var vm = this;

    vm.triggerTemplateFeatures = triggerTemplateFeatures;

    function triggerTemplateFeatures() {
      // log an error
      var errorData = {
        message: 'This is an error message',
        cause: 'And this is why we triggered it'
      };
      logger.error('Login feature unavailable', errorData);

      // track a view or an event
      track.view(coreConfig.views.login);
      track.event(coreConfig.events.login.tapped);

      // translate a keyword
      $translate('HELLO_WORLD').then(function (translation) {
        logger.log(translation);
      });
    }
  }

})();
