import React, { useContext } from 'react'
import { ShopContext } from './ContextShop';
import { products } from '../Product';

export const CartItems = (props) => {
    const {cartItems, addToCart, removeFromCart,updateCartItemCount,setCartItems} = useContext(ShopContext);
    const { id, name,price, img } =props.data;
    

  
   console.log(cartItems)


   const removeItem = (itemId) => {
    const updateItemCart = products.filter((item) => item.id !== itemId);

    
    setCartItems(updateItemCart);
    localStorage.setItem("cartItems",JSON.stringify(updateItemCart));
}
     
  return (
    <div className='CartItems' >
        <img src={img}/>
        <div className='cadesc'>
            <p><b>{name}</b></p>
            <p>{price}</p>
            <div className='countcart'>
                <button className='button1' onClick={()=> removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value),id)}/>
                <button className='button2' onClick={()=> addToCart(id)}>+</button>





                
                <button onClick={()=> removeItem(id)}>Remove item</button>

            </div>
        </div>
    </div>
  )
}
