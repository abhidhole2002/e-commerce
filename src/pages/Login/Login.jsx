import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Login = () => {
  const [status, setStatus] = useState("Sign Up");

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form action="">
        <div className="flex flex-col bg-gray-300 py-10 px-5 rounded-xl w-80">
          <h1 className="text-center text-xl font-bold">{status}</h1>

          {status === "Login" ? (
            <></>
          ) : (
            <>
              <input
                type="text"
                placeholder="Name"
                className="focus:outline-none border border-gray-600 mt-5 py-2 px-10 rounded-2xl"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="focus:outline-none border border-gray-600 mt-5 py-2 px-10 rounded-2xl"
              />
            </>
          )}

          <input
            type="text"
            placeholder="Email"
            className="focus:outline-none border border-gray-600 mt-5 py-2 px-10 rounded-2xl"
          />
          <input
            type="text"
            placeholder="Password"
            className="focus:outline-none border border-gray-600 mt-5 py-2 px-10 rounded-2xl"
          />

          <button className="bg-black text-white py-1 w-24 mx-auto mt-5 rounded-3xl">
            {status === "Sign Up" ? "Register" : "Login"}
          </button>

          {status === "Sign Up" ? (
            <div className="text-center mt-4">
              Already have an account?{" "}
              <span
                className="cursor-pointer text-blue-500"
                onClick={() => setStatus("Login")}
              >
                Login
              </span>
            </div>
          ) : (
            <div className="text-center mt-4">
              Don't have an account?{" "}
              <span
                className="cursor-pointer text-blue-500"
                onClick={() => setStatus("Sign Up")}
              >
                Click here
              </span>
            </div>
          )}

          <div
            className="mx-auto mt-6 bg-white p-2 rounded-full cursor-pointer "
            onClick={() => setStatus()}
          >
            <RxCross2 className="text-center " />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
