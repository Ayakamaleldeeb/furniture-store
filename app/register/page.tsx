"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import usePostRegister from '@/use-apis/usePostRegister';
import toast from 'react-hot-toast';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ email: string; userName: string; password: string; confirmPassword: string; displayName: string; phoneNumber: string }>();

  const { mutate, data } = usePostRegister({
    onSuccess: (data) => {
      toast.success('Login success')
      localStorage.setItem('token', data.token);
      window.location.href = '/';
    },
    onError: (error) => {
      toast.error(error.response.data.errors)
    },
  });

  const onSubmit = (formData: { email: string; userName: string; password: string; displayName: string; phoneNumber: string }) => {
    mutate(formData);
  };

  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" {...register('email', { required: 'Email is required' })} className="w-full px-3 py-2 border rounded" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Username</label>
        <input type="text" {...register('userName', { required: 'Username is required' })} className="w-full px-3 py-2 border rounded" />
        {errors.userName && <p className="text-red-500 text-sm">{errors.userName.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input type="password" {...register('password', { 
          required: 'Password is required',
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/,
            message: 'Password must be 8-15 characters long, include at least one uppercase letter, one lowercase letter, and one number'
          }
        })} className="w-full px-3 py-2 border rounded" />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Confirm Password</label>
        <input type="password" {...register('confirmPassword', { 
          required: 'Confirm Password is required',
          validate: value => value === password || 'Passwords do not match'
        })} className="w-full px-3 py-2 border rounded" />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Display Name</label>
        <input type="text" {...register('displayName', { required: 'Display Name is required' })} className="w-full px-3 py-2 border rounded" />
        {errors.displayName && <p className="text-red-500 text-sm">{errors.displayName.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input type="tel" {...register('phoneNumber', { required: 'Phone Number is required' })} className="w-full px-3 py-2 border rounded" />
        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">Submit</button>
    </form>
  );
};

export default RegisterForm;