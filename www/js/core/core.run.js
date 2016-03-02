(function () {
  'use strict';

  angular
    .module('app.core')
    .run(appCoreRun);

  /* @ngInject */
  function appCoreRun($rootScope) {
    $rootScope._ = window._;
  }

  appCoreRun.$inject = ['$rootScope'];

})();
