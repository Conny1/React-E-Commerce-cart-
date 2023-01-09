import React from 'react'
import './Items.css'

const Items = ({name,price,image,specs}) => {
  return (
    <div className='item' >
            <img src={image} alt={name} />
            <div className='productInfo' >
                <p><b>{name}</b></p>
                <p>{specs}</p>
                <p>KSH {price}</p>
                <button>Add to cart</button>
        
        </div>
      
    </div>
  )
}

export default Items
