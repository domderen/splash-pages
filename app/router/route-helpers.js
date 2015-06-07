import includes from 'lodash/collection/includes';
import React from 'react';
import Immutable from 'immutable';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import { defaultLocale, localeToLanguage, validateLocaleOrLanguage } from '../helpers/locale-helper/locale-helper';
import NotFound from '../pages/not-found/not-found';
import App from '../components/app/app';
import { config } from './routes';

function pathWithLocale(path, locale) {
  if (!path || path.indexOf('/') !== 0) {
    throw new TypeError('Path not valid, must begin with `/`');
  }

  var localePath;
  if (locale === defaultLocale) {
    localePath = path;
  } else {
    localePath = ['/', locale.toLowerCase(), path].join('/').replace(/\/+/g, '/');
  }
  localePath = localePath.replace(/^\/|\/$/g, '');
  return localePath ? `/${localePath}/` : '/';
}

/**
 * Check if pages object is not smaller than 1.
 * @param  {Object} pages Pages object which size property will be checked.
 * @return {Undefined}    Throws error if pages size is smaller than 1.
 */
function validatePages(pages) {
  if (pages.size < 1) {
    throw new TypeError('pages must not be empty');
  }
}

/**
 * Throws error if provided locale is not available in the list of all locales.
 */
function validateLocale(locale, availableLocales) {
  if (!includes(availableLocales, locale)) {
    throw new TypeError(`Locale not allowed: ${locale} [${availableLocales.join(', ')}]`);
  }
}

export function flattenPagesForLocale(pages, locale, availableLocales) {
  // Check if pages object is not smaller than 1.
  validatePages(pages);
  // Throws error if provided locale is not available in the list of all locales.
  validateLocale(locale, availableLocales);

  function setLocaleConfigPath(page) {
    const path = page.getIn(['localeConfig', locale, 'path']);
    const matchOptionalSlash = '?';
    return page.setIn(['localeConfig', 'path'], pathWithLocale(path, locale) + matchOptionalSlash);
  }

  function flattenChildConfig(page) {
    if (Immutable.List.isList(page.get('childConfig'))) {
      return page.set('childConfig', flattenPagesForLocale(page.get('childConfig'), locale, availableLocales));
    } else {
      return page;
    }
  }

  return pages.filter((page) => page.get('localeConfig').has(locale))
              .map(setLocaleConfigPath)
              .map(flattenChildConfig);
}

export function getRoutesForPages(pages, availableLocales) {
  return pages.map(function(page) {
    const handler = page.get('handler');
    const routeConfig = page.get('routeConfig');
    const localeConfig = page.get('localeConfig');
    const childConfig = page.get('childConfig');

    return (
      <Route key={routeConfig.get('name')}
        name={routeConfig.get('name')}
        path={localeConfig.get('path')}
        handler={handler}>
        {childConfig && getRoutesForPages(childConfig, availableLocales) || null}
      </Route>
    );
  });
}

/**
 * Expand localeConfig with languages to available locales
 * @param {Map} localeConfig e.g. { 'en': { path: 'test' } }
 * @returns {Map} e.g.:
 * {
 *   'en-IE': {},
 *   'en-GB': {},
 * }
 */
function expandLocaleConfig(localeConfig, availableLocales) {
  var langToLocales = Immutable.List(availableLocales).reduce(function(memo, locale) {
    return memo.update(localeToLanguage(locale), function(locales) {
      return locales ? locales.push(locale) : Immutable.List([locale]);
    });
  }, Immutable.Map());

  function invalidLocale(locale) {
    throw new Error(`locale not allowed (${locale}), allowed: ${availableLocales}`);
  }

  const keys = localeConfig.keySeq();
  keys.filterNot(validateLocaleOrLanguage).concat(
    keys.filterNot((locale) => langToLocales.has(locale))
        .filterNot((locale) => includes(availableLocales, locale))
  ).forEach(invalidLocale);

  return localeConfig.reduce(function(memo, localeSpecificConfig, locale) {
    if (langToLocales.has(locale)) {
      return langToLocales.get(locale).reduce(function(mmemo, langLocale) {
        return mmemo.set(langLocale, localeSpecificConfig);
      }, memo);
    } else {
      return memo.set(locale, localeSpecificConfig);
    }
  }, Immutable.Map());
}

