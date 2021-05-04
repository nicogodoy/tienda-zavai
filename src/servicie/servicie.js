
const getItems = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        fetch('https://raw.githubusercontent.com/nicogodoy/tienda-zavai/main/src/Asses/data/data.json')
        .then(response=>response.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
        
    },0)
})

module.exports={
   getItems
}