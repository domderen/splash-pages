import _ from 'lodash';
import React from 'react';
import Immutable from 'immutable';
import { Route, DefaultRoute, NotFoundRoute, Redirect } from 'react-router';

import App from '../components/app/app';

import NotFound from '../pages/not-found/not-found';
import FaqMerchants from '../pages/faq/merchants/merchants';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Partners from '../pages/partners/partners';
import PartnersClearBooks from '../pages/partners/clearbooks/partners-clearbooks';
import PartnersFreeagent from '../pages/partners/freeagent/partners-freeagent';
import PartnersKashflow from '../pages/partners/kashflow/partners-kashflow';
import PartnersPitchero from '../pages/partners/pitchero/partners-pitchero';
import PartnersSage from '../pages/partners/sage/partners-sage';
import PartnersXero from '../pages/partners/xero/partners-xero';
import Pricing from '../pages/pricing/pricing';
import Pro from '../pages/pro/pro';
import ContactSales from '../pages/contact-sales/contact-sales';
import Features from '../pages/features/features';
import FeaturesApi from '../pages/features/api/features-api';
import Security from '../pages/security/security';
import Stories from '../pages/stories/stories';
import HasBeanCoffeeStory from '../pages/stories/stories/has-bean-coffee';
import BlueskyBusinessStory from '../pages/stories/stories/bluesky-business';
import CrowdCubeStory from '../pages/stories/stories/crowdcube';
import MomentumStory from '../pages/stories/stories/momentum-training';
import RockChoirStory from '../pages/stories/stories/rock-choir';
import SpencerHockeyStory from '../pages/stories/stories/spencer-hockey';
import FoundationOfHeartsStory from '../pages/stories/stories/foundation-of-hearts';
import GreaterAngliaStory from '../pages/stories/stories/greater-anglia';

import {defaultLocale} from '../helpers/locale-helper/locale-helper';

export var homeRoute = 'home';

