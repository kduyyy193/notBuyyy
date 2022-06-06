import React from "react";

const SignUp = () => {
  return (
    <form
      action="#"
      className="flex items-center justify-center flex-col text-center h-full px-10"
    >
      <h1 className="font-extrabold text-3xl text-gray-700 mt-8 mb-6">
        Create Account
      </h1>
      <span className="text-gray-600">or use your email for registration</span>{" "}
      <br />
      <input
        className="w-full  p-2 bg-slate-200 outline-none rounded-md pl-6"
        type="text"
        placeholder="Name"
      />
      <input
        className="w-full mt-4 p-2 bg-slate-200 outline-none rounded-md pl-6"
        type="email"
        placeholder="Email"
      />
      <input
        className="w-full mt-4 p-2 bg-slate-200 outline-none rounded-md pl-6"
        type="password"
        placeholder="Password"
      />
      <button className="p-2 bg-red-500 text-teal-50 font-semibold mt-4 text-xl rounded-md hover:opacity-80">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
