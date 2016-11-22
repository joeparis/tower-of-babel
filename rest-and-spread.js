let rawArgs = process.argv.slice(2);
let args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

let avg = function(...nums) {
  return nums.reduce((total, num) => total + +num, 0) / nums.length;
}

console.log(avg(...args));
