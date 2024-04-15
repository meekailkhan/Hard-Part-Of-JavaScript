function copyArrayAndManupulate(array,intraction){
    let output = [];
    for(let i =0;i<array.length;i++){
        output.push(intraction(array[i]))
    }
    return output
}

function multiplyByTwo(input){return input*2};
function divideByTwo(input){return input/2};
function addThree(input){return input+3};
let arr = [1,2,3,4];
console.log(`original array is ${arr}`)
console.log(copyArrayAndManupulate(arr,multiplyByTwo));
console.log(copyArrayAndManupulate(arr,divideByTwo));
console.log(copyArrayAndManupulate(arr,addThree));


