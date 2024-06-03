import React, { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContext";

const SignUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const { showLogin, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password,
          name: {
            firstname: formData.firstName,
            lastname: formData.lastName,
          },
          address: {
            city: "kilcoole",
            street: "7835 new road",
            number: 3,
            zipcode: "12926-3874",
            geolocation: {
              lat: "-37.3159",
              long: "81.1496",
            },
          },
          phone: "1-570-236-7033",
        }),
      });

      if (response.ok) {
        toast.success("Account created successfully!", {
          className:
            "w-full max-w-xs p-4 text-gray-800 bg-white rounded-lg backdrop-blur-xl shadow-md border border-green-500 hover:shadow-lg hover:border-green-700 transform transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:scale-110",
          iconTheme: {
            primary: "#4CAF50",
            secondary: "#FFFFFF",
          },
        });
        setFormData({
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        console.error("Failed to create account.");
      }
    } catch (error) {
      console.error("Error creating account:", error);
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
          <h1 className="text-center text-xl font-bold">Sign Up</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="focus:outline-none border border-gray-300 mt-5 py-2 px-4 rounded-2xl shadow-lg focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="User Name"
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
              Register
            </button>
          </form>
          <h1 className="text-sm mt-3 px-2 font-semibold">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-blue-600 font-semibold">Click here</span>
            </Link>
          </h1>
          <div
            className="mx-auto mt-6 bg-gray-200 p-2 rounded-full cursor-pointer"
            // onClick={onClose}
            onClick={() => {
              setShowLogin(!showLogin);
            }}
          >
            <RxCross2 />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUp;
