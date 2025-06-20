import React from 'react';
import useFormField from '../hooks/useFormField';

const validateEmail = (email: string): string => {
  if (!email) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email format';
  return '';
};

const SignupForm = () => {
  const emailField = useFormField<string>({
    initialValue: '',
    validate: validateEmail,
  });
  
  const ageField = useFormField<number>({
    initialValue: 18,
    validate: (value: number) => value < 18 ? 'Must be at least 18' : '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-24 p-6 bg-white rounded-lg shadow-md ">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
            </label>
            <input
            id="email"
            type="email"
            value={emailField.value}
            onChange={emailField.onChange}
            onBlur={emailField.onBlur}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${
                emailField.error ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
            }`}
            />
            {emailField.error && (
            <p className="mt-1 text-sm text-red-600">{emailField.error}</p>
            )}
        </div>
        
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age
            </label>
            <input
            id="age"
            type="number"
            value={ageField.value}
            onChange={ageField.onChange}
            onBlur={ageField.onBlur}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${
                ageField.error ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
            }`}
            />
            {ageField.error && (
            <p className="mt-1 text-sm text-red-600">{ageField.error}</p>
            )}
        </div>
        
        <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Submit
        </button>
        </form>
  );
};

export default SignupForm;