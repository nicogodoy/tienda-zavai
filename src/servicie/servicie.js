import db from '../firebase/index'
//import firebase from 'firebase/app'
//import 'firebase/firestore'

const itemColeccion=db.collection('category')


export function getItemFire(){
 return itemColeccion.get()
 .then(snapshot=>{
     return snapshot.docs.map(doc=>doc.data())
 })
}


export const getItems = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        fetch('https://raw.githubusercontent.com/nicogodoy/tienda-zavai/main/src/Asses/data/data.json')
        .then(response=>response.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
        
    },0)
})

// module.exports={
//    getItems,
   
// }