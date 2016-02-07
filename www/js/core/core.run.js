(function () {
  'use strict';

  angular
    .module('app.core')
    .run(appCoreRun);

  appCoreRun.$inject = ['$rootScope'];

  /* @ngInject */
  function appCoreRun($rootScope) {
    $rootScope._ = window._;
  }

})();
