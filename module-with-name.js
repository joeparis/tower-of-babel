let [, , arg1, arg2] = process.argv;

import {PI, sqrt, square} from './Math';

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
