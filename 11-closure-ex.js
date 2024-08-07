// Challenge 1
// Create a function createFunction that creates and returns a function.
// When that created function is called, it should print "hello". When you think you completed createFunction, 
// un-comment out those
// lines in the code and run it to see if it works.

// function createFunction() {
//     function innerFunction(){
//       return "hello"
//     }
//     return innerFunction;
// }


// const function1 = createFunction();
// console.log(function1()); // => should console.log('hello');

function fn(){
  let n = 3;
  function innerFn(num){
    return num * n
  }
  return innerFn
}

let myFn = fn()
console.log(myFn(2))