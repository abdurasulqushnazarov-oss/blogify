import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

import { useRef, useState } from "react";

function LoginPage() {
  let emailRef = useRef();
  let passwordRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    let formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(formData);
  }

  return (
    // 'flex-col' (mobil) -> 'lg:flex-row' (katta ekran va planshet)
    <div className="w-full min-h-screen flex flex-col lg:flex-row">
      {/* CHAP TOMON: FORM */}
      {/* 'w-full' (mobil) -> 'lg:w-1/2' (katta ekran) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-20 py-10">
        <img
          className="max-w-[100px] mb-8"
          src="/logo.svg"
          alt="Blogify Logo"
        />
        <Link to="/" className="font-medium text-black mb-8">
          ← Back to Home
        </Link>

        {/* 'mx-auto' mobil uchun markazlash */}
        <div className="max-w-md w-full border border-gray-100 p-8 rounded-2xl shadow-sm mx-auto lg:mx-0">
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-500 mb-6">
            Enter your credentials to access your account
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                ref={emailRef}
                type="email"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                ref={passwordRef}
                type="password"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:blue-500 outline-none"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
              Login
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <span className="text-blue-900 font-medium cursor-pointer">
              Sign up
            </span>
          </p>
        </div>
      </div>

      {/* O'NG TOMON: RASM */}
      {/* 'hidden lg:flex' - faqat katta ekranlarda ko'rinadi */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#F1F1FE] to-[#F7F1FD] flex-col items-center justify-center p-10 ">
        <div>
          <img className="max-w-xl" src="/loginPage.svg" alt="" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Start Your Journey</h2>
        <p className="text-gray-500 ">
          Join thousands of creators sharing their stories on Blogify
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
