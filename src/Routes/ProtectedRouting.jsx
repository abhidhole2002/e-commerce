import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRouting = (props) => {
  const { component: Component } = props;
  const isAuthenticate = useSelector((state) => state.auth.isAuthenticate);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticate) {
      navigate("/login");
    }
  }, [isAuthenticate, navigate]);

  return <div>{isAuthenticate && <Component />}</div>;
};

export default ProtectedRouting;
