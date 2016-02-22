(function() {
  'use strict';

  firebaseDataStore.$inject = ['firebaseHandler', 'logger'];
  angular
    .module('blocks.firebase')
    .factory('firebaseDataStore', firebaseDataStore);

  /* @ngInject */
  function firebaseDataStore(firebaseHandler, logger) {
    var rootRef = firebaseHandler.getRootRef();
    var userId = null;

    var factory = {
      trackingRef: rootRef.child('tracking'),
      setUserId: setUserId,
      log: log
    };
    return factory;

    function setUserId(id) {
      userId = id;
    }

    function log(message, data) {
      if (userId) {
        factory
        .trackingRef
        .child(userId)
        .push({
          message: message,
          data: data
        });
      }
    }
  }

})();
