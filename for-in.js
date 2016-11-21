let FizzBuzz = {
    [Symbol.iterator]() {
        let num = 1;

        return {
            next() {
                // console.log("foo");

                if(num > process.argv[2])
                    return { done: true };

                let value = num;
                // console.log(value);
                // console.log(num);

                if(num % 15 === 0)
                    value = 'fizzbuzz';
                else if(num % 3 === 0)
                    value = 'fizz';
                else if(num % 5 === 0)
                    value = 'buzz';

                ++num;

                return { done: false, value: value };
          }
      };
  }
};

for(var n of FizzBuzz) {
  console.log(n);
}
