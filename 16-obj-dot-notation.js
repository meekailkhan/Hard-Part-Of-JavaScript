let user = {
    name : "meekail",
    score : 5 ,
    scoreIncreament : function () {user.score++}
}

console.log(user.score) // 5
user.scoreIncreament();
console.log(user.score) // 6
console.log(user.scoreIncreament())
console.log(user.score) // 7