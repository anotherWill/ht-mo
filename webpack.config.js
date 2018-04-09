const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractCSS = new ExtractTextPlugin('./css/[name].[hash].css');
const glob = require('glob')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ENV = process.env.NODE_ENV

const pages = require('./src/pages/pages');
let hbsPages = [];
for (let i = 0; i < pages.length; i++) {
  let page = Object.assign({}, pages[i]);
  hbsPages.push(
    new HtmlWebpackPlugin({
      template: page.template,
      filename: page.output,
      title: page.content.title,
      description: page.content.description,
      chunks: page.chunks,
      hash: true
    })
  );
}
let entries = function () {
  var jsDir = path.resolve('./src/assets', 'js')
  var entryFiles = glob.sync(jsDir + '/*.entry.js')
  var map = {};
  for (var i = 0; i < entryFiles.length; i++) {
    var filePath = entryFiles[i];
    var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    filename = filename.substring(0, filename.lastIndexOf('.'));
    map[filename] = filePath;
  }
  return map;
}

var cssLoader = [
  {
    loader: 'css-loader',
    options: {
      // modules: true, // 为true会将类名打包成hash值
      importLoaders: 1 
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      config: {
        path: './postcssrc.js'
      }
    }
  },
  'resolve-url-loader',
  // { 
  //   loader: 'sass-loader', 
  //   options: { sourceMap: true } 
  // }
];

let webpackConfig = {
  entry: entries(),
  output: {
    path: path.resolve(__dirname, '.', 'dist'),
    publicPath: '/',
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ExtractCSS.extract({
          fallback: 'style-loader',
          use: cssLoader
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name].[hash:8].[ext]'
          }
        }
      },
      { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000&name=fonts/[name].[ext]' },
      {
        test: /\.hbs$/,
        use: [{
          loader: 'handlebars-loader',
          query: {
            helperDirs: [
              path.join(__dirname, 'src/pages', 'helpers')
            ],
            partialDirs: [
              path.join(__dirname, 'src/pages', 'partial'),
            ],
            // inlineRequires: '\/assets/images\/'
          }
        }, {
          loader: 'extract-loader'
        }, {
          loader: 'html-loader'
        }]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify("5fa3b9"),
    }),
    ExtractCSS
  ]
}

if (ENV === 'dev') {
  webpackConfig.devServer = {
    contentBase: './dist',
    port: 8082
  };
  webpackConfig.devtool = 'eval'
} else {
  webpackConfig.devtool = 'source-map'
}

webpackConfig.plugins = webpackConfig.plugins.concat(hbsPages)

module.exports = webpackConfig