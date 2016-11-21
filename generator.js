let FizzBuzz = function*() {
    let num = 1;

    while(num <= process.argv[2]) {
        if(num % 15 === 0) {
            num++;
            yield 'FizzBuzz';
        } else if(num % 3 === 0) {
            num++;
            yield 'Fizz';
        } else if(num % 5 === 0) {
            num++;
            yield 'Buzz';
        } else {
            yield num++
        }
    }
}();

for(var n of FizzBuzz) {
  console.log(n);
}
