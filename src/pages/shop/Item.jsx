import React, { useContext } from "react";
import { ShopContext } from "../../context/ContextShop";


export const Item = (props) => {
  const { id, name,price, img } =props.data;

  const {addToCart,cartItems} = useContext(ShopContext);

  const cartItemAmount = cartItems[id]

  return (
    <div className='item'>
      <img src={img}/>
      <div className='desc'>
        <p><b>{name}</b></p>
        <p>${price}</p>
        <button className='cartbtn'  onClick={()=> addToCart(id)} >Add to Cart
        {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  )
}
