function mainFuntion(){
    let counter = 0;
    function innerFuntion(){ counter++}
    return innerFuntion;
}

let myNewFunction = mainFuntion()

console.log(myNewFunction())
console.log(myNewFunction())