export function flattenDeep<T>(array: T[]): T[] {
  return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
