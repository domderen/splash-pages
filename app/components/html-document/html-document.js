import React from 'react';

import browseHappy from '../layout-static/browse-happy';
import createHTML5Tags from '../layout-static/create-html5-tags';
import GTM from '../layout-static/google-tag-manager';
import websiteSchema from '../layout-static/website-schema';

import getSiteTitle from '../get-site-title/get-site-title';
import { getMessage } from '../intl/intl';
import localeMessages from '../../../config/messages';
import { defaultLocale, localeToLanguage } from '../../helpers/locale-helper/locale-helper';
import { homeRoute } from '../../router/routes';
import { getLocalesForRouteName } from '../../router/route-helpers';
import { buildSchemaDotOrgForOrganization } from '../../helpers/schema-dot-org/schema-dot-org';
import { PropTypes } from '../../helpers/prop-types/prop-types';

/**
 * Generates the list of links defining the availability of the content in different languages.
 * Additionally specifies the default content locale link.
 * @param  {String} root            Page site root URL.
 * @param  {Array} locales          List of locales available for a particular site.
 * @return {Array<LinkHtmlElement>} List of html link elements.
 */
function relAlternateLinks(root, locales) {
  var defaultPath = locales[defaultLocale];

  var alternates = Object.keys(locales).map(function(locale) {
    var localePath = locales[locale].path;
    return <link rel='alternate' hrefLang={locale} href={ root + localePath } key={locale} />;
  });

  if (defaultPath && defaultPath.path) {
    alternates.unshift(
      <link rel='alternate' href={root + defaultPath.path} hrefLang='x-default' key='x-default' />
    );
  }

  return alternates;
}

class HtmlDocument extends React.Component {
  // Property stating a display name of the element.
  // WHAT: Don't really know what this is used for...
  displayName = 'HtmlDocument'

  // Components properties with types and requirement.
  static propTypes = {
    currentLocale: PropTypes.locale,
    messages: PropTypes.object.isRequired,
    formats: PropTypes.object.isRequired,
    routeName: PropTypes.string.isRequired,
    availableLocales: PropTypes.array.isRequired,
    availableCountryNames: PropTypes.object.isRequired,
    routeLocales: PropTypes.array.isRequired,
    router: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    dataRender: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    markup: PropTypes.string.isRequired,
    script: PropTypes.arrayOf(PropTypes.string),
    css: PropTypes.arrayOf(PropTypes.string),
  }

  // Default properties.
  static defaultProps = {
    script: [],
    css: [],
  }

  // Properties that are passed to all child components.
  static childContextTypes = {
    currentLocale: PropTypes.locale,
    messages: PropTypes.object.isRequired,
    formats: PropTypes.object.isRequired,
    routeName: PropTypes.string.isRequired,
    availableLocales: PropTypes.array.isRequired,
    routeLocales: PropTypes.array.isRequired,
    availableCountryNames: PropTypes.object.isRequired,
    router: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    config: PropTypes.object.isRequired,
  };

  // Values of properties that will be passed to all child components.
  getChildContext() {
    const { currentLocale, messages, formats, routeName, availableLocales,
            availableCountryNames, routeLocales, router, pathname, config } = this.props;

    return {
      currentLocale: currentLocale,
      messages: messages,
      formats: formats,
      routeName: routeName,
      availableLocales: availableLocales,
      availableCountryNames: availableCountryNames,
      routeLocales: routeLocales,
      router: router,
      pathname: pathname,
      config: config,
    };
  }

  render() {
    const { messages, routeName, currentLocale, config, pathname, availableLocales, markup, script, css } = this.props;
    // Checks if we are rendering a top level element, or one of the sub-pages.
    const isHome = routeName === homeRoute;
    // Builds organization details object according to schema.org specification.
    const schemaDotOrgOrganisation = buildSchemaDotOrgForOrganization(localeMessages, availableLocales, config);
    // Obtains the list of locales that are available for a given path.
    const routeLocales = getLocalesForRouteName(routeName, availableLocales);
    // Current page full url used later for canonical link.
    const pageHref = config.siteRoot + pathname;
    // Gets current page title tag content in format "RouteTitle - PageTitle".
    const title = getSiteTitle({ messages, routeName, config });
    // Sets the language of a current HTML document, based on the locale defined from the request.
    const language = localeToLanguage(currentLocale);
    // Generates page's meta description.
    const description = getMessage(messages, `${routeName}.description`);

    return (
      /* Defines page language based on requests locale selection. */
      <html className='no-js' lang={language}>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width' />

          { /* Page title. */ }
          <title>{ title }</title>
          { /* Page description for better meta description. */ }
          { description && <meta name='description' content={ description } />}
          { /* Connection between this website, and Google+ social account, for better integration inside google browser
           (details: http://www.vervesearch.com/blog/how-to-implement-the-relpublisher-google-authorship-mark-up/). */ }
          <link href={ config.socialLinks.google } rel='publisher' />
          { /* Facebook open graph image logo URL. */ }
          <meta name='og:image' content={ config.logoUrlSquare } />
          { /* Facebook open graph image logo URL for HTTPS requests. */ }
          <meta name='og:image:secure_url' content={ config.logoUrlSquare } />
          { /* Google site verification token. */ }
          <meta name='google-site-verification' content={ config.googleSiteVerification } />
          { /* SEO optimization to display a canonical link to a given page. */ }
          <link rel='canonical' href={ pageHref } />

          { /* Listing default language link and all available language links. */ }
          { routeLocales &&
              relAlternateLinks(config.siteRoot, routeLocales) }

          { /* Listing all css files from webpack. */ }
          { css.map((href, k) => <link key={k} rel='stylesheet' href={href} />) }

          { /* Polyfill for HTML5 elements, to be available in the browser. */ }
          <script dangerouslySetInnerHTML={{ __html: createHTML5Tags }} />
        </head>

        <body>
          { /* Adds element that downloads JS file from optimizely. (production only) */ }
          { /* WHAT: i am not sure what optimizely is for... */ }
          { config.optimizelyId &&
            <script src={`//cdn.optimizely.com/js/${config.optimizelyId}.js`}></script>
          }

          { /* Adds element to display on IE 8 and below. */ }
          <div dangerouslySetInnerHTML={{ __html: browseHappy }} />

          { /* Adds markup for a given route element. */ }
          <div id='root' dangerouslySetInnerHTML={{ __html: markup }} />

          { /* Sets application state into a global variable. */ }
          <script dangerouslySetInnerHTML={{ __html: 'window.app=' + JSON.stringify(this.props.dataRender) + ';' }} />

          { /* Adds all scripts from webpack. */ }
          { script.map((src, k) => <script key={k} src={src} />) }

          { /* If we are rendering home page, add schema.org definition of the website. */ }
          { isHome &&
              <script type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: websiteSchema.replace('{PAGE}', pathname) }} />
          }

          { /* If we are rendering home page, add schema.org definition of the organization. */ }
          { isHome &&
              <script type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDotOrgOrganisation) }} />
          }

          { /* Adds google tag manager link connected to particular account. */ }
          { /* WHAT: Not sure why this is placed inside a div, instead straight inside script element. */ }
          { config.googleTagManagerId &&
              <div dangerouslySetInnerHTML={{__html: GTM.replace('{TAG_ID}', config.googleTagManagerId) }} />
          }

        </body>
      </html>
    );
  }
}

export default HtmlDocument;
