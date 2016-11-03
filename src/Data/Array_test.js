import { assert } from 'chai'

import {
  cons,
  flatten
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
})
