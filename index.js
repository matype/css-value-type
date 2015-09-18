var isColor = require('is-color')
var isLength = require('is-css-length')

module.exports = function (value) {
    var type
    if (isColor(value)) {
        type = 'color'
    }
    else if (isLength(value)) {
        type = 'length'
    }

    return type
}
