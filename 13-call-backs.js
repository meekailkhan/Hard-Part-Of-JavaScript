function getData(dataId,nextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(nextData){
            nextData()
        }
    },2000)
}

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4,()=>{
                getData(5)
            })
        })
    })
})