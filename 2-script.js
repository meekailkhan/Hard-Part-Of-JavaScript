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