(function() {
  'use strict';

  angular
    .module('blocks.firebase')
    .factory('firebaseObject', firebaseObject);

  firebaseObject.$inject = ['$firebaseObject', 'firebaseHandler'];

  /* @ngInject */
  function firebaseObject($firebaseObject, firebaseHandler) {
    return $firebaseObject(firebaseHandler.getRootRef());
  }

})();
