var inputs = process.argv.slice(2);
var result = inputs.map(x => x[0].toUpperCase())
                   .reduce((accumulator, current) => accumulator.concat(current));
console.log(result);
