import { assert } from 'chai'
import sinon from 'sinon'

import {
  cons,
  flatten
} from './fp'

describe("alice's little functional programming library", () => {
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
