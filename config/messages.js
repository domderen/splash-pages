import merge from 'lodash/object/merge';
import fs from 'fs';
import path from 'path';

import availableLocales from './available-locales';

var langLocales = {};

/**
 * Returns language code from locale code (eg. en-gb => en).
 */
function langFromLocale(locale) {
  return locale.slice(0, 2);
}

// Lost of all available languages.
var availableLanguages = availableLocales.map(langFromLocale);

// Creates a map object, where each locale has it's assigned messages from the given locale file.
// Eg.
//
// {
//   en-GB: {
//     country: 'Europe',
//     ...
//   },
//   ...
// }
availableLocales.concat(availableLanguages).map(function(locale) {
  var filePath = path.join(__dirname, '..', 'app', 'messages', locale + '.js');
  var exists;
  try {
    var stat = fs.statSync(filePath);
    exists = stat.isFile();
  } catch (e) {
    exists = false;
  }
  return [locale, filePath, exists];
}).filter(function(locale) {
  return locale[2];
}).forEach(function(locale) {
  langLocales[locale[0]] = require(locale[1]);
});

// Merges messages for a given language, with specific messages for a given country,
// and returns a map of all available messages for all available locales.
export default availableLocales.reduce(function(locales, locale) {
  var lang = langFromLocale(locale);
  locales[locale] = merge({}, langLocales[lang], langLocales[locale]);
  return locales;
}, {});
