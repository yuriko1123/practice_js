// for文FizzBuzz
for(var i = 1; i <= 100; i++){
  if(i % 3 === 0 && i % 5 === 0){
      console.log('FizzBuzz');
  } else if(i % 5 === 0){
      console.log('Buzz');
  } else if(i % 3 === 0){
      console.log('Fizz'); 
  } else {
    console.log(i)
  }
}  
  
  
// while文fizzbuzz
var i = 1;
while (i <= 30) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if(i % 5 === 0){
    console.log('Buzz');
  } else if(i % 3 === 0){
    console.log('Fizz');
  } else {
  console.log(i);
  }
  i = i + 1
  }