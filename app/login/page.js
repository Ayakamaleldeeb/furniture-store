// "use client"; 

// const LoginPage = () => {
//   return (
//     <div className="max-w-[400px] mx-auto mt-12 text-center">
//       <h2>Login</h2>
//       <form>
//         <div>
//           <input
//             placeholder="Enter your email"
//             required
//             className="w-full p-2 mb-4 border border-gray-300 rounded"
//           />
//         </div>
//         <div>
//           <input
//             placeholder="Enter your password"
//             required
//             className="w-full p-2 mb-4 border border-gray-300 rounded"
//           />
//         </div>
// <div className="flex gap-4">
//   <button
//     className="p-2.5 bg-blue-600 text-white border-none cursor-pointer"
//   >
//     Login
//   </button>
//   {/* <button
//     className="p-2.5 bg-blue-600 text-white border-none cursor-pointer"
//   >
//     Sign Up
//   </button> */}
// </div>

//       </form>
//     </div>
//   );
// };

// export default LoginPage;



"use client";

import { useForm } from 'react-hook-form';
import { useState } from 'react';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setErrorMessage('');

    const response = await fetch('../api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      localStorage.setItem('token', result.token); // Store token for future requests
      // Redirect to a protected page or dashboard
      window.location.href = '/dashboard'; // Change this to your desired route
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.message);
    }
  };

  return (
    <div className="max-w-[400px] mx-auto mt-12 text-center">
      <h2>Login</h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', { required: 'Email is required' })}
            className={`w-full p-2 mb-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: 'Password is required' })}
            className={`w-full p-2 mb-4 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="p-2.5 bg-blue-600 text-white border-none cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;