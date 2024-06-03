// Prototype chain
function userCreator(name,score){
    const newUser = Object.create(userFunctionStore)
    newUser.name = name;
    newUser.score = score;

    return newUser
}

let userFunctionStore = {
    increament : function(){
        this.score++
    },
}

let user1 = userCreator("meekail",5)
console.log(user1.score); // 5 
user1.increament();
console.log(user1.score)  // 6

console.log(user1.hasOwnProperty("name")) // true
let prototype1 = {}
let obj1 = Object.create(prototype1)
console.log(Object.getPrototypeOf(obj) === prototype1) // true
console.log(window.Object.create)

window.str = "hello world";
let obj = Object.create(window);
console.log(obj.str)
