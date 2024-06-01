import React, { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AppContext } from "../../AppContext/AppContext";

const Login = ({ onClose }) => {
  const [status, setStatus] = useState("Sign Up");
  const { setShowLogin, setIsLogin } = useContext(AppContext);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "Login") {
      try {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.email, // Assuming email is used as username
            password: formData.password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          toast.success("Login successful!", {
            style: {
              border: "2px solid #4CAF50",
              padding: "16px",
              color: "#4CAF50",
              background: "rgba(76, 175, 80, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              animation: "fadeInUp 0.3s, fadeOut 0.3s 2s forwards",
            },
            iconTheme: {
              primary: "#4CAF50",
              secondary: "#FFFFFF",
            },
          });
          setShowLogin(false);
          setIsLogin(true);

          setTimeout(() => {
            navigate("/");
          }, 500);
        } else {
          toast.error("Login failed. Please check your credentials.");
        }
      } catch (error) {
        console.error("Login error:", error);
        toast.error("Login failed. Please check your credentials.");
      }
    } else {
      // Handle Sign Up logic here
      console.log("Sign Up form data:", formData);
    }
  };

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

          <form onSubmit={handleSubmit}>
            {status === "Sign Up" && (
              <>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
                />

                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
                />
              </>
            )}

            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
            />

            <button
              type="submit"
              className="bg-black text-white py-1 w-24 mx-auto mt-5 rounded-3xl"
            >
              {status === "Sign Up" ? "Register" : "Login"}
            </button>
          </form>

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
      <Toaster />
    </div>
  );
};

export default Login;
