import React, {useState , useContext } from 'react'
import { products } from '../../Product'
import { ShopContext } from '../../context/ContextShop'
import  {CartItems} from '../../context/CartItems'
import '../cart/cart.css'
import {useNavigate} from 'react-router-dom'
import CartPopup from './Cartpopup'
import { Key } from 'phosphor-react'

export const Cart = () => {
  const {cartItems,getToatalCartAmount,removeItemCart} = useContext(ShopContext)
  const  totalAmount =getToatalCartAmount();

   const naviagate = useNavigate();
 
 const [isPopupVisible,setPopupVisible] = useState(false);

   const [showPopup, setShowPopup] = useState(false);
   
  
  
   const openPopup = () => {
     setShowPopup(true);
   };
 
   const closePopup = () => {
     setShowPopup(false);
   };

     


  return (
    <div className='Cart'>
      <div><h1>Your Cart Items </h1></div>
      <div className='cartItems'>
        {products.map((item) =>{
          if(cartItems[item.id] !==0){
             return <CartItems data={item} Key={item.id}/>
 
          }      

        })}
      </div>
      {totalAmount > 0 ?(
      <div className='subTotal'>
        <p> Subtotal: ${totalAmount}</p>
        <div className='btndiv'>
        <button onClick={ ()=> naviagate("/")}>Continue Shopping</button>
        <button onClick={openPopup} >Get Bill</button>
        <button onClick= { ()=> removeItemCart()} >Remove all</button>
        {showPopup && <CartPopup onClose={closePopup} />}
        </div>
      </div>
      ) : (<span>Your Cart is Empty</span>)}

{/* {showPopup && (
          <div className="popup">
            <div className="popup-content">
            <button onClick={closePopup}>Close</button>
              <h2>Popup Content</h2>
              <p>This is the content of the popup.</p>
            </div>
          </div>
        )} */}
    </div>
  )

 
        
       
   
  
}
