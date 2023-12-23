import 'dotenv/config';
import path from 'path';
import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import Autoprefixer from 'autoprefixer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CSSMinimizerPlugin from 'css-minimizer-webpack-plugin';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';

//interface Configuration extends WebpackConfiguration {
interface MergedConfiguration extends Webpack.Configuration {
  devServer?: WebpackDevServer.Configuration;
}

const mode = process.env.NODE_ENV ?? 'development';
const isProd = mode === 'production';
const isDev = !isProd;

const port = process.env.WEBPACK_DEV_SERVER_PORT ?? '8080';

const ROOT = path.resolve( __dirname, '../../framework/typescript/src' );
const DESTINATION = path.resolve( __dirname, '../../public/dist');

/**
 * Define paths to any stylesheets you wish to include at the top of the CSS bundle.
 */
const stylesheets = [
  path.resolve(__dirname, '../../framework/typescript/src/styles') + '/mvp.css',
  path.resolve(__dirname, '../../framework/typescript/src/styles') + '/main.scss'
];

/**
 * Change this to `true` to generate source maps alongside your production bundle.
 * This is useful for debugging, but will increase total bundle size and expose your source code.
 */
const sourceMapsInProduction = false;

const config: MergedConfiguration = {
  context: ROOT,
  mode: isProd ? 'production' : 'development',
  entry: {
    bundle: [
      ...stylesheets,
      //path.resolve(__dirname, '../../framework/typescript/src') + 'main.ts'
      './main.ts'
    ]
    //'main': './main.ts'
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.scss',
      '.css'
    ],
    modules: [
      ROOT,
      'node_modules'
    ],
    mainFiles: ['index','main'],
    mainFields: [
      'browser',
      'module',
      'main'
    ],
  },
  output: {
    path: DESTINATION,
    publicPath: '/dist/',//'/dist/', //  determines where the bundles should be served from, and takes precedence over contentBase which should only be used for non-bundled statics
    filename: 'bundle.js',
    //chunkFilename: '[name].[id].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, '../../framework/typescript/src'),
          //path.resolve(__dirname, 'framework/typescript/src'),
        ],
        exclude: [
          /node_modules/,
        ],
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous',
            presets: [
              [
                // Docs: https://babeljs.io/docs/en/babel-preset-env
                '@babel/preset-env',
                {
                  debug: false,
                  corejs: { version: 3 },
                  useBuiltIns: 'usage'
                }
              ],
              [
                // Docs: https://babeljs.io/docs/babel-preset-typescript
                "@babel/preset-typescript",
                {}
              ]
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  Autoprefixer
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test:  /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new Webpack.ProvidePlugin({
      $: 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
  devtool: isProd ? false : 'source-map',
  devServer: {
    hot: true,
    port,
    static: {
      directory: path.join(__dirname, '../../public'),
    }
  },
  stats: {
    chunks: true,
    chunkModules: true,
    modules: true,
    assets: true,
    entrypoints: true,
    errors: true,
    reasons: true,
    errorDetails: true,
  },
  target: isDev ? 'web' : 'browserslist',
}

// Additional configuration for production bundles
if (isProd) {
  // Clean the build directory for production builds
  config.plugins?.push(new CleanWebpackPlugin());

  // Minify CSS files
  config.optimization?.minimizer?.push(
    new CSSMinimizerPlugin({
      parallel: true,
      minimizerOptions: {
        preset: [
          'default',
          {
            discardComments: { removeAll: !sourceMapsInProduction },
          },
        ],
      },
    })
  );

  // Minify and treeshake JS
  if (config.optimization === undefined) {
    config.optimization = {};
  }

  config.optimization.minimize = true;
}

// Parse as JSON5 to add support for comments in tsconfig.json parsing.
//require('require-json5').replace();

export default config;
