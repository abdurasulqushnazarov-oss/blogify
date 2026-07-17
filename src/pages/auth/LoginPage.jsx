import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

import { useRef, useState } from "react";
function LoginPage() {
  // let [form, setForm] = useState("");
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
    <div className=" w-full h-screen flex align-center">
      {/* CHAP TOMON: FORM */}
      <div className="w-1/2 flex flex-col justify-center px-20">
        <img
          className="max-w-25.25 mb-8.5"
          src="/logo.svg"
          alt="Blogify Logo"
        />
        <Link to="/" className="font-medium text-black mb-8">
          ← Back to Home
        </Link>

        <div className="max-w-md w-full border border-gray-100 p-8 rounded-2xl shadow-sm">
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-500 mb-6">
            Enter your credentials to access your account
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
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
            <span className="text-blue-600 cursor-pointer">Sign up</span>
          </p>
        </div>
      </div>

      {/* O'NG TOMON: RASM */}
      <div className="w-1/2 bg-gradient-to-br from-[#F1F1FE] to-[#F7F1FD] flex flex-col items-center justify-center p-10 ">
        <div>
          <img className="max-w-xl" src="/loginPage.svg" alt="" />
          {/* Bu yerga o'sha qulf rasmini qo'yasiz */}
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
