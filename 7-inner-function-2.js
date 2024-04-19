function outer(){
    let counter = 0;
    function incrementFn(){
        counter++
    }
    incrementFn
}
let calledFn = outer()
console.log(calledFn())
console.log(calledFn())