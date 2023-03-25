import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import ResetPw from "./ResetPassword";

const Auth = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPw />} />
      </Routes>
    </div>
  );
};

export default Auth;
