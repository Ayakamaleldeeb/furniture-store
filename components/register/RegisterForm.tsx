"use client";
// import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { useForm } from "react-hook-form";
// import { useState } from "react";
// import useGlobalMutation from "@/helpers/useGlobalMutation";
import toast from "react-hot-toast";
import Link from "next/link";
import usePostRegister from "@/use-apis/account/usePostRegister";
import Cookies from "js-cookie";
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{
    email: string;
    userName: string;
    password: string;
    confirmPassword: string;
    displayName: string;
    phoneNumber: string;
  }>();

  const { mutate } = usePostRegister({
    onSuccess: (data) => {
      // console.log("🚀 ~ LoginForm ~ data:", data);
      toast.success(`Welcome back ${data.displayName}`);
      // localStorage.setItem("token", data.token);
      Cookies.set("token", data.token, {
        // expires: data?.expires_in / 60 / 60 / 24,
      });
      Cookies.set("userName", data.displayName);

      window.location.href = "/";
    },
    onError: (error) => {
      toast.error(error.response.data.errors);
    },
  });

  const onSubmit = (formData: {
    email: string;
    userName: string;
    password: string;
    displayName: string;
    phoneNumber: string;
  }) => {
    mutate(formData);
  };

  const password = watch("password");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Link href="#" className="text-black">
          SIGN UP
        </Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Registration</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when  done.
          </DialogDescription> */}
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              {...register("userName", { required: "Username is required" })}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.userName && (
              <p className="text-red-500 text-sm">{errors.userName.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/,
                  message:
                    "Password must be 8-15 characters long, include at least one uppercase letter, one lowercase letter, and one number",
                },
              })}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Display Name</label>
            <input
              type="text"
              {...register("displayName", {
                required: "Display Name is required",
              })}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.displayName && (
              <p className="text-red-500 text-sm">
                {errors.displayName.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          {/* <div className="flex gap-4">
          <button
            type="submit"
            className="p-2.5 bg-blue-600 text-white border-none cursor-pointer"
          >
            Login
          </button>
        </div> */}
          <DialogFooter>
            <button
              type="submit"
              className="p-2.5 bg-black hover:bg-slate-700 text-white cursor-pointer  w-full rounded-lg"
            >
              Login
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default RegisterForm;
