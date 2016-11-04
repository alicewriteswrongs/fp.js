import { assert } from 'chai'

import { identity } from '..'
import {
  cons,
  flatten,
  map
} from './array'

describe('array functions', () => {
  describe('cons', () => {
    it('should build arrays from an element and an array', () => {
      let result = cons('a', ['b', 'c'])
      assert.deepEqual(result, ['a', 'b', 'c'])
    })
  })

  describe('flatten', () => {
    it('should flatten', () => {
      let bumpy = [ [ 'a', 'b' ], ['c', 'd'] ]
      let result = flatten(bumpy)
      let expectation = ['a', 'b', 'c', 'd']
      assert.deepEqual(result, expectation)
    })
  })

  describe('map', () => {
    it('should be a curried function', () => {
      assert.isFunction(map(identity))
    })

    it('should take an array, and return the function mappped across the array', () => {
    })

    it('should behave sanely with an empty array', () => {
      assert.lengthOf(map(identity)([]), 0)
    })
  })
})
