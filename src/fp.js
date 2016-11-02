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
