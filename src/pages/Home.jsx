import React,{useContext, useState} from 'react'
import './styles.css'
import { ContextCreated } from '../utilities/ContextApi'
import Items from '../Components/items/Items'

const Home = () => {
    const { State, dispatch} = useContext(ContextCreated)
    const [ searchVal, setsearchVal ] = useState(0)
    const filterPrice = ()=>{
      dispatch({type:"SORT_BY_PRICE", payload:Number(searchVal) })
    }
    
    
    
  return (
    <div className='Home' >
        {
            State?.home?.map((product, index)=>{
                return <Items key={index} {...product} />
            })
        }

        <div className='filter' >
          <h4>Filter based on price</h4>
          <label htmlFor="number">Ksh</label>
          <input type="number" name="number" id="number"  onChange={(e)=> setsearchVal(e.target.value) }  />
          <button onClick={filterPrice} >Search</button>
        </div>
      
    </div>
  )
}

export default Home
