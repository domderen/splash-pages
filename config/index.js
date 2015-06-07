import path from 'path';
import includes from 'lodash/collection/includes';
import merge from 'lodash/object/merge';

import shared from '../config/shared';

// Defines the environment we are operating in.
var env = process.env.NODE_ENV || 'development';
// Defines list of allowed environments for the application.
var allowedEnvs = ['production', 'development', 'test'];

// Checks if application was started in one of the allowed environments.
if (!includes(allowedEnvs, env)) {
  throw new TypeError(`env not allowed ${env}: [${allowedEnvs}]`);
}

// Takes the config object for a given environment.
var config = require(path.join(__dirname, env));
// Merges it with the shared config object.
config = merge({}, shared, config);

// Returns merged config.
export default config;
