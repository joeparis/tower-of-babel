let [, , arg1, arg2] = process.argv;

import libmath from './Math2';

console.log(libmath.PI);
console.log(libmath.sqrt(+arg1));
console.log(libmath.square(+arg2));
