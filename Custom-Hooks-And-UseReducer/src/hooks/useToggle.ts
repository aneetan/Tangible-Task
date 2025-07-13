import { useCallback, useState } from "react";

function useToggle(initialState: boolean = false){
    const [isOpen, setIsOpen] = useState<boolean>(initialState);

    const setOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const setClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const toggle = useCallback(() => {
        setIsOpen(prevState => !prevState)
    }, []);

    return{
        isOpen,
        setOpen,
        setClose,
        toggle
    }
}

export default useToggle;