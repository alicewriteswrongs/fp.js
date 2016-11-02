// array methods
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

export const includes = curry((xs, x) => xs.includes(x));

export const arrdiff = curry((xs, ys) => filter(includes(ys), xs));

// string methods
export const strcpy = s => s.concat()

export const toLower = s => s.toLowerCase()

export const toUpper = s => s.toUpperCase()

export const _firstCap = s => s.replace(/^./, toUpper(head(s)))

export const capitalize = compose(_firstCap, toLower, strcpy)

export const split = curry((sep, s) => s.split(sep))

export const join = curry((char, s) => s.join(char))

export const words = split(' ')

export const sentence = join(' ')

export const capitalizeSentence = compose(sentence, editHead(capitalize), words)

// object methods
export const fromPairs = xs => (
  Object.assign({}, ...map(([k, v]) => ({[k]: v}), xs))
)
