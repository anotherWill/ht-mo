
let path = require('path')

module.exports = {
  plugins: {
    "postcss-import": {}, 
    "postcss-url": {}, 
    "postcss-aspect-ratio-mini": {}, 
    "postcss-write-svg": { utf8: false }, 
    "autoprefixer": {
      browsers: ['last 2 versions', '> 3%', 'safari >= 5', 'ie >= 10', 'opera >= 12', 'Firefox ESR', 'iOS >= 6', 'android >= 4']
    },
    "postcss-cssnext": { autoprefixer: false }, 
    "postcss-px-to-viewport": { 
      viewportWidth: 1200, // (Number) The width of the viewport. 
      viewportHeight: 800, // (Number) The height of the viewport. 
      unitPrecision: 5, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw', // (String) Expected units. 
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false // (Boolean) Allow px to be converted in media queries.
    }, 
    "postcss-viewport-units":{}, 
    "precss": {},
    "cssnano": { preset: "advanced", autoprefixer: false, "postcss-zindex": false }



    // require('postcss-assets')({
    //   loadPaths: ['**/*']

    // }),
    // require('postcss-pxtorem')({
    //   rootValue: 16,
    //   unitPrecision: 5,
    //   propList: ['*', 
    //'!height'],
    //   selectorBlackList: [],
    //   mediaQuery: false,
    //   minPixelValue: 12
    // }),


    // require('postcss-import')({}),
    // require('postcss-url')({}),
    // require('autoprefixer')({
    //   browsers: ['last 2 versions', '> 3%', 'safari >= 5', 'ie >= 10', 'opera >= 12', 'Firefox ESR', 'iOS >= 6', 'android >= 4']
    // }),
    // require('precss')({}),
    // require('cssnano')({})
  }
}
