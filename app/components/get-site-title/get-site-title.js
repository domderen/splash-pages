import {getMessage} from '../intl/intl';

/**
 * Generates HTML page title based on the current route.
 * @param  {Object} options.messages  Object containing all messages, where page title for a give route will be looked up.
 * @param  {String} options.routeName Name of the current route for which title will be looked up.
 * @param  {Object} options.config    Global config object, containing main site name.
 * @return {String}                   Returns current page title in format "routeTitle - Whole site name".
 */
export default function getSiteTitle({ messages, routeName, config }) {
  return getMessage(messages, `${routeName}.title`) + ` - ${config.siteName}`;
}
