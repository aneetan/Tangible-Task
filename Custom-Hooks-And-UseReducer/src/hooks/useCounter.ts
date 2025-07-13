import { useCallback, useState } from "react";

function useCounter(initialValue: number = 0){
    const [count, setCount] = useState<number>(initialValue);

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount(prevCount => prevCount - 1);
    },[]);

    const reset = () => {
        setCount(initialValue);
    }

    return{
        count,
        increment,
        decrement,
        reset
    }
}

export default useCounter;