(function() {
  'use strict';

  var translateConfig = {
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
    return Object.keys(translateConfig.languages);
  }

  function getLanguagesAliases() {
    var aliases = {}, tags = getLanguages();
    _.forEach(tags, function (tag) {
      _.forEach(translateConfig.languages[tag].aliases, function (alias) {
        aliases.alias = tag;
      });
    });
    return aliases;
  }

  angular
    .module('blocks.translate')
    .value('translateConfig', translateConfig)
    .config(translateConfigure);

  translateConfigure.$inject = ['$provide', '$translateProvider'];

  /* @ngInject */
  function translateConfigure($provide, $translateProvider) {

    $provide.decorator('$translate', extendedTranslate);

    $translateProvider
      .useStaticFilesLoader(translateConfig.staticFiles)
      .registerAvailableLanguageKeys(getLanguages(), getLanguagesAliases())
      .preferredLanguage(translateConfig.preferredLanguage)
      .fallbackLanguage(translateConfig.fallbackLanguage)
      .determinePreferredLanguage()
      .useSanitizeValueStrategy(translateConfig.sanitizationStrategy);
  }

  /* @ngInject */
  function extendedTranslate($delegate) {
    var translateService = $delegate;
    return translateService;
  }
  extendedTranslate.$inject = ['$delegate'];

})();
