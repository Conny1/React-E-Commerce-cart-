import React, { useContext } from 'react'
import './check.css'
import {ContextCreated} from  '../../utilities/ContextApi'

const Check = ({name,price,image,specs}) => {
    const {  dispatch} = useContext(ContextCreated)
   
    const deletItem=(n)=>{

        dispatch( {type:'DELETE', payload:n} )
       

    }
  return (
    <div className='check' >
    <img src={image} alt={name} />
    <div className='CheckproductInfo' >
        <p><b>{name}</b></p>
        <p>{specs}</p>
        <p>KSH {price}</p>
        <button onClick={()=>deletItem(name)} >Delete</button>

</div>

</div>
  )
}

export default Check
