const getItems()=new Promise ((resolve,reject)=>{
    fetch('')
    .then(response=>response.json())
    .then(data=>resolve(data))
    .catch(err=>reject(err))
})