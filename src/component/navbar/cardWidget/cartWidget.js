import React from 'react';
import './cartWidget.css';
import cartWidget from './icon/cart.svg'


export default function mostratCartWidget(){
    return(
        <img alt='cartWidget' src={cartWidget} className="cartWidget"width="30" height="30" loading="lazy" ></img>
    )

}