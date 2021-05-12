import React from 'react'
import {useContext} from 'react'
import {CartContex} from '../Context/cartContex'

export default function Cart() {
   const cart= useContext(CartContex)
   console.log(cart)
    return (
        <div>
            hola
        </div>
    )

}
