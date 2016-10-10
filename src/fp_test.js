import { assert } from 'chai'
import sinon from 'sinon'

import {
  curry,
  compose,
  cons,
  flatten
} from './fp'

describe("alice's little functional programming library", () => {
  describe('curry', () => {
    let exampleFunc = curry((x, y, z) => x + y + z)

    it('should let you bind partial arguments', () => {
      let bound = exampleFunc(1, 2)
      assert.isFunction(bound)
    })

    it('should apply all bound arguments', () => {
      let bound = exampleFunc(1, 2)
      assert.equal(bound(3), 6)
    })
  })

  describe('compose', () => {
    const timesTwo = sinon.spy(x => x * 2)
    const plusTwo = sinon.spy(x => x + 2)
    const combined = compose(timesTwo, plusTwo)

    it('should chain functions together', () => {
      assert.equal(combined(2), 8)
      assert.ok(plusTwo.calledWith(2), 'should get the argument first')
      assert.ok(timesTwo.calledWith(4), 'should get the argument second')
    })
  })

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
