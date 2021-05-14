import React, {useContext} from "react";
import Cart from "../Cart/Cart";
import { CartContext } from '../../Context/CartContext/CartContext';
import { Button } from 'bootstrap-4-react';

import './CartList.css'


export default function CartList() {

    const { cart, clearCart, totalPrice } = useContext(CartContext);
    console.log("Cart List");

    return (
        <div>
            <table className="table">
                <thead>
                    <tr className="cart-table">
                        <th scope="col">Categoría</th>
                        <th scope="col">Item</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <Cart key={item.id} itemSale={item} />
                    ))}
                </tbody>
                <tfoot>
                    { cart.length === 0 ? 
                        <tr id="footer-carrito">
                            <th className="empty-cart" scope="row" colSpan="5">Tu carrito esta vacío, comienza a comprar!</th>
                        </tr>
                        :
                        <tr id="footer-carrito">
                            <td></td>
                            <td></td>
                            <td>
                                <Button type="button" id="vaciar-carrito" onClick={clearCart}>
                                    Vaciar Carrito
                                </Button>
                            </td>
                            <td className="font-weight-bold">Total a pagar</td>
                            <td className="font-weight-bold">$ <span>{totalPrice}</span></td>
                        </tr>
                    }
                </tfoot>
            </table>
        </div>
        );
    }