var test = require('tape')
var getType = require('..')

test('getType', function (t) {
    var expected = 'color'
    var actual = getType('#fff')
    t.equal(expected, actual)
    t.end()
})
