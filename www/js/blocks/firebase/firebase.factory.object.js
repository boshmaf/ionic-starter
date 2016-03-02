(function() {
  'use strict';

  angular
    .module('blocks.firebase')
    .factory('firebaseObject', firebaseObject);

  /* @ngInject */
  function firebaseObject($firebaseObject, firebaseHandler) {
    return $firebaseObject(firebaseHandler.getRootRef());
  }

  firebaseObject.$inject = ['$firebaseObject', 'firebaseHandler'];

})();
