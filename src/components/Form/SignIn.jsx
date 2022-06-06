import React from "react";

const SignIn = () => {
  return (
    <form
      action="#"
      className="flex items-center justify-center flex-col text-center h-full px-10"
    >
      <h1 className="font-extrabold text-3xl text-gray-700 mt-8 mb-6">
        Sign in
      </h1>
      <span className="text-gray-600">or use your account</span>
      <input
        className="w-full mt-4   p-2 bg-slate-200 outline-none rounded-md pl-6"
        type="email"
        placeholder="Email"
      />
      <input
        className="w-full mt-4  p-2 bg-slate-200 outline-none rounded-md pl-6"
        type="password"
        placeholder="Password"
      />
      <a href="#" className="text-gray-600 my-4 hover:rotate-3">
        Forgot your password ??
      </a>
      <button className="p-2 bg-red-500 text-teal-50 font-semibold mt-4 text-xl rounded-md hover:opacity-80">
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
