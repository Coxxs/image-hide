import fs from 'fs'
import assert from 'assert'
import hide from '../index.mjs'
import decode from 'image-decode'

describe('image-hide', function() {
  it('should merge image', function() {
    let image_a = fs.readFileSync('./test/a.png')
    let image_b = fs.readFileSync('./test/b.png')

    let actual = hide(image_a, image_b)
    let expected = fs.readFileSync('./test/result.png')
    assert.deepStrictEqual(decode(actual), decode(expected))
  })
})