import { UserAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { session, signInUser } = UserAuth();
  const navigate = useNavigate();
  console.log(session);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInUser(email, password);

      if (result.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError("an error occurred");
      console.log(error);
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
        <h2 className=" font-bold pb-2">Sign up today!</h2>
        <p>
          Don't have an account? <Link to={"/signup"}>Sign up!</Link>
        </p>
        <div className=" flex flex-col py-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className=" p-3 mt-6"
            type="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className=" p-3 mt-6"
            type="password"
          />
        </div>
        <button type="submit" disabled={loading} className=" mt-6 w-full">
          Sign up
        </button>
        {error && <p className=" text-red-600 text-center pt-4">{error}</p>}
      </form>
    </div>
  );
};

export default Signin;
