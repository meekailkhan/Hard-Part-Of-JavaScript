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
console.log(user1.score); // 
user1.increament();
console.log(user1.score)