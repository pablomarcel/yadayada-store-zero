import React from 'react'
import ShopItem from "./ShopItem";

export default function ShoppingCart({cart, removeFromCart}){

  const shoppingCartList = cart.map((card, idx )=>

    <ShopItem
      card={card}
      key={idx}
      onRemove={()=>removeFromCart(idx)}
    />)

  return(

    <div className="shopping-cart-component">
      {shoppingCartList}
    </div>
  )
}
