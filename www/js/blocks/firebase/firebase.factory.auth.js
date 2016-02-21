(function() {
  'use strict';

  angular
    .module('blocks.firebase')
    .factory('firebaseAuth', firebaseAuth);

  firebaseAuth.$inject = ['$firebaseAuth', 'firebaseHandler', 'logger'];

  /* @ngInject */
  function firebaseAuth($firebaseAuth, firebaseHandler, logger) {
    var rootRef = firebaseHandler.getRootRef();
    var authRef = $firebaseAuth(rootRef);
    var authSuccess = false;

    var factory = {
      isAuth: isAuth,
      getAuthRef: getAuthRef,
      authWithOAuthPopup: authWithOAuthPopup,
      unAuth: unAuth,
    };

    rootRef.onAuth(authDataCallback);
    return factory;

    function isAuth() {
      return authSuccess;
    }

    function getAuthRef() {
      return authRef;
    }

    function authWithOAuthPopup(provider) {
      if (isAuth()) {
        return;
      }

      authRef
        .$authWithOAuthPopup(provider)
        .then(successCallback, errorCallback);

      function successCallback() {
        authSuccess = true;
      }

      function errorCallback(errorData) {
        authSuccess = false;
        logger.error('Could not login to ' + provider, errorData);
      }
    }

    function unAuth() {
      if (isAuth()) {
        authRef.$unauth();
        authSuccess = false;
      }
    }

    function authDataCallback(authData) {
      if (authData !== null) {
        authSuccess = true;
        rootRef
          .child('users')
          .child(authData.uid)
          .set({
            provider: authData.provider,
            displayName: getDisplayName(authData)
          });
      } else {
        authSuccess = false;
      }

      function getDisplayName(authData) {
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
  }

})();
