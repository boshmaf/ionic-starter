(function() {
  'use strict';

  angular
    .module('blocks.firebase')
    .factory('firebaseDataStore', firebaseDataStore);

  /* @ngInject */
  function firebaseDataStore(firebaseHandler) {
    var trackingRef = firebaseHandler.getRootRef().child('tracking');
    var userId = null;

    var factory = {
      log: log,
      setUserId: setUserId
    };
    return factory;

    function log(message, data) {
      if (userId) {
        trackingRef
          .child(userId)
          .push({
            message: message,
            data: data
          });
      }
    }

    function setUserId(id) {
      userId = id;
    }
  }

  firebaseDataStore.$inject = ['firebaseHandler'];

})();
