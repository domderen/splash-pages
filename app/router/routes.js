import _ from 'lodash';
import Router from 'react-router';
var {Route, DefaultRoute, NotFoundRoute, Redirect} = Router;

// This is internally used within jsx, so ignore the unused error.
/*eslint-disable */
import React from 'react';
/*eslint-enable */

import App from '../components/app/app';

import NotFound from '../pages/not-found/not-found';
import FaqMerchants from '../pages/faq/merchants/merchants';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Pricing from '../pages/pricing/pricing';

import {defaultLocale} from '../helpers/locale-helper/locale-helper';

export var homeRoute = 'home';

var config = [
  [Home, { name: homeRoute }, {
      'en-GB': {
          path: '/',
      },
      'fr-FR': {
          path: '/',
      },
    },
  ],
  [Pricing, { name: 'pricing' }, {
      'en-GB': {
          path: '/pricing',
      },
      'fr-FR': {
          path: '/tarifs',
      },
    },
  ],
  [About, { name: 'about' }, {
      'en-GB': {
          path: '/about',
      },
      'fr-FR': {
          path: '/a-propos',
      },
    },
  ],
  [null, null, {
      'en-GB': {
          path: '/faq',
          redirectTo: 'faq_merchants',
      },
    },
  ],
  [FaqMerchants, { name: 'faq_merchants' }, {
      'en-GB': {
          path: '/faq/merchants',
      },
    },
  ],
];

//TODO: JF/JE test this function
function pathToLocale(path, locale) {
  var localePath;
  if (locale === defaultLocale) {
    localePath = path;
  } else {
    localePath = ['/', locale.toLowerCase(), path].join('/').replace(/\/\//g, '/');
  }
  localePath = localePath.replace(/^\/|\/$/g, '');
  localePath = '/' + localePath;
  return localePath;
}

function validatePages(pages) {
  return (pages.length !== 0);
}

function validateLocale(locale, availableLocales) {
  if (!_.contains(availableLocales, locale)) {
    throw new TypeError(`Locale not allowed: ${locale} [${availableLocales.join(', ')}]`);
  }
}

function flattenPagesForLocale(pages, locale, availableLocales) {
  validatePages(pages);
  validateLocale(locale, availableLocales);
  return pages.reduce(function(pagesInner, page) {
    page = _.cloneDeep(page);
    if (locale in page[2]) {
      page[2] = page[2][locale];
      page[2].path = pathToLocale(page[2].path, locale);
      if (_.isArray(page[3])) {
        page[3] = flattenPagesForLocale(page[3], locale, availableLocales);
      }
      pagesInner.push(page);
    }
    return pagesInner;
  }, []);
}

function getRoutesForPages(pages, availableLocales) {
  return pages.map(function(page) {
    if (page[0] === null) {
      return [
        (
          <Redirect
            from={page[2].path}
            to={page[2].redirectTo}
            key={page[2].redirectTo + '_redirect'}>
            {page[3] && getRoutesForPages(page[3], availableLocales) || null}
          </Redirect>
        ),
      ];
    } else {
      return [
        (
          <Route key={page[1].name}
            name={page[1].name}
            path={page[2].path}
            handler={page[0]}>
            {page[3] && getRoutesForPages(page[3], availableLocales) || null}
          </Route>
        ),
      ];
    }
  });
}

export function getLocalesForRouteName(routeName, givenConfig=config) {
  var foundPage;

  givenConfig.some(function(page, index) {
    if (page[1] && page[1].name === routeName) {
      foundPage = givenConfig[index];
    } else if (_.isArray(page[3])) {
      foundPage = getLocalesForRouteName(routeName, page[3]);
    }
    return !!foundPage;
  });

  if (foundPage) {
    foundPage = foundPage[2];
    foundPage = _.cloneDeep(foundPage);
    Object.keys(foundPage).forEach(function(locale) {
      foundPage[locale].path = pathToLocale(foundPage[locale].path, locale);
    });
  }

  return foundPage;
}

export function getRoutes(locale, availableLocales, givenConfig=config) {
  var pages = flattenPagesForLocale(givenConfig, locale, availableLocales);
  return (
    <Route path={pages[0][2].path} handler={App}>
      {getRoutesForPages(pages.slice(1), availableLocales)}

      <DefaultRoute handler={pages[0][0]} name={pages[0][1].name} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );
}
