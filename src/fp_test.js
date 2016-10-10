import {
  curry,
  compose,
  cons,
  flatten,
} from './fp';

describe("alice's little functional programming library", () => {
  describe('curry', () => {
    const timesTwo = x => x * 2
    const plusTwo = x => x + 2
    const plusFour = x => x + 4

    it('should chain functions together', () => {
      let combined = compose(timesTwo, plusTwo)

      assert.equal(combined(2), 8);
    });
  });

  describe('compose', () => {
  });

  describe('cons', () => {
    it('should build arrays from an element and an array', () => {
      cons('a', ['b', 'c'])
    });
  });


  describe('flatten', () => {
    it('should flatten', () => {
      let bumpy = [ [ 'a', 'b' ], ['c', 'd'] ]
      flatten(bumpy)

      console.log(flatten(bumpy));
    });
  });
  
});
