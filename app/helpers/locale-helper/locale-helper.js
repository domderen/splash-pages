import locale from 'locale';
import cloneDeep from 'lodash/lang/cloneDeep';
import includes from 'lodash/collection/includes';
import flatten from 'lodash/array/flatten';
import uniq from 'lodash/array/uniq';

// Defines global default locale.
export const defaultLocale = 'en-GB';

/**
 * Creates a copy of a language object, and modifies the language definition,
 * by replacing "_" with "-" in the language code. Leaves empty string if no language definition was found.
 * @param  {Object} localeData Language definition object from 'locale' module.
 * @return {Object}            Copy of the input object with normalized property replaced.
 */
function normalizeLocale(localeData) {
  const normalizedLocale = cloneDeep(localeData);
  normalizedLocale.normalized = (normalizedLocale.normalized || '').replace('_', '-');
  return normalizedLocale;
}

/**
 * Tries to identify language code inside the path, and returns language object from the 'locale'
 * module for a given language. If no language if identified in the path, returns language definition object for the default language.
 * @param  {String} path              URL path of the request that was made. This path might contain language definition.
 * @param  {Array} availableLocales   List of available country codes.
 * @return {Object}                   Either default or specific language definition object from 'locale' module.
 */
export function pathToLocale(path, availableLocales) {
  // Tries to find a language definition in the path (eg. /en-en/).
  const pathLocale = (path || '').toLowerCase().match(/^\/([a-z]{2,2}\-[a-z]{2,2})/);
  // If path contained language definition, pass it to get language definition object from 'locale'.
  const foundLocale = new locale.Locale(pathLocale && pathLocale[1]);
  // Normalizes the language code, to meet the requirements of used language codes.
  const normalizedLocale = normalizeLocale(foundLocale);
  // If language code found on path is not available in the list of available languages,
  // return default locale settings. Otherwise return settings for language from the path.
  if (!includes(availableLocales, normalizedLocale.normalized)) {
    return normalizeLocale(new locale.Locale(defaultLocale));
  }
  return normalizedLocale;
}

/**
 * Checks if provided string consists of 2 lowercase letters, hyphen and two uppercase letters.
 * @param  {[type]} localeStr String to test.
 * @return {[type]}           If validation is successful, function returns test value, otherwise throws a type error.
 */
export function validateLocale(localeStr) {
  if (!localeStr.match(/[a-z]{2,2}\-[A-Z]{2,2}/)) {
    throw new TypeError(`Locale not valid ${localeStr}`);
  }
  return localeStr;
}

/**
 * Checks if provided string is either a language code (eg. 'en') or a locale code (eg. 'en-GB').
 * @param  {String} localeStr String to check.
 * @return {Boolean}          True if provided string is either language code or locale code. Otherwise false.
 */
export function validateLocaleOrLanguage(localeStr) {
  return !!(localeStr.match(/^[a-z]{2}$/) || validateLocale(localeStr));
}

/**
 * Takes the locale code and returns the language code (eg. en-GB => en).
 * @param  {String} localeStr Locale string.
 * @return {String}           Language code string.
 */
export function localeToLanguage(localeStr) {
  return localeStr.slice(0, 2).toLowerCase();
}

/**
 * Takes the locale code and returns the country code (eg. en-GB => GB).
 * @param  {String} localeStr Locale string.
 * @return {String}           Country code string.
 */
export function localeToRegion(localeStr) {
  return localeStr.slice(3, 5).toUpperCase();
}

/**
 * Expands the list of language locales to all region locales for a given language.
 */
export function expandLangLocales(currentLocales, availableLocales) {
  return flatten(uniq(currentLocales.reduce(function(memo, currentLocale) {
    if (localeToRegion(currentLocale)) {
      memo.push(currentLocale);
    } else {
      const locales = availableLocales.filter(function(availableLocale) {
        return localeToLanguage(availableLocale) === currentLocale;
      });
      memo.push(locales);
    }
    return memo;
  }, [])));
}
