import { useState } from "react"

const useInput = (initialValue : string) => {
    //current value of input and function to update that value
    const[value, setValue] = useState(initialValue);

    //function calls whenever the user types on the field
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    }

    return {value, onChange};
}

export default useInput;