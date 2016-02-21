(function() {
  'use strict';

  angular
    .module('blocks.firebase')
    .provider('firebaseHandler', firebaseHandlerProvider);

  function firebaseHandlerProvider() {
    var provider = {
      config: {
        appId: undefined,
        rootRef: undefined
      },
      configure: configure,
      $get: getFactory
    };
    return provider;

    function configure(appId) {
      var rootRef = new Firebase('https://' + appId + '.firebaseio.com/');
      provider.config.appId = appId;
      provider.config.rootRef = rootRef;
    }

    /* @ngInject */
    function getFactory() {
      var factory = {
        config: provider.config,
        getRootRef: getRootRef
      };
      return factory;

      function getRootRef() {
        return factory.config.rootRef;
      }
    }
  }

})();
