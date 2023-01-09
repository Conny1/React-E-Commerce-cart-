import { createContext, useReducer } from "react"
import { ReducerFunction, INITIAL_STATE } from "./Reducer"

 export const ContextCreated = createContext()

 export const ContextProvider=({children})=>{
    const [ State, payload ] = useReducer(ReducerFunction, INITIAL_STATE)

 return <ContextCreated.Provider value={{State, payload}} >
{children}
   </ContextCreated.Provider>

}