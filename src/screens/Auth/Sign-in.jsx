import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const SignIn = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
        navigate("/admin-dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className=" py-32 lg:py-44 bg-[#fafafa] font-kgPrimaryPenmanship flex flex-col justify-center items-center tracking-wider min-h-screen">
      <h1 className=" text-3xl md:text-4xl lg:text-5xl text-center px-4">
        SignIn to upload media
      </h1>

      <p className=" text-2xl mt-12 text-center md:w-10/12 mx-auto max-w-2xl">
        The admin registeration will be done by the developer manually to prevent
        unauthorized / unnecessary sign ups. Before trying to sign in, contact the
        developemnt team to add your account. Peace✌🏼
      </p>

      <div className=" text-2xl tracking-widest cursor-pointer  bg-blue-400 flex w-fit px-6 font-semibold rounded-[32px] py-3 mx-auto mt-8">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        {/* <SignedIn>
          <UserButton />
        </SignedIn> */}
      </div>
    </div>
  );
};

export default SignIn;
