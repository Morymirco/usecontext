import { useState, createContext } from "react";

const CountContext = createContext()

const CountProvider = ({children})=>{
    const [count, setCount] = useState(0)
    
    const handlePlus = ()=>{
        setCount(count => count + 1)
    }

    const handleMoin = ()=>{
        setCount(count => count - 1)
    }

    return(
        <CountContext.Provider value={{count, handleMoin, handlePlus}}>
            <div>{children}</div>
        </CountContext.Provider>
    )
}
export {CountContext,CountProvider}