import { assert } from 'chai'
import sinon from 'sinon'

import { curry, compose, identity } from '.'

describe('function utilities', () => {
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

  describe('identity', () => {
    it('should, well, be an identity function', () => {
      ['a', 1, 'hello', 12341234].forEach(x => {
        assert.equal(x, identity(x))
      })
    });
  });
})
