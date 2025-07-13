import { useReducer } from 'react'
import reducer, { initialState, step } from '../hooks/reducer'
import UserInfo from '../components/UserInfo';
import AddressInfo from '../components/AddressInfo';
import ReviewFields from '../components/ReviewFields';

const MultiStepForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {currentStep, formData} = state;


    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <UserInfo formData={formData} dispatch={dispatch} />;
            case 1:
                return <AddressInfo formData={formData} dispatch={dispatch} />;
            case 2:
                return <ReviewFields formData={formData} />;
            default:
                return null;
        }
    }
  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Step {currentStep + 1}: {step[currentStep]}</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {renderStep()}
        <div style={{ marginTop: "20px" }}>
          {currentStep > 0 && (
            <button type="button" onClick={() => dispatch({ type: "PREV" })}>
              Previous
            </button>
          )}
          {currentStep < step.length - 1 ? (
            <button type="button" onClick={() => dispatch({ type: "NEXT" })}>
              Next
            </button>
          ) : (
            <button type="submit" onClick={() => alert("Form submitted!")}>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default MultiStepForm
