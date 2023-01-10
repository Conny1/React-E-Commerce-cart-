import React, { useContext, useState } from 'react'
import { ContextCreated } from '../../utilities/ContextApi'
import './Items.css'

const Items = ({name,price,image,specs}) => {
  const { State, dispatch } = useContext(ContextCreated)
  const [incart, setIncart] = useState(true)
  const addTocart=(n)=>{
   const findItem = State.cart.find((item)=> item.name === n )
   
   if (findItem){
    setIncart(false)
   }else{
   
    dispatch({type:'ADD', payload:{name,price,image,specs}})
    setIncart(false)
   }
   
  }

  return (
    <div className='item' >
            <img src={image} alt={name} />
            <div className='productInfo' >
                <p><b>{name}</b></p>
                <p>{specs}</p>
                <p>KSH {price}</p>
                <button onClick={()=> addTocart(name) } >{incart?'Add to cart' :  <b style={{color:'red'}} >Added to cart</b> }</button>
        
        </div>
      
    </div>
  )
}

export default Items
