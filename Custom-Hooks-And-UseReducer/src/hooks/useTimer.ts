import { useEffect, useReducer, useRef } from "react";

type TimerState = {
    isPlaying: boolean;
    time: number;
}

export type Action = 
| {type: 'START'}
| {type: 'PAUSE'}
| {type: 'RESET'}
| {type: 'TICK'}

export const initialState: TimerState = {
  time: 0,
  isPlaying: false,
};

const timerReduce = (state: TimerState, action: Action) : TimerState => {
    switch(action.type){
        case 'START':
            return{
                ...state,
                isPlaying: true
            };
        case 'PAUSE':
            return{
                ...state,
                isPlaying: false
            };
        case 'RESET':
            return {
                isPlaying: false,
                time: 0
            };
        case 'TICK':
            return state.isPlaying? {
                ...state,
                time: state.time + 1
            }: state;
        default:
            return state;
    }
};


const useTimer = () => {
    const [state, dispatch] = useReducer(timerReduce, initialState);
    const intervalRef = useRef<number| null>(null);

    useEffect(() => {
        if(state.isPlaying && intervalRef.current === null){
            intervalRef.current = setInterval(()=>{
                dispatch({type: 'TICK'});
            }, 1000);
        }

        if(!state.isPlaying && intervalRef.current !== null){
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        return () => {
            if(intervalRef.current !== null){
                clearInterval(intervalRef.current);
            }
        }
    }, [state.isPlaying]);

    return {
    time: state.time,
    isPlaying: state.isPlaying,
    start: () => dispatch({ type: "START" }),
    pause: () => dispatch({ type: "PAUSE" }),
    reset: () => dispatch({ type: "RESET" }),
  };
}

export default useTimer;

