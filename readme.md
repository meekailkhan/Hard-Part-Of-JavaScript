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
>if only one perameter in the function so without we can write perameter without peranthises and return without use return keyword and karlibrases

### javascript 
```js
function multiplyByTwo1(input){ return input*2 };

const multiplyByTwo2 = (input) => { input*2 };

const multiplyByTwo3 = (input) => input*2;

const multiplyByTwo4 = input => input*2
```