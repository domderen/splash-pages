/**
 * This is application entry file, for client side application.
 */
import result from 'lodash/object/result';
import find from 'lodash/collection/find';
import includes from 'lodash/collection/includes';
import findLast from 'lodash/collection/findLast';
import assign from 'lodash/object/assign';
import React from 'react';
import Router from 'react-router';
import { getRoutes, getLocalesForRouteName } from '../router/route-helpers';
import { pushDataLayer } from '../helpers/gtm-tracker/gtm-tracker';
import { isHostBlacklisted } from '../../config/blacklisted-origins';

// This is used with webpack, but not with pages requested trough the express server.
if (process.env.BROWSER) {
  require('../css/main.scss');
  require('../css/fonts.css');
}

/**
 * Renders the application, and bootstraps around the HTML content that was generated on the server side.
 */
function renderApp() {
  // Take the application state from the global variable defined on the server side.
  const appState = window.app;
  // Gets the react-router config element for current locale.
  const routes = getRoutes(appState.currentLocale, appState.availableLocales);
  // Creates new instance of the router to live on the client side.
  const router = Router.create({
    routes: routes,
    location: Router.HistoryLocation,
  });

  // TODO: Remove this after some time, fix all incoming links
  // WHAT: What is this used for?
  const redirects = {
    '/about#jobs': '/about/jobs',
    '/about#team': '/about/team',
  };

  // Takes whole URL from the browser.
  const href = document.location.href;
  // Find possible required redirects, and change page URL to navigate to the new page.
  const matchedRedirect = find(Object.keys(redirects), includes.bind(null, href));
  if (matchedRedirect) {
    document.location.replace(redirects[matchedRedirect]);
  }

  // Initializes react router, and runs it for a particular handler.
  router.run(function(Handler, state) {
    // Find the root element where react should mount itself.
    const mountNode = document.getElementById('root');
    // Get the name of the current route handler.
    const routeName = result(findLast(state.routes.slice(), 'name'), 'name');
    // Find all available locales for the current route name.
    const routeLocales = Object.keys(getLocalesForRouteName(routeName, appState.availableLocales) || {});
    // Build application state object.
    const stateProps = assign({}, appState, {
      routeName: routeName || 'not_found',
      pathname: state.pathname,
      routeLocales: routeLocales,
    });

    // Bootstraps react to the mount node, and performs an update on it and only mutate the DOM
    // as necessary to reflect the latest React component.
    React.render(<Handler {...stateProps} />, mountNode, () => {
      console.log('App has been mounted. Logging pageview.');
      // Adds new event to google tags manager.
      pushDataLayer({
        event: 'pageview',
        title: document.title,
        virtualUrl: state.pathname,
      });
    });
  });
}

// Prevent sites running JS that don't have the right location for routing
// e.g. http://webcache.googleusercontent.com/search?q=cache:pBJh1a9mKTMJ:https://gocardless.com/
if (!isHostBlacklisted(document.location.hostname)) {
  renderApp();
}
