var a = "one";



console.log(a) // one

console.log(window.a) // one


{
    var b = "two"
    let c = "three"
    console.log(a); // one
    console.log(window.a) // one
    console.log(c)
}

console.log(window) //two
console.log(window.b) //two
console.log(window.c)

