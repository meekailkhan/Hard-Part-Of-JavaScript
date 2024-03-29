# JavaScript The Hard Part

## JavaScript Principles
###### JavaScript hava two feature,s
>JavaScript is single thread execution language it means JavaScript run our code line by line and execute it

>JavaScript doing everything save as a object

## Global execution context
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


