let pro = fetch("https://goweather.herokuapp.com/weather/Mecca")

// pro.then((response)=>{
//     return response.json()
// }).then((response)=>{
//     console.log(response)
// })

function display(response){
    return response.json()
}

pro.then(display).then((response)=>{
    console.log(response)
})


for(let i = 0 ; i < 5000 ; i++){
    console.log(i)
}