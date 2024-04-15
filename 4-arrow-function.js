// arrow function 

function multiplyByTwo1(input){ return input*2 };

const multiplyByTwo2 = (input) => { input*2 };

const multiplyByTwo3 = (input) => input*2;

const multiplyByTwo4 = input => input*2


function copyArrAndManupulation(arr,itrection){
    let output = [];
    for(let i = 0; i<arr.length;i++){
        output.push(itrection(arr[i]))
    }
    return output
}

let array = [1,2,3,4,5]
const result = copyArrAndManupulation([1,2,3,4],input=>input*2)
console.log(result)