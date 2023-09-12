import React from 'react'
import {products} from '../../Product'
import { Item } from './Item'


export const Shop = () => {
  return (
    <div className='Shop'>
        <div className='titlehead'><h1>Get Your Item</h1></div>
        <div className='products'>
            {products.map((item)=>(
                <Item data={item}/>
            ))}
        </div>
    </div>
  )
}
