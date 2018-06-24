// for文FizzBuzz
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz'); 
  } else {
    console.log(i);
  }
}  
  
  
// while文fizzbuzz
var j = 1;
while (j <= 30) {
  if (j % 3 === 0 && j % 5 === 0) {
    console.log('FizzBuzz');
  } else if (j % 5 === 0) {
    console.log('Buzz');
  } else if (j % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(j);
  }
  j = j + 1
  }