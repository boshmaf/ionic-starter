(function() {
  'use strict';

  var config = {
    staticFiles: {
      prefix: 'js/blocks/translate/locales/',
      suffix: '.json'
    },
    languages: {
      en: {
        name: 'English',
        aliases: ['en', 'en_GB', 'en_US', 'en_CA']
      },
      de: {
        name: 'Deutsch',
        aliases: ['de', 'de_DE', 'de_CH', 'de_AT']
      }
    },
    preferredLanguage: 'en',
    fallbackLanguage: 'en',
    sanitizationStrategy: 'escapeParameters'
  };

  function getLanguages() {
    return Object.keys(config.languages);
  }

  function getLanguagesAliases() {
    var aliases = {}, tags = getLanguages();
    _.forEach(tags, function (tag) {
      _.forEach(config.languages[tag].aliases, function (alias) {
        aliases.alias = tag;
      });
    });
    return aliases;
  }

  angular
    .module('blocks.translate')
    .config(translateConfig);

  translateConfig.$inject = ['$provide', '$translateProvider'];

  /* @ngInject */
  function translateConfig($provide, $translateProvider) {

    $provide.decorator('$translate', extendedTranslate);

    $translateProvider
      .useStaticFilesLoader(config.staticFiles)
      .registerAvailableLanguageKeys(getLanguages(), getLanguagesAliases())
      .preferredLanguage(config.preferredLanguage)
      .fallbackLanguage(config.fallbackLanguage)
      .determinePreferredLanguage()
      .useSanitizeValueStrategy(config.sanitizationStrategy);
  }

  /* @ngInject */
  function extendedTranslate($delegate, logger) {
    $delegate.customTranslateFunction = function () {
      logger.log('Inside $translate.customTranslateFunction()');
    };
    return $delegate;
  }
  extendedTranslate.$inject = ['$delegate', 'logger'];

})();
