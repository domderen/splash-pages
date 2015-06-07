// use babel register hook to understand syntax supported by babel.
require('babel/register');

var path = require('path');
var webpack = require('webpack');
var writeStats = require('./utils/write-stats');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var strip = require('strip-loader');
var autoprefixer = require('autoprefixer-core');

var assetsPath = path.join(__dirname, '../public/bundle');

module.exports = {
  // Choose a developer tool to enhance debugging. http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'source-map',
  // The entry point for the bundle. http://webpack.github.io/docs/configuration.html#entry
  entry: {
    // Defines client application entry script.
    main: './app/client/bootstrap.js',
  },
  // Options affecting the output. http://webpack.github.io/docs/configuration.html#output
  output: {
    // The output directory as absolute path (required). http://webpack.github.io/docs/configuration.html#output-path
    path: assetsPath,
    // The filename of the entry chunk as relative path inside the output.path directory.
    // http://webpack.github.io/docs/configuration.html#output-filename
    filename: '[name]-[chunkhash].js',
    // The filename of non-entry chunks as relative path inside the output.path directory.
    // http://webpack.github.io/docs/configuration.html#output-chunkfilename
    chunkFilename: '[name]-[chunkhash].js',
    // The output.path from the view of the Javascript / HTML page.
    // http://webpack.github.io/docs/configuration.html#output-publicpath
    publicPath: '/bundle/',
  },
  // Options affecting the normal modules (NormalModuleFactory). http://webpack.github.io/docs/configuration.html#module
  module: {
    // A array of automatically applied loaders. http://webpack.github.io/docs/configuration.html#module-loaders
    loaders: [
      // Static file loader used for images: https://github.com/webpack/file-loader
      { test: /\.(jpe?g|png|gif|svg)$/, loader: 'file' },
      // JS files transformed by babel loader: https://github.com/babel/babel-loader
      // JS files are also transformed with strip-loader: https://github.com/yahoo/strip-loader
      // This removes all invocations of the "debug" function.
      { test: /\.js$/, exclude: /node_modules/, loaders: [strip.loader('debug'), 'babel'] },
      // ExtractTextPlugin moves every require("style.css") in entry chunks into a separate css output file.
      // So your styles are no longer inlined into the javascript, but separate in a css bundle file (styles.css).
      // If your total stylesheet volume is big, it will be faster
      // because the stylesheet bundle is loaded in parallel to the javascript bundle.
      // https://github.com/webpack/extract-text-webpack-plugin
      // WHAT: I am not exactly sure of loaders order.
      // SCSS files are first loaded with style-loader: https://github.com/webpack/style-loader
      // Next they are processed by the css-loader: https://github.com/webpack/css-loader
      // Later files are post processed using PostCSS plugin https://github.com/postcss/postcss-loader
      // At the end they are parsed with SCSS loader? https://github.com/jtangelder/sass-loader
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') },
    ],
  },
  // PostCSS-loader configuration: https://github.com/postcss/postcss-loader
  // Uses autoprefixer to add automatic vendor prefixes to css styles for last 2 major browser versions compatiblity.
  // https://github.com/postcss/autoprefixer-core
  postcss: [autoprefixer({ browsers: ['last 2 version'] })],
  // WHAT: I think this indicates the progress of the build in the console?
  progress: true,
  plugins: [
    // Unique ident for this plugin instance. (For advanded usage only, by default automatic generated)
    // https://github.com/webpack/extract-text-webpack-plugin
    new ExtractTextPlugin('[name]-[chunkhash].css'),

    // Define free variables. Useful for having development builds with debug logging or adding global constants.
    // http://webpack.github.io/docs/list-of-plugins.html#defineplugin
    // set process.env to reflect the browser or server values
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('production'),
        ANIMATIONS_DISABLED: process.env.ANIMATIONS_DISABLED === 'true',
      },
    }),

    // Search for equal or similar files and deduplicate them in the output.
    // This comes with some overhead for the entry chunk, but can reduce file size effectively.
    // http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    new webpack.optimize.DedupePlugin(),
    // Assign the module and chunk ids by occurrence count. Ids that are used often get lower (shorter) ids.
    // This make ids predictable, reduces to total file size and is recommended.
    // http://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
    new webpack.optimize.OccurenceOrderPlugin(),
    // Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode.
    // You can pass an object containing UglifyJs options.
    // http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
        },
    }),

    // A webpack plugin to write webpack stats that can be consumed when rendering
    // the page (e.g. it attach the public path to the script names)
    // These stats basically contains the path of the script files to
    // <script>-load in the browser.
    function() { this.plugin('done', writeStats); },
  ],
};
