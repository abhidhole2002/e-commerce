import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContext";
import { login, resetError } from "../../Reducers/authSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Login = ({ onClose }) => {
  const { setShowLogin, setIsLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { isLoading, error, isAuthenticate } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isAuthenticate) {
      toast.success("Login successful!", {
        className:
          "w-full max-w-xs p-4 text-gray-800 bg-white rounded-lg backdrop-blur-xl shadow-md border border-green-500 hover:shadow-lg hover:border-green-700 transform transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:scale-110",
        iconTheme: {
          primary: "#4CAF50",
          secondary: "#FFFFFF",
        },
      });
      setShowLogin(false);
      setIsLogin(true);
      setTimeout(() => {
        navigate("/");
      }, 800);
    }
  }, [isAuthenticate, navigate, setIsLogin, setShowLogin]);

  useEffect(() => {
    if (error) {
      const errorMessage =
        typeof error === "string"
          ? error
          : error.msg
          ? error.msg
          : "An error occurred";
      toast.error(errorMessage, {
        iconTheme: { primary: "#FF0000", secondary: "#FFFFFF" },
      });
    }

    dispatch(resetError());
  }, [error]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center ">
      <div
        className="bg-white p-5 rounded-lg shadow-lg w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col py-10 px-5 rounded-xl">
          <h1 className="text-center text-xl font-bold">Login</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="User Name"
              autoComplete="current password"
              className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              autoComplete="current password"
              className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
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
                "Login"
              )}
            </button>
          </form>
          <h1 className="text-sm mt-3 px-2 font-semibold">
            Don't have an account ?{" "}
            <Link to={"/signup"}>
              <span className="text-blue-600 font-semibold">Click here</span>
            </Link>
          </h1>
          <Link to={"/"}>
            {/* <div className="mx-auto mt-6 bg-gray-200 p-2 rounded-full cursor-pointer"> */}
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

export default Login;
