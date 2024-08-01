import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetError, resetSignup, signUp } from "../../Reducers/SignUpSlice";

const SignUp = ({ onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const navigate = useNavigate();

  const { isLoading, error, signup } = useSelector((state) => state.registered);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d+$/.test(formData.mobile)) {
      toast.error(
        "Please enter a valid mobile number containing only digits.",
        {
          className:
            "w-full max-w-xs p-4 text-gray-800 bg-white rounded-lg backdrop-blur-xl shadow-md border border-red-500 hover:shadow-lg hover:border-red-700 transform transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:scale-110",
          iconTheme: { primary: "#FF0000", secondary: "#FFFFFF" },
        }
      );
      return;
    }
    dispatch(signUp(formData));
  };

  useEffect(() => {
    if (signup) {
      toast.success("Account created successfully!", {
        className:
          "w-full max-w-xs p-4 text-gray-800 bg-white rounded-lg backdrop-blur-xl shadow-md border border-green-500 hover:shadow-lg hover:border-green-700 transform transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:scale-110",
        iconTheme: {
          primary: "#4CAF50",
          secondary: "#FFFFFF",
        },
      });
      dispatch(resetSignup());
      setFormData({
        name: "",
        email: "",
        password: "",
        mobile: "",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }, [signup, setFormData]);

  useEffect(() => {
    if (error && error.msg) {
      toast.error(error.msg || "An error occurred", {
        className:
          "w-full max-w-xs p-4 text-gray-800 bg-white rounded-lg backdrop-blur-xl shadow-md border border-red-500 hover:shadow-lg hover:border-red-700 transform transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:scale-110",
        iconTheme: { primary: "#FF0000", secondary: "#FFFFFF" },
      });
      dispatch(resetError());
    }
  }, [error, dispatch]);

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
          <h1 className="text-center text-xl font-bold">Sign Up</h1>

          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
            />

            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
            />

            <input
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
            />

            <input
              required
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile"
              className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
            />

            <button
              type="submit"
              className={`py-1 w-24 mx-auto mt-5 rounded-3xl ${
                isLoading ? "bg-gray-500 text-gray-300" : "bg-black text-white"
              }`}
            >
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                </div>
              ) : (
                "Register"
              )}
            </button>
          </form>
          <h1 className="text-sm mt-3 px-2 font-semibold">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-blue-600 font-semibold">Click here</span>
            </Link>
          </h1>

          <Link to={"/"}>
            <div className="bg-gray-300 p-3 rounded-full w-10 mx-auto mt-5 ">
              <RxCross2 />
            </div>
          </Link>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUp;
