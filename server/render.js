import path from 'path';
import fs from 'fs';
import url from 'url';

import assign from 'lodash/object/assign';
import cloneDeep from 'lodash/lang/cloneDeep';
import result from 'lodash/object/result';
import findLast from 'lodash/collection/findLast';
import React from 'react';
import Router from 'react-router';
import { pathToLocale } from '../app/helpers/locale-helper/locale-helper';
import HtmlDocument from '../app/components/html-document/html-document';
import { getRoutes, getLocalesForRouteName } from '../app/router/route-helpers';
import localeMessages from '../config/messages';
import availableLocales from '../config/available-locales';
import config from '../config';
import { getMessage } from '../app/components/intl/intl';

function getWebpackPaths() {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'app', 'bundles', 'webpack-stats.json')));
}

function normalizeUrl(urlStr) {
  var parsedUrl = url.parse((urlStr || '').toLowerCase());
  parsedUrl.pathname = parsedUrl.pathname.replace(/^\/|\/$/g, '');
  parsedUrl.pathname = parsedUrl.pathname ? `/${parsedUrl.pathname}/` : '/';
  return url.format(parsedUrl);
}

export function render(requestUrl) {
  return new Promise(function(resolve, reject) {
    const reqUrl = normalizeUrl(requestUrl);
    const reqPath = url.parse(reqUrl).path;
    const reqLocale = pathToLocale(reqPath, availableLocales);
    const routes = getRoutes(reqLocale.normalized, availableLocales);
    const messages = cloneDeep(localeMessages[reqLocale.normalized]);

    const availableCountryNames = availableLocales.reduce(function(memo, locale) {
      memo[locale] = getMessage(localeMessages[locale], 'country');
      return memo;
    }, {});

    function appProps(props) {
      return assign({
        currentLocale: reqLocale.normalized,
        language: reqLocale.language,
        messages: messages,
        config: config,
        availableLocales: availableLocales,
        availableCountryNames: availableCountryNames,
      }, props);
    }

    const router = Router.create({
      onAbort: function(abortReason) {
        reject(abortReason);
      },
      onError: function(err) {
        reject(err);
      },
      routes: routes,
      location: reqUrl,
    });

    router.run(function(Handler, state) {
      const routeName = result(findLast(state.routes.slice(), 'name'), 'name');
      const routeLocales = Object.keys(getLocalesForRouteName(routeName, availableLocales) || {});
      const stateProps = {
        routeName: routeName || 'not_found',
        pathname: state.pathname,
        routeLocales: routeLocales,
      };

      const markup = React.renderToString(<Handler {...appProps(stateProps)} />);
      const webpackUrls = getWebpackPaths();

      // The application component is rendered to static markup
      // and sent as response.
      const html = React.renderToStaticMarkup(
        <HtmlDocument
          markup={markup}
          script={webpackUrls.script}
          css={webpackUrls.css}
          router={router}
          dataRender={appProps(stateProps)}
          {...appProps(stateProps)} />
      );
      const doctype = '<!DOCTYPE html>';
      resolve([requestUrl, doctype + html]);
    });
  });
}

/**
 * Middle ware used to serve HTML content rendered based on the react-router path.
 * Content is rendered in form of the index.html page created as a react component.
 * @param  {Object}   req  Express request object.
 * @param  {Object}   res  Express response object.
 * @param  {Function} next Callback passing control to the next handler.
 */
export function renderFromRequest(req, res, next) {
  // Checking if request is for HTML content.
  const isHtml = req.headers.accept && req.accepts('html');

  // Skip not found assets
  // If not request for HTML content, pass control to the next handler.
  if (!isHtml) { return next(); }

  render(req.url)
  .then(([, htmlOutput]) => {
    res.send(htmlOutput);
  })
  .catch(errorReason => {
    next(errorReason);
  });
}
