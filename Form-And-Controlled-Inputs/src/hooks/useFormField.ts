import { useState } from 'react';

type FormFieldProps<T> = {
    initialValue ?: T;
    validate ?: (value: T) => string;
};

type FormFieldReturn<T> = {
    value: T;
    touched: boolean;
    error: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    reset: () => void;
}

const useFormField =  <T extends string | number | boolean | readonly string[]>({
    initialValue = '' as T,
    validate = () => '',
}: FormFieldProps<T> = {}): FormFieldReturn<T> => {
    const [value, setValue] = useState<T>(initialValue);
    const [touched, setTouched] = useState(false);

    const error = touched ? validate(value) : '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const newValue = e.target.value as T;
        setValue(newValue);
    };

    const handleBlur = () => {
        setTouched(true);
    };

     const reset = () => {
        setValue(initialValue);
        setTouched(false);
    };

     return {
        value,
        touched,
        error,
        onChange: handleChange,
        onBlur: handleBlur,
        reset,
    };
}

export default useFormField;
     