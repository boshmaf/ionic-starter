(function() {
  'use strict';

  angular
    .module('blocks.track')
    .provider('track', trackProvider);

  function trackProvider() {
    var provider = {
      config: {
        dataStore: undefined
      },
      configure: configure,
      $get: getFactory
    };
    return provider;

    function configure(dataStore) {
      provider.config.dataStore = dataStore;
    }

    getFactory.$inject = ['logger'];

    /* @ngInject */
    function getFactory(logger) {
      var factory = {
        event: event,
        view: view,
        dataStore: getDataStore(provider.config.dataStore)
      };
      return factory;

      function event(name, data) {
        factory.dataStore.log(name, getTypedData(data, 'event'));
      }

      function view(name, data) {
        factory.dataStore.log(name, getTypedData(data, 'view'));
      }

      function getDataStore(dataStore) {
        var validDataStore = logger;
        if (dataStore) {
          if (dataStore.hasOwnProperty('log') && angular.isFunction(dataStore.log)) {
            validDataStore = dataStore;
          } else {
            logger.error('Datastore must offer a log function');
          }
        }
        return validDataStore;
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
  }

})();
