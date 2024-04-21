function outer(){
    let counter = 0;
    function incrementFn(){
        counter++
    }
    incrementFn()
}

console.log(outer())