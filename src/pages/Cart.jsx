import React, { useContext } from 'react'
import Check from '../Components/checkout/Check'
import { ContextCreated } from '../utilities/ContextApi'
import './styles.css'


const Cart = () => {
  const { State} = useContext(ContextCreated)
  console.log(State.cart)
  return (
    <div className='cart' >
      {
      State?.cart?.map((item, index)=>{
        return <Check key={index} {...item} index={index} />
      })
       }
      
    </div>
  )
}

export default Cart
