// function multiplyByTwo(num){
//     return num * 2
// }

// multiplyByTwo.scored = multiplyByTwo(5)
// console.log(multiplyByTwo.scored) // 10
// console.log(multiplyByTwo.prototype) // {}
function userCreate(name,age,score){
    this.name = name;
    this.age = age;
    this.score = score;
}

userCreate.prototype.scoreIncreament = function(){
    return this.score++
}
userCreate.prototype.ageIncreament = function(){
    return this.age++
}
userCreate.prototype.addFatherName = function(fatherName){
    return this.name = `${this.name} ${fatherName}`
}


let user1 = new userCreate("meekail",18,84)
user1.scoreIncreament()
user1.ageIncreament()
user1.addFatherName("Aslam")
console.log(user1)