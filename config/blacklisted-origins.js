import includes from 'lodash/collection/includes';

// List of blacklisted hosts.
export const blacklistedHosts = [
  'webcache.googleusercontent.com',
];

/**
 * Checks if provided host is is blacklisted.
 * @param  {String}  host Host verify if is on the list of blacklisted hosts.
 * @return {Boolean}      True if host is blacklisted. Otherwise false.
 */
export function isHostBlacklisted(host) {
  return includes(blacklistedHosts, host);
}
