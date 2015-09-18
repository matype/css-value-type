# css-value-type [![Build Status](https://travis-ci.org/morishitter/css-value-type.svg)](https://travis-ci.org/morishitter/css-value-type)

get types of CSS properties

## Installation

```shell
$ npm install css-value-type
```

## Usage

```js
var getType = require('css-value-type')

getType('10vh') // 'length'
getType('rgb(255, 0, 0)') // 'color'
```

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
