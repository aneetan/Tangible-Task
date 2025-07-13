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
     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-800">
            Step {currentStep + 1} of {step.length}: {step[currentStep]}
          </h2>
          <span className="text-sm text-gray-500">
            {currentStep + 1}/{step.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${((currentStep + 1) / step.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {renderStep()}
        
        <div className="flex justify-between mt-6 pt-4 border-t border-gray-200">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={() => dispatch({ type: "PREV" })}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              ← Previous
            </button>
          )}
          
          <div className="flex-1"></div> {/* Spacer */}
          
          {currentStep < step.length - 1 ? (
            <button
              type="button"
              onClick={() => dispatch({ type: "NEXT" })}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Next →
            </button>
          ) : (
            <button
              type="submit"
              onClick={() => alert("Form submitted!")}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default MultiStepForm
