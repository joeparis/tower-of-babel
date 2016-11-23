let rawArgs = process.argv.slice(2);
let args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

// here args = [numbers]
let avg = function(...nums) {
  return nums.reduce((total, num) => total + num, 0) / nums.length;

//   let sum = 0;
//
//   for (var i = 0; i < nums.length; i++) {
//       sum += nums[i];
//   }
//
//   let average = sum / nums.length;
//
//   return average;
// }

console.log(avg(...args));
