# Webpack library starter

Webpack based boilerplate for producing libraries (Input: ES6/TypeScript, Output: universal library)

## Features

* Webpack 5 based.
* ES6 or TypeScript as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format so your library works everywhere.
* Test setup with [Jest](https://jestjs.io/).

## Process

```
ES6/TypeScript source files
       |
       |
    webpack
       |
       +--- babel
       |
  ready to use
     library
  in umd format
```

*Have in mind that you have to build your library before publishing. The files under the `lib` folder are the ones that should be distributed.*

## Getting started

1. Setting up the name of your library
  * Open `webpack.config.js` file and change the value of `libraryName` variable.
  * Open `package.json` file and change the value of `main` property so it matches the name of your library.
2. Build your library
  * Run `yarn install` (recommended) or `npm install` to get the project's dependencies
  * Run `yarn build` to produce minified version of your library.
3. Development mode
  * Run `yarn dev`. This command will generate a non-minified version of your library and will run a watcher so you get the compilation on file change.
4. Running the tests
  * Run `yarn test`

## Scripts

* `yarn build` - produces production version of your library under the `lib` folder
* `yarn build-amd` - produces an AMD version that works with RequireJS
* `yarn dev` - produces development version of your library and runs a watcher
* `yarn dev-amd` - produces an AMD development version of your library and runs a watcher
* `yarn test`  - well ... it runs the tests :)
* `yarn test-watch` - same as above but in a watch mode

## Readings

* [Start your own JavaScript library using webpack and ES6](http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6)

## Misc

### An example of using dependencies that shouldn’t be resolved by webpack, but should become dependencies of the resulting bundle

In the following example we are excluding React and Lodash:

```js
{
  devtool: 'source-map',
  output: {
    path: '...',
    libraryTarget: 'umd',
    library: '...'
  },
  entry: '...',
  ...
  externals: {
    react: 'react'
    // Use more complicated mapping for lodash.
    // We need to access it differently depending
    // on the environment.
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: '_',
      root: '_'
    }
  }
}
```
