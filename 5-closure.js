// closure in JavaScript

function multiplyByTwo(){
    function innerFn(num){
        return num*2
    }
    return innerFn
}

const generator = multiplyByTwo()
const result = generator(5) // 10 

console.log(result)