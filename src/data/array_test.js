import { assert } from 'chai'

import { identity } from '..'
import {
  cons,
  flatten,
  map,
  arrcpy,
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
      let doubleMap = map(x => x * 2)

      assert.deepEqual(doubleMap([1,2,3]), [2,4,6])
    })

    it('should behave sanely with an empty array', () => {
      assert.lengthOf(map(identity)([]), 0)
    })
  })

  describe('arrcpy', () => {
    it('should return a different array with the same stuff', () => {
      let xs = [1,2,3];
      assert.deepEqual(xs, arrcpy(xs))
      assert.notEqual(xs, arrcpy(xs))
    });
  });
})
