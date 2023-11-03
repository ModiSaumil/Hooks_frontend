import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const Learnhooks = () => {

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    let ref = useRef(null);

    function handleClick() {
        console.warn(ref.current)
        ref.current.focus();
    }

    useEffect(() => {
        console.log(count)
        console.log(message)
    }, [count,message])

    // Define a function to calculate an expensive value
    const calculateExpensiveValue = (count) => {
        console.log('Calculating expensive value...');
        return count * 2;
    };

    // Define a callback function using useCallback
    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const handleChangeMessage = useCallback((newMessage) => {
        setMessage(newMessage);
    }, []);

    // Use useMemo to memoize the result of the expensive calculation
    const memoizedValue = useMemo(() => calculateExpensiveValue(count), [count]);


    return (
        <>
            <input ref={ref}></input>
            <button onClick={handleClick}>
                Click me! (useReference) 
            </button>
            <div>
                <p>Count: number of time button clicked : {count}</p>
                <p>Expensive Value useMemo addition count + 1  : {memoizedValue} </p>
                {/* <button onClick={() => setCount(count + 1)}>Increment Count usememo</button> */}
                {/* <p>Count: {count}</p> */}
                <button onClick={handleIncrement}>Increment Count callback func called</button>
            </div>
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => handleChangeMessage(e.target.value)}
                />USecallback input value everytime use effect called
            </div>
        </>
    )
}

export default Learnhooks;