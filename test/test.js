const fs = require('fs')
const assert = require('assert')
const hide = require('../index')
const decode = require('image-decode')

describe('image-hide', function() {
  it('should merge image', function() {
    let image_a = fs.readFileSync('./test/rcnb-a.png')
    let image_b = fs.readFileSync('./test/rcnb-b.png')

    let actual = hide(image_a, image_b)
    let expected = fs.readFileSync('./test/rcnb-result.png')
    assert.deepStrictEqual(decode(actual), decode(expected))
  })
})