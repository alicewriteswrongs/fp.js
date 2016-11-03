import { map } from './array'

export const fromPairs = xs => (
  Object.assign({}, ...map(([k, v]) => ({[k]: v}), xs))
)
