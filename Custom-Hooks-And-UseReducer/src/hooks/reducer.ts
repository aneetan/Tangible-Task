export const Steps = {
    USER_INFO: "user_info",
    ADDRESS: "address",
    REVIEW: "review"
} as const;

export interface FormDataProps {
    name: string;
    email: string;
    address: string;
    city: string;
}

export interface State{
    currentStep: number,
    formData: FormDataProps;
}

export type Action = 
    | {type: 'NEXT'}
    | {type: 'PREV'}
    | {type: 'UPDATE_FIELD'; field: keyof FormDataProps; value: string}
    | {type: 'RESET'};

 export const initialState: State = {
    currentStep: 0,
    formData: {
        name: '',
        email: '',
        address: '',
        city: ''
    }
}

export const step = Object.values(Steps);

function reducer(state: State, action: Action){
    switch(action.type) {
        case "NEXT":
            return{
                ...state,
                currentStep: Math.min(state.currentStep + 1, step.length - 1)
            };
        case "PREV":
            return {
                ...state,
                currentStep: Math.max(state.currentStep - 1, 0),
            };
        case "UPDATE_FIELD":
            return{
                ...state,
                formData: {
                    ...state.formData,
                    [action.field] : action.value,
                },
            };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

export default reducer