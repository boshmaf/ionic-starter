(function() {
  'use strict';

  angular
    .module('blocks.tracker')
    .provider('tracker', trackerProvider);

  function trackerProvider() {
    /* jshint validthis:true */
    this.config = {
      events: undefined,
      views: undefined,
      dataStore: undefined
    };

    this.configure = function (events, views, dataStore) {
      this.config.events = events;
      this.config.views = views;
      this.config.dataStore = dataStore;
    };

    /* @ngInject */
    this.$get = ['logger', function(logger) {
      var service = {
        trackEvent: trackEvent,
        trackView: trackView,

        types: {
          event: 'event',
          view: 'view'
        },

        events: this.config.events,
        views: this.config.views,

        dataStore: getDataStore(this.config.dataStore)
      };
      return service;

      function trackEvent(name, data) {
        track(service.types.event, name, data);
      }

      function trackView(name, data) {
        track(service.types.view, name, data);
      }

      function getDataStore(dataStore) {
        var validDataStore = logger;
        if (dataStore) {
          if (dataStore.hasOwnProperty('log') && typeof dataStore.log === 'function') {
            validDataStore = dataStore;
          } else {
            logger.error('Datastore must offer a log function');
          }
        }
        return validDataStore;
      }

      function setDataTrackingType(data, type) {
        if (data) {
          data.type = type;
        } else {
          data = {
            type: type
          };
        }
        return data;
      }

      function track(type, name, data) {
        var typedData = setDataTrackingType(data, type);
        if (service.dataStore) {
          service.dataStore.log(name, typedData);
        } else {
          logger.error('Datastore must offer a log function');
        }
      }
    }];
    this.$get.$inject = ['logger'];
  }

})();
