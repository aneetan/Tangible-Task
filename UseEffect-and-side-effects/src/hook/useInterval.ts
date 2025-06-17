import { useEffect, useRef } from "react"

export const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef<() => void>();

    //Save the latest callback
    useEffect(()=> {
        savedCallback.current = callback;
    }, [callback])

    //set up interval
    useEffect(() => {
        if (delay === null) return;

        //call latest callback 
        const tick = () => savedCallback.current();

        const id = setInterval(tick, delay);

        //clean up while unmounting
        return () => clearInterval(id) 
    }, [delay])
}