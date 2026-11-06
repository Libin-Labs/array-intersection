import * as api from '@lp-labs/array-intersection';
import { arrayIntersection } from '@lp-labs/array-intersection';
console.log(arrayIntersection([1, 2, 2, 3], [2, 3, 4]));
// @ts-expect-error invalid argument must be rejected by declarations
api.arrayIntersection('left', []);
