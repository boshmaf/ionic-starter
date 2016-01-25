(function() {
  'use strict';

  angular
    .module('blocks.exception')
    .config(exceptionConfig);

  exceptionConfig.$inject = ['$provide'];

  /* @ngInject */
  function exceptionConfig($provide) {
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
  }

  /* @ngInject */
  function extendExceptionHandler($delegate, exceptionHandler, logger) {
    return function(exception, cause) {
      var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
      var errorData = {
        exception: exception,
        cause: cause
      };

      exception.message = appErrorPrefix + exception.message;
      $delegate(exception, cause);
      logger.error(exception.message, errorData);
    };
  }
  extendExceptionHandler.$inject = ['$delegate', 'exceptionHandler', 'logger'];

})();
