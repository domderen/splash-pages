// Defines an auto-executed function that creates all HTML5 elements that might be used on the site, for compatibility between browsers.
const createHTML5Tags = `(function() {
  var elems = 'article aside details figcaption figure footer header hgroup main nav section summary'.split(' ');
  for(var length = elems.length, index = 0;index < length; index++){document.createElement(elems[index]);}
})();`;

export default createHTML5Tags;
