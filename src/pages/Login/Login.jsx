import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Login = ({ onClose }) => {
  const [status, setStatus] = useState("Sign Up");

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-5 rounded-lg shadow-lg w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col py-10 px-5 rounded-xl">
          <h1 className="text-center text-xl font-bold">{status}</h1>

          {status === "Sign Up" && (
            <>
              <input
                type="text"
                placeholder="Name"
                className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
              />

              <input
                type="text"
                placeholder="Mobile Number"
                className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
              />
            </>
          )}

          <input
            type="text"
            placeholder="Email"
            className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
          />
          <input
            type="password"
            placeholder="Password"
            className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
          />

          <button className="bg-black text-white py-1 w-24 mx-auto mt-5 rounded-3xl">
            {status === "Sign Up" ? "Register" : "Login"}
          </button>

          <div className="text-center mt-4">
            {status === "Sign Up" ? (
              <>
                Already have an account?{" "}
                <span
                  className="cursor-pointer text-blue-500"
                  onClick={() => setStatus("Login")}
                >
                  Login
                </span>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <span
                  className="cursor-pointer text-blue-500"
                  onClick={() => setStatus("Sign Up")}
                >
                  Sign Up
                </span>
              </>
            )}
          </div>

          <div
            className="mx-auto mt-6 bg-gray-200 p-2 rounded-full cursor-pointer"
            onClick={onClose}
          >
            <RxCross2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
