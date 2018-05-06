# NPC (Non Playable Character) Generator

![Travis](https://travis-ci.org/SebDez/fonug-character-generator.svg?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

This generator was designed to generate some random characters to be used in role playing game, fiction or whatever which needs a character !

I used to import this lib in another project called FONUG, which is a web based app to generate these characters.

You can choose to generate your character entirely randomly or to select the gender, the age, the class or the civilization as start values.

The character is generated according to that choice, the data could be not rational, it's up to you to adjust the values that you judge appropriated.

The character generated is very general with a view to be adapted to any world background (as a mediavel wolrd to a futuristic one )


## Features

* Generate a random character

## Getting started

```
const NpcGenerator = require('./../npc-generator/lib/npc-generator')

// Initialize the generator and content providers
const generator = new NpcGenerator()

//Generate a random character into a JSON object
const randomCharacter = generator.generateCharacter()
```

## Parameters and options

```
TODO
```

## Scripts

* `yarn build` or `npm run build` - produces production version of the library under the `lib` folder
* `yarn dev` or `npm run dev` - produces development version of the library and runs a watcher
* `yarn test` or `npm run test` - well ... it runs the tests :)
* `yarn test:watch` or `npm run test:watch` - same as above but in a watch mode

## Readings

* [Forked from Krasimir Tsonev Js library starter](http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6)