var config = Immutable.fromJS([
  [Home, { name: homeRoute }, {
      'en-GB': {
          path: '/',
      },
      'fr-FR': {
          path: '/',
      },
      'fr-BE': {
          path: '/',
      },
    },
  ],
  [Partners, { name: 'partners' }, {
      'en-GB': {
          path: '/partners',
      },
    },
  ],
  [PartnersClearBooks, { name: 'partners_clearbooks' }, {
      'en-GB': {
          path: '/partners/clearbooks',
      },
    },
  ],
  [PartnersFreeagent, { name: 'partners_freeagent' }, {
      'en-GB': {
          path: '/partners/freeagent',
      },
    },
  ],
  [PartnersKashflow, { name: 'partners_kashflow' }, {
      'en-GB': {
          path: '/partners/kashflow',
      },
    },
  ],
  [PartnersPitchero, { name: 'partners_pitchero' }, {
      'en-GB': {
          path: '/partners/pitchero',
      },
    },
  ],
  [PartnersSage, { name: 'partners_sage' }, {
      'en-GB': {
          path: '/partners/sage',
      },
    },
  ],
  [PartnersXero, { name: 'partners_xero' }, {
      'en-GB': {
          path: '/partners/xero',
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
      'fr-BE': {
          path: '/tarifs',
      },
    },
  ],
  [Pro, { name: 'pro' }, {
      'en-GB': {
          path: '/pro',
      },
      'fr-FR': {
          path: '/pro',
      },
      'fr-BE': {
          path: '/pro',
      },
    },
  ],
  [ContactSales, { name: 'contact_sales' }, {
      'en-GB': {
          path: '/contact-sales',
      },
      'fr-FR': {
          path: '/contactez-nous',
      },
      'fr-BE': {
          path: '/contactez-nous',
      },
    },
  ],
  [Features, { name: 'features' }, {
      'en-GB': {
          path: '/features',
      },
    },
  ],
  [FeaturesApi, { name: 'features_api' }, {
      'en-GB': {
          path: '/features/api',
      },
    },
  ],
  [Security, { name: 'security' }, {
      'en-GB': {
          path: '/security',
      },
      'fr-FR': {
          path: '/securite',
      },
      'fr-BE': {
          path: '/securite',
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
      'fr-BE': {
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
  [Stories, { name: 'stories' }, {
      'en-GB': {
        path: '/stories',
      },
    },
  ],
  [HasBeanCoffeeStory, { name: 'has_bean_coffee_story', category: 'stories' }, {
      'en-GB': {
        path: '/stories/has-bean-coffee',
      },
    },
  ],
  [BlueskyBusinessStory, { name: 'bluesky_business_story', category: 'stories' }, {
      'en-GB': {
        path: '/stories/bluesky-business',
      },
    },
  ],
  [CrowdCubeStory, { name: 'crowdcube_story', category: 'stories' }, {
      'en-GB': {
        path: '/stories/crowdcube',
      },
    },
  ],
  [MomentumStory, { name: 'momentum_story', category: 'stories' }, {
      'en-GB': {
        path: '/stories/momentum',
      },
    },
  ],
  [RockChoirStory, { name: 'rock_choir_story', category: 'stories' }, {
      'en-GB': {
        path: '/stories/rock-choir',
      },
    },
  ],
  [SpencerHockeyStory, { name: 'spencer_hockey_story', category: 'stories' }, {
      'en-GB': {
        path: '/stories/spencer-hockey',
      },
    },
  ],
  [FoundationOfHeartsStory, { name: 'foundation_of_hearts_story', category: 'stories' }, {
      'en-GB': {
        path: '/stories/foundation-of-hearts',
      },
    },
  ],
  [GreaterAngliaStory, { name: 'greater_anglia_story', category: 'stories' }, {
      'en-GB': {
        path: '/stories/greater-anglia',
      },
    },
  ],
]);

function pathWithLocale(path, locale) {
  if (!path || path.indexOf('/') !== 0) {
    throw new TypeError('Path not valid, must begin with `/`');
  }

  var localePath;
  if (locale === defaultLocale) {
    localePath = path;
  } else {
    localePath = ['/', locale.toLowerCase(), path].join('/').replace(/\/\//g, '/');
  }
  localePath = localePath.replace(/^\/|\/$/g, '');
  return '/' + localePath;
}

function validatePages(pages) {
  if (pages.size < 1) {
    throw new TypeError('pages must not be empty');
  }
}

function validateLocale(locale, availableLocales) {
  if (!_.includes(availableLocales, locale)) {
    throw new TypeError(`Locale not allowed: ${locale} [${availableLocales.join(', ')}]`);
  }
}

function flattenPagesForLocale(pages, locale, availableLocales) {
  validatePages(pages);
  validateLocale(locale, availableLocales);

  function setLocaleConfigPath(page) {
    const path = page.getIn(['localeConfig', locale, 'path']);
    const matchOptionalSlash = '/?';

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

function getRoutesForPages(pages, availableLocales) {
  return pages.map(function(page) {
    const handler = page.get('handler');
    const routeConfig = page.get('routeConfig');
    const localeConfig = page.get('localeConfig');
    const childConfig = page.get('childConfig');

    if (handler === null) {
      return (
        <Redirect
          from={localeConfig.get('path')}
          to={localeConfig.get('redirectTo')}
          key={localeConfig.get('redirectTo') + '_redirect'}>
          {childConfig && getRoutesForPages(childConfig, availableLocales) || null}
        </Redirect>
      );
    } else {
      return (
        <Route key={routeConfig.get('name')}
          name={routeConfig.get('name')}
          path={localeConfig.get('path')}
          handler={handler}>
          {childConfig && getRoutesForPages(childConfig, availableLocales) || null}
        </Route>
      );
    }
  });
}

function findRouteByName(routeName, transformedConfig) {
  function fanOutConfig(page) {
    const childConfig = page.get('childConfig');

    if (Immutable.List.isList(childConfig)) {
      return childConfig.flatMap(fanOutConfig).push(page);
    } else {
      return Immutable.List([page]);
    }
  }

  return transformedConfig.flatMap(fanOutConfig)
                          .find((page) => page.getIn(['routeConfig', 'name']) === routeName);
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
function transformConfigItems(arg) {
  const [handler, routeConfig, localeConfig, childConfig] = arg.toArray();

  if (Immutable.List.isList(childConfig) && Immutable.List.isList(childConfig.first())) {
    return transformConfigItems(Immutable.List([ handler, routeConfig, localeConfig, childConfig.map(transformConfigItems) ]));
  } else {
    return Immutable.Map({ handler, routeConfig, localeConfig, childConfig });
  }
}

function turnConfigImmutable(mutableConfig) {
  return mutableConfig.map(transformConfigItems);
}

export function getLocalesForRouteName(routeName, givenConfig=config) {
  const page = findRouteByName(routeName, turnConfigImmutable(givenConfig));

  if (!page) { return undefined; }

  const localesForRoute = page.get('localeConfig').reduce(function(memo, routeConfig, localeKey) {
    return memo.setIn([localeKey, 'path'], pathWithLocale(routeConfig.get('path'), localeKey));
  }, Immutable.Map());

  return localesForRoute.toJS();
}

export function getRoutes(locale, availableLocales, givenConfig=config) {
  const flattenedRoutes = flattenPagesForLocale(turnConfigImmutable(givenConfig), locale, availableLocales);

  const homePage = flattenedRoutes.first();

  return (
    <Route path={homePage.getIn(['localeConfig', 'path'])} handler={App}>
      {getRoutesForPages(flattenedRoutes.rest(), availableLocales)}

      <DefaultRoute handler={homePage.get('handler')} name={homePage.getIn(['routeConfig', 'name'])} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );
}
