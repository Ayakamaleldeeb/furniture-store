 import React from 'react'
 import { useForm } from "react-hook-form";
// import { useState } from "react";
// import useGlobalMutation from "@/helpers/useGlobalMutation";
import usePostLogin from '@/use-apis/usePostLogin';
import toast from 'react-hot-toast';
const LoginForm=()=> {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<{ email: string; password: string }>();
    //   const [errorMessage, setErrorMessage] = useState("");    
      const {mutate , data }=usePostLogin({
        onSuccess: (data) => {
            toast.success('Login success')
            localStorage.setItem('token', data.token);
            window.location.href = '/';
        },
        onError: (error) => {
   
        toast.error(error.message)
        //   setErrorMessage(error.message);
        },
      });
      const onSubmit = async (data:{email:string,password:string}) => {
        // console.log(data);
        mutate({      
            email: data.email,
            password: data.password,
        });
    };
    console.log(data);
   return (
    <>
    
    <div className="max-w-[400px] mx-auto mt-12 text-center">
      <h2>Login</h2>
      {/* {errorMessage && <p className="text-red-500">{errorMessage}</p>} */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            className={`w-full p-2 mb-4 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
            className={`w-full p-2 mb-4 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
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
    </>
   )
 }
 export default LoginForm