/**
 * Returns an easier to work with version of a 'route config' entry, applying the same
 * transformation to any `childConfig`s
 * @param {Array} configItem e.g. [ReactComponent, Object, Object, [[ReactComponent, Object, Object], ...]]
 * @returns {Object} e.g.:
 *   {
 *     handler: ReactComponent,
 *     routeConfig: Object,
 *     localeConfig: Object,
 *     childConfig: [{
 *       handler: ReactComponent,
 *       routeConfig: Object,
 *       localeConfig: Object,
 *       childConfig: ...
 *     }, ...]
 *   }
 */
export function transformConfigItems(page, availableLocales) {
  const [handler, routeConfig, localeConfig, childConfig] = page.toArray();

  if (Immutable.List.isList(childConfig) && Immutable.List.isList(childConfig.first())) {
    return transformConfigItems(Immutable.List([ handler, routeConfig, localeConfig,
      childConfig.map((child) => transformConfigItems(child, availableLocales)),
    ]), availableLocales);
  } else {
    const expandedLocaleConfig = expandLocaleConfig(localeConfig, availableLocales);
    return Immutable.Map({
      handler: handler,
      routeConfig: routeConfig,
      localeConfig: expandedLocaleConfig,
      childConfig: childConfig,
    });
  }
}

export function expandConfig(givenConfig, availableLocales) {
  function expandChildConfig(page) {
    const childConfig = page.get('childConfig');

    if (Immutable.List.isList(childConfig)) {
      return childConfig.flatMap(expandChildConfig).push(page);
    } else {
      return Immutable.List([page]);
    }
  }

  function setLocalePaths(page) {
    return page.update('localeConfig', function(localeConfig) {
      return localeConfig.reduce(function(memo, localeSpecificConfig, locale) {
        const path = pathWithLocale(localeSpecificConfig.get('path'), locale);
        return memo.setIn([locale, 'path'], path);
      }, Immutable.Map());
    });
  }

  return givenConfig.map((page) => transformConfigItems(page, availableLocales))
                    .flatMap(expandChildConfig)
                    .map(setLocalePaths);
}

/**
 * Gets the localeConfig from routes configuration array, for a given route name.
 */
export function getLocalesForRouteName(routeName, availableLocales, givenConfig=config) {
  const expanded = expandConfig(givenConfig, availableLocales);
  const foundPage = expanded.find((page) => page.getIn(['routeConfig', 'name']) === routeName);

  if (foundPage) {
    return foundPage.get('localeConfig').toJS();
  }
}

export function filterRouteByCategory(routeCategory, locale, availableLocales, givenConfig=config) {
  const expanded = expandConfig(givenConfig, availableLocales);
  const foundPages = expanded.filter((page) => {
    const category = page.getIn(['routeConfig', 'category']);
    if (!category) { return false; }
    const categoryParts = category.split('.');
    return routeCategory.split('.').every(function(part, i) {
      return part === categoryParts[i];
    });
  });

  return foundPages
    .filter((page) => page.get('localeConfig').has(locale))
    .map((page) => {
      return page.setIn(['localeConfig', 'path'], page.getIn(['localeConfig', locale, 'path']));
    })
    .toJS();
}

/**
 * Generates React-Router configuration component, for all routes matching given language.
 * @param  {String} locale           Language-country locale code.
 * @param  {Array} availableLocales  List of all available languages.
 * @param  {Array} givenConfig       Configuration object with all paths available.
 * @return {Component}               Returns react-router configuration component.
 */
export function getRoutes(locale, availableLocales, givenConfig=config) {
  // Transform whole config object, to object with all language codes, easier for manipulation.
  const expandedPages = givenConfig.map((page) => transformConfigItems(page, availableLocales));
  // Returns only paths for a given locale.
  const flattenedRoutes = flattenPagesForLocale(expandedPages, locale, availableLocales);
  // Assumes that the first route is a home page.
  const homePage = flattenedRoutes.first();

  return (
    <Route path={homePage.getIn(['localeConfig', 'path'])} handler={App}>
      {getRoutesForPages(flattenedRoutes.rest(), availableLocales)}

      <DefaultRoute handler={homePage.get('handler')} name={homePage.getIn(['routeConfig', 'name'])} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );
}

export function getAllPaths(availableLocales, givenConfig=config) {
  const expanded = expandConfig(givenConfig, availableLocales);

  return expanded.flatMap((page) => page.get('localeConfig').valueSeq())
                 .map((localeConfig) => localeConfig.get('path'));
}
