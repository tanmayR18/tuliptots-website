import { UserAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [show, setShow] = useState(false);

  const { session, signInUser } = UserAuth();
  const navigate = useNavigate();
  console.log(session);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (email.length === 0) {
      setError("Enter your email");
      return;
    }

    if (password.length < 6) {
      setError("Password should be atleast 6 characters");
      return;
    }

    if (
      !/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(
        email
      )
    ) {
      setError("Enter a valid email");
      return;
    }

    setLoading(true);
    try {
      const result = await signInUser(email, password);

      if (result.success) {
        setError("");
        navigate("/dashboard");
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError("an error occurred");
      console.log("logged here", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" py-44 bg-[#f7eee9]">
      <form
        onSubmit={handleSignUp}
        className=" max-w-md m-auto  p-6 rounded-3xl bg-white"
      >
        <h2 className=" font-bold text-xl pb-2 text-center">Sign in</h2>
        {/* <p>
          Don't have an account? <Link to={"/signup"}>Sign up!</Link>
        </p> */}
        <div className=" flex flex-col py-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className=" p-3 mt-6 border rounded-lg"
            type="text"
          />
          <div className=" relative w-full mt-6 ">
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className=" p-3 border rounded-lg w-full"
              type={show ? "text" : "password"}
            />
            <div
              className=" cursor-pointer absolute top-1/2 -translate-y-1/2 right-5  p-2"
              onClick={() => setShow((prev) => !prev)}
            >
              {!show ? <FiEye size={18} /> : <FiEyeOff size={18} />}
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className=" mt-6 w-full font-semibold tracking-wide py-2 rounded-lg cursor-pointer transition-all duration-300 text-blue-400 hover:text-white hover:bg-blue-400 border border-blue-400 "
        >
          Submit
        </button>
        {error && <p className=" text-red-600 text-center pt-4">{error}</p>}
      </form>
    </div>
  );
};

export default Signin;
