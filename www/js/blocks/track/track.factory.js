(function() {
  'use strict';

  angular
    .module('blocks.track')
    .factory('track', track);

  /* @ngInject */
  function track(logger) {
    var factory = {
      event: event,
      view: view,
      dataStore: logger,
      setDataStore: setDataStore
    };
    return factory;

    function event(name, data) {
      factory.dataStore.log(name, getTypedData(data, 'event'));
    }

    function view(name, data) {
      factory.dataStore.log(name, getTypedData(data, 'view'));
    }

    function setDataStore(dataStore) {
      var validDataStore = logger;
      if (dataStore) {
        if (dataStore.hasOwnProperty('log') && angular.isFunction(dataStore.log)) {
          validDataStore = dataStore;
        } else {
          logger.error('Datastore must offer a log function');
        }
      }
      factory.dataStore = validDataStore;
    }

    function getTypedData(data, type) {
      if (data) {
        data.type = type;
      } else {
        data = {
          type: type
        };
      }
      return data;
    }
  }

  track.$inject = ['logger'];

})();
