for (let val = 1; val <= 100; val++) {
    if (!(val % 15)) {
        console.log(val, 'FizzBuzz');
    } else if (!(val % 5)) {
        console.log(val, 'Buzz');
    } else if (!(val % 3)) {
        console.log(val, 'Fizz');
    }
}