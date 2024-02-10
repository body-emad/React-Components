import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const increament = () => {
        // setCount(count + 1)
        // updater functions is better practice
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    const decreament = () => {
        // setCount(count - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)

    }
    const reset = () => {
        setCount(0)

    }
    return (
        <div className="counter-container">
            <h1 className="counter-displayer">{count}</h1>
            <button className="increament" onClick={increament}>Increament</button>
            <button className="reset" onClick={reset}>Reset</button>
            <button className="decreament" onClick={decreament}>Decreament</button>
        </div>
    );
}
export default Counter;