import { useContext } from "react";
import { CountContext } from "./countcontext";


const Counter = () => {
    const {count, handleMoin, handlePlus} = useContext(CountContext)
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleMoin}>-</button>&nbsp;&nbsp;&nbsp;
            <button onClick={handlePlus}>+</button>
        </div>
    );
}
export default Counter;