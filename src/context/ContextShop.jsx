import React, { createContext, useEffect, useState } from 'react'
import { products } from '../Product';

export const ShopContext = createContext(null);

const getDeafultCart = () =>{
    let cart = {};
    for(let i =1 ; i<=products.length;i++){
        cart[i]=0;
    }
    return cart;
};

const getSavedCart =()=>{
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart): getDeafultCart();

}


export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getSavedCart());
// console.log(cartItems,"appu");
      const getToatalCartAmount = () =>{
         let totalAmount = 0;
         for(const itemId in cartItems){
            if(cartItems[itemId]>0){
            let itemInfo =products.find((item) => item.id === Number(itemId));
            totalAmount += cartItems[itemId] * itemInfo.price
        }
        // console.log(getDeafultCart);
    }
    return totalAmount;

      }

    const addToCart = (itemId) =>{
    setCartItems((prev) => ({...prev,[itemId]: prev[itemId] +1}))
}
const removeFromCart = (itemId) =>{
    setCartItems((prev) => ({...prev,[itemId]: prev[itemId] -1}))
}

const updateCartItemCount =(newAmount,itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:newAmount}))
}

const removeItemCart = (itemId) =>{
    setCartItems((prev) => {
        const updateCart = {...prev};
        if(updateCart[itemId] > 0){
            delete updateCart[itemId];
        }
        return getDeafultCart(updateCart)
    
    });
}



const localSave =(cartItems) =>{
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
}


useEffect(() =>{
     localSave(cartItems)
},[cartItems])


const contextValue = {setCartItems,cartItems,addToCart,removeFromCart,updateCartItemCount,getToatalCartAmount,removeItemCart}


return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}
  
