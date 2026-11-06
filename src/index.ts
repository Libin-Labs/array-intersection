export function arrayIntersection<T>(left: readonly T[], right: readonly T[]): T[] {
  if (!Array.isArray(left) || !Array.isArray(right)) throw new TypeError('Expected arrays');
  const other = new Set(right);
  return [...new Set(left)].filter((value) => other.has(value));
}
