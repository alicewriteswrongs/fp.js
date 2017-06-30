export const curry = (fn, ...init) => {
  const nargs = fn.length

  const acc = (...old) => (...cur) => {
    let args = old.concat(cur)
    return args.length >= nargs ? fn(...args) : acc(...args)
  }
  return acc(...init)
}

export const compose = (...fs) => (...a) => {
  if ( fs.length === 1 ) {
    return fs[0](...a);
  } else {
    return fs[0](compose(...fs.slice(1))(...a))
  }
}

export const identity = x => x

export const isNil = x => (
  x === undefined || x === null
);
