(function() {
  'use strict';

  angular
    .module('blocks.firebase')
    .factory('firebaseAuth', firebaseAuth);

  firebaseAuth.$inject = ['$firebaseAuth', 'firebaseHandler', 'logger'];

  /* @ngInject */
  function firebaseAuth($firebaseAuth, firebaseHandler, logger) {
    var rootRef = firebaseHandler.getRootRef();

    var factory = {
      isAuth: false,
      authData: null,
      authRef: $firebaseAuth(rootRef),
      authWithOAuthPopup: authWithOAuthPopup,
      unAuth: unAuth,
      getDisplayName: getDisplayName
    };

    rootRef.onAuth(authDataCallback);
    return factory;

    function authWithOAuthPopup(provider) {
      if (factory.isAuth) {
        return;
      }

      factory
        .authRef
        .$authWithOAuthPopup(provider)
        .then(successCallback, errorCallback);

      function successCallback() {
        factory.isAuth = true;
      }

      function errorCallback(errorData) {
        factory.isAuth = false;
        logger.error('Could not auth to ' + provider, errorData);
      }
    }

    function unAuth() {
      if (factory.isAuth) {
        factory.authRef.$unauth();
        factory.isAuth = false;
      }
    }

    function authDataCallback(authData) {
      if (authData !== null) {
        factory.authData = authData;
        factory.isAuth = true;
        rootRef
          .child('users')
          .child(authData.uid)
          .set({
            provider: authData.provider,
            displayName: getDisplayName(authData)
          });
      } else {
        factory.isAuth = false;
      }
    }

    function getDisplayName(authData) {
      if (!factory.isAuth) {
        return null;
      }
      if (authData === undefined) {
        authData = factory.authData;
      }
      switch(authData.provider) {
        case 'password':
          return authData.password.email.replace(/@.*/, '');
        case 'twitter':
          return authData.twitter.displayName;
        case 'facebook':
          return authData.facebook.displayName;
        case 'github':
          return authData.github.displayName;
      }
    }
  }

})();
