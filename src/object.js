export const fromPairs = xs => (
  Object.assign({}, ...map(([k, v]) => ({[k]: v}), xs))
)
