import { curry, compose } from '..'
import { Maybe } from '../monad/maybe'

export const cons = curry((x, xs) => [x].concat(xs))

export const marr = mxs => mxs.isNothing ? [] : arrcpy(mxs.value)

export const lift = curry((mx, mxs) => marr(mx).concat(marr(mxs)))

export const flatten = xs => (
  len(xs) === 1 ? head(xs).value : head(xs).map(xs => xs.concat(flatten(tail(xs)))).value
)

export const map = curry((fn, xs) => xs.map(fn))

export const arrcpy = xs => xs.concat()

export const filter = curry((fn, xs) => xs.filter(fn))

export const head = xs => Maybe(xs[0])

export const tail = xs => Maybe(xs.slice(1))

export const _rev = xs => xs.reverse()

export const reverse = compose(_rev, arrcpy)

export const len = xs => xs.length

export const editHead = curry((fn, xs) => cons(fn(head(xs)), tail(xs)))

export const includes = curry((xs, x) => xs.includes(x))

export const arrdiff = curry((xs, ys) => filter(includes(ys), xs))
