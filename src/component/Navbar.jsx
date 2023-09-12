import React from 'react'
import { Link } from 'react-router-dom'
import {Path, ShoppingCart} from 'phosphor-react'
import '../component/Navbar.css'

export const Navbar = () => {
  return (
    <div className='Navbar'>
      <Link className='link' to='/'><h1>E-Cart</h1></Link>
      
        <div className='links'>
            <Link className='link' to='/'>Shop</Link>
            <Link className='link' to='/cart'>
                <ShoppingCart size={32}/>
            </Link>
        </div>
    </div>
  )
}
