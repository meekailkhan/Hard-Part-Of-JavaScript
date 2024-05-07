function printHello(){
    console.log("hello world")
}

setTimeout(function(){
    console.log("this set time out")
},3000)
setTimeout(printHello,1000);

console.log("print it first")
