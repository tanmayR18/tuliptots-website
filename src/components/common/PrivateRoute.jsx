import { UserAuth } from "@/context/AuthContext";
import React from "react";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { session } = UserAuth();
  const navigate = useNavigate();
  if (session) {
    return children;
  } else {
    navigate("/");
    return;
  }
};

export default PrivateRoute;
