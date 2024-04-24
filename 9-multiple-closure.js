function outer(){
    let counter = 0;
    function increamentCounter(){
        return ++counter
    }
    return increamentCounter
}

let myNewFunction = outer()

console.log(myNewFunction()) //1
console.log(myNewFunction()) //2

let anotherFunction = outer();

console.log(anotherFunction()); //1
console.log(anotherFunction()); //2

console.log(outer()()) //1
console.log(outer()()) //1

