import React, { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setIsLogin, setLogout } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="absolute top-24 right-4  w-60 h-80 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-between z-50">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4 shadow-md"
        />
        <h1 className="text-xl font-semibold text-gray-800">User Name</h1>
        <p className="text-sm text-gray-500">user@example.com</p>
      </div>
      <button
        onClick={() => {
          setIsLogin(false);
          setLogout(false);
          navigate("/");
          window.location.reload();
        }}
        className="mt-4 px-6 py-1 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
