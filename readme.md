# JavaScript The Hard Part

## JavaScript Principles
###### JavaScript hava two feature,s
>JavaScript is single thread execution language it means JavaScript run our code line by line and execute it

>JavaScript doing everything save as a object

## Global execution context

### javascript
```js
function arrayMultiplyByTwo(arr){
    const output = [];
    for(let i =0;i<arr.length;i++){
        output.push(arr[i]*2)
    }
    return output
}

let array = [1,2,3,4];
let result = arrayMultiplyByTwo(array)
console.log(result)
```

| thread of execution|global memory |
|-------|-------|
||num:3  |
||output:6|


---
## Arrow fucntion
>arrow function in javascript use for the arrow function syntex is '=>' 
>if only one perameter in the function so we can write perameter without peranthises and return without use return keyword and karlibrases

### javascript 
```js
function multiplyByTwo1(input){ return input*2 };

const multiplyByTwo2 = (input) => { input*2 };

const multiplyByTwo3 = (input) => input*2;

const multiplyByTwo4 = input => input*2
```

## Closure
>when we create a function in our programm and run it so that it run each time from skrech it can,t remember our first and second and further operation,s the closure is the solution of this problem
```js
function multiplyByTwo(){
    function innerFn(num){
        return num*2
    }
    return innerFn
}

const generator = multiplyByTwo()
const result = generator(5) // 10 

console.log(result)
```

## Function with memory
>when we get or call a function so create a local memory for execution to function this local memory create in our global memory
>when the function is finish and return value then this local memory is delete
>But our function hold data when the global execution is not our in this situation our memory not start to screth

## Retaining Function
```js
function mainFuntion(){
    let counter = 0;
    function innerFuntion(){ counter++}
    return innerFuntion;
}

let myNewFunction = mainFuntion()

console.log(myNewFunction())
console.log(myNewFunction())
```

>when the mainFuntion return innerFuntion into a global execution context so innerFuntion take all variable and value of mainFunction just becuase if the operation is relate to variable who define in a mainFunction if innerFunction not take a value and variable show result of operation undefined and maybe error
>So innerFunction return with the surounding value and variable

## Scope in JavaScript
>In the scope is decide which variable whether access 
>JavaScript have generaly 2 scope 
* Global Scope
* Local Scope

#### Global Scope
>Variable who declare in global scope we can access wherever in the part of programm the global variable store in window object we found it in
```js
var a = "one";


console.log(a) // one
console.log(window.a) // one

{
    console.log(a); // one
    console.log(window.a) // one
}
```
#### Local Scope
>Variable who declare in block scope block create by karlibraces "{}" and they exis in only his block not whole programm and file


## Prototype Chain
>when we try to access any key in the javascript object who never exit in object javascript start searching this key in their prototype of object and start operation on the basis of prototype we can coustomize of any object prototype with the help of Object.create() method
```js

function userCreator(name,score){
    const newUser = Object.create(userFunctionStore)
    newUser.name = name;
    newUser.score = score;

    return newUser
}

let userFunctionStore = {
    increament : function(){
        this.score++
    },
}

let user1 = userCreator("meekail",5)
console.log(user1.score); // 5
user1.increament();
console.log(user1.score)  // 6
```
## Function Object
>JavaScript hava more flexiblity with function is not only function but object empty object and in the javascript we can add key value pair and use of them
```js
function multiplyByTwo(num){
    return num * 2
}

multiplyByTwo.scored = multiplyByTwo(5)
console.log(multiplyByTwo.scored) // 10
console.log(multiplyByTwo.prototype) // {}
```