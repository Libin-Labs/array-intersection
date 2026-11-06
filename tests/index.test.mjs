import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('returns common values', () => {
  assert.deepEqual(api.arrayIntersection([1, 2, 3], [2, 3, 4]), [2, 3]);
});
test('preserves left order', () => {
  assert.deepEqual(api.arrayIntersection([3, 2, 1], [1, 2, 3]), [3, 2, 1]);
});
test('removes duplicate output', () => {
  assert.deepEqual(api.arrayIntersection([1, 1, 2], [1, 1]), [1]);
});
test('supports empty inputs', () => {
  assert.deepEqual(api.arrayIntersection([], [1]), []);
});
test('uses SameValueZero for NaN', () => {
  assert.deepEqual(api.arrayIntersection([NaN], [NaN]).length, 1);
});
test('rejects non-array input', () => {
  assert.throws(() => api.arrayIntersection('x', []), TypeError);
});
