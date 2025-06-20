import React, { useState } from 'react'

interface FormProps {
    email: string;
    password: string;
}

const LoginForm = () => {
    const [formData, setFormData] = useState<FormProps>({
        email: '',
        password: ''
    })

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
    }


  return (
    <>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
        <div className="bg-purple-500 p-6 text-white">
          <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
          <p className="text-purple-100 text-center mt-2">Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent transition"
              placeholder="your@email.com"
              required
            />

            {isSubmitted? `Email: ${formData.email}` : ""}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent transition"
              placeholder="••••••••"
              required
            />
            {isSubmitted? `Password: ${formData.password}` : ""}
          </div>
          
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-purple-500 hover:text-purple-400">
              Forgot password?
            </a>
          </div>
          
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-400 focus:outline-none transition-all duration-200"
          >
            Sign In
          </button>
        </form>
        
        <div className="px-6 pb-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-purple-500 hover:text-purple-400">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginForm
