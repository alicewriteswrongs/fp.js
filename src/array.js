import { curry, compose } from './function'

export const cons = curry((x, xs) => [x].concat(xs))

export const flatten = xs => (
  len(xs) === 1 ? head(xs) : head(xs).concat(flatten(tail(xs)))
)

export const map = curry((fn, xs) => xs.map(fn))

export const arrcpy = xs => xs.concat()

export const filter = curry((fn, xs) => xs.filter(fn))

export const head = xs => xs[0]

export const tail = xs => xs.slice(1)

export const _rev = xs => xs.reverse()

export const reverse = compose(_rev, arrcpy)

export const len = xs => xs.length

export const editHead = curry((fn, xs) => cons(fn(head(xs)), tail(xs)))

export const includes = curry((xs, x) => xs.includes(x))

export const arrdiff = curry((xs, ys) => filter(includes(ys), xs))
