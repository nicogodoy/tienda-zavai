import db from '../firebase/index'
//import firebase from 'firebase/app'
//import 'firebase/firestore'

//const itemColeccion=db.collection('category','orden')
const itemColeccion=db.collection('category')


const productsCollection = db.collection('productos')

export async function getItemFire(){
    const docRef = await productsCollection.get();

    const productos = docRef.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
    })
    return productos;
}

export default getItemFire 


// export function getItemFire(){
//  return itemColeccion.get()
//  .then(snapshot=>{
//      return snapshot.docs.map(doc=>({...doc.data(),id:doc.id}))
//  })
// }

export function getItemOrder(){
    return itemColeccion.get()
    .then(snapshot=>{
        return snapshot.docs.map(doc=>doc.data())
    })
   }

export function getProductsById(productId) {
    const itemById = itemColeccion.doc(productId)
    return itemById.get()
    .then(snapShot => {
        return ({...snapShot.data(), id: snapShot.id})
    })

}


export const getItems = new Promise ((resolve,reject)=>{
    // setTimeout(()=>{
        fetch('https://raw.githubusercontent.com/nicogodoy/tienda-zavai/main/src/Asses/data/data.json')
        .then(response=>response.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
        
    // },0)
})



