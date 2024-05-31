let pro = fetch("https://goweather.herokuapp.com/weather/Jodhpur")

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

