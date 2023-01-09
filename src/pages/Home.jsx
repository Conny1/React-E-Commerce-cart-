import React,{useContext} from 'react'
import './styles.css'
import { ContextCreated } from '../utilities/ContextApi'
import Items from '../Components/items/Items'

const Home = () => {
    const { State} = useContext(ContextCreated)
    
  return (
    <div className='Home' >
        {
            State?.home?.map((product, index)=>{
                return <Items key={index} {...product} />
            })
        }
      
    </div>
  )
}

export default Home
