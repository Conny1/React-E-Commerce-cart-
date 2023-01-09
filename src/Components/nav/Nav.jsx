import React,{useContext} from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'
import { ContextCreated } from '../../utilities/ContextApi'

const Nav = () => {
  const { State} =useContext(ContextCreated) 
  return (
    <div className=' nav' >
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/cart' > Cart {State.cart.length}</NavLink>

      
    </div>
  )
}

export default Nav
