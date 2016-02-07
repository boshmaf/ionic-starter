(function() {
  'use strict';

  angular
    .module('blocks.exception')
    .provider('exceptionHandler', exceptionHandlerProvider);

  function exceptionHandlerProvider() {
    var provider = {
      config : {
        appErrorPrefix: undefined
      },
      configure: configure,
      $get: getFactory
    };
    return provider;

    function configure(appErrorPrefix) {
      provider.config.appErrorPrefix = appErrorPrefix;
    }

    function getFactory() {
      var factory = {
        config: provider.config
      }
      return factory;
    }
  }

})();
