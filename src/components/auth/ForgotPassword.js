import React, { useState } from "react";
import Input from "../shared/Input";
import Section from "./Section";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleClick = async () => {
    const data = await axios.post(
      "https://topjob-api.onrender.com/api/v1/auth/forgot-password",
      {
        email,
      }
    );
    if (data.data.status === "success") {
      alert("Succsess");
    } else if (data.data.status === "fail") {
      alert("CUONG MAID");
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Section>
      <div>
        <h1 className="text-2xl font-bold my-5 text-white">Forget Password</h1>
        <div className="pt-1">
          <Input
            onChange={handleChangeEmail}
            type="Email"
            placeholder="EnterEmail"
          />
        </div>
        <Button onClick={handleClick}>Comfirm</Button>
      </div>
    </Section>
  );
};

export default ForgotPassword;
