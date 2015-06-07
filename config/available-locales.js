import path from 'path';
import glob from 'glob';
import {validateLocale} from '../app/helpers/locale-helper/locale-helper';

// Takes all message files paths in specified directory, where names match pattern '*-*.js'.
var availableLocales = glob.sync(path.join(__dirname, '..', 'app', 'messages', '*-*.js'))
// Takes only filenames without extensions (eg. 'de-DE').
.map(function(file) {
  return path.basename(file, '.js');
})
// Validates all names to check if they consist of the pattern 'xx-xx' and returns them.
.map(validateLocale);

export default availableLocales;
