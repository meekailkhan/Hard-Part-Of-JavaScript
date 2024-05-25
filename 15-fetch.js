let pro = fetch("https://goweather.herokuapp.com/weather/Jodhpur")

pro.then((response)=>{
    return response.json()
}).then((response)=>{
    console.log(response)
})