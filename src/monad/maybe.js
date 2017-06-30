import { isNil } from '..'

export const Maybe = val => new _Maybe(val)

function Nothing () {
  return {
    isNothing:  true,
    isJust:     false,
    map:        () => Nothing(),
    toString:   () => `Nothing`
  }
}

function Just(val) {
  return {
    value:      val,
    isNothing:  false,
    isJust:     true,
    map:        fn => Maybe(fn(val)),
    toString:   () => `Just(${val})`
  }
}

function _Maybe (val) {
  return isNil(val) ? Nothing() : Just(val)
}
