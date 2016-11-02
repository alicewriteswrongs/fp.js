export const curry = (fn, ...init) => {
  const nargs = fn.length

  const acc = (...old) => (...cur) => {
    let args = old.concat(cur)
    return args.length >= nargs ? fn(...args) : acc(...args)
  }
  return acc(...init)
}

export const compose = (...fs) => (...a) => (
  len(fs) === 1 ? head(fs)(...a) : head(fs)(compose(...tail(fs))(...a))
)
