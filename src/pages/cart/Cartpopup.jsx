import React, { useContext } from 'react'
import { ShopContext } from '../../context/ContextShop'
import { products } from '../../Product'

const CartPopup = ({ onClose}) =>  {

    const {cartItems,getToatalCartAmount} = useContext(ShopContext)
  return (
    <div className='Cartpopup'>
        <div className='popupcont'>
        <button className='btpop' onClick={onClose}>close</button>
             {/* <p>content is in here............</p> */}
              <div className='table'>
                
                            <table>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th>PRICE</th>
                                    <th>COUNT</th>
                                </tr>
                                {products.map((item)=>{
                    if(cartItems[item.id] !==0){
                        return (
                                <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{}</td>
                                </tr>     )
                    }
                })}
                                <tr>
                                    <th><b>Total</b></th>
                                    <td>{getToatalCartAmount()}</td>
                                </tr>

                            </table>
                   
              </div>
        </div>
    </div>
  )
}

export default CartPopup