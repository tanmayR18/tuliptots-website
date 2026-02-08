import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";

const NewDashboard = () => {
    const { isSignedIn } = useUser();

  const navigate = useNavigate();
    useEffect(() => {
      if (!isSignedIn) {
        navigate("/");
      }
    }, [isSignedIn, navigate]);

  return (
    <div className=" font-kgPrimaryPenmanship bg-[#fafafa] py-32 lg:py-44 min-h-screen justify-center items-center">
      <div className=" w-[90%] mx-auto">
        <div className=" border w-fit px-3 py-1 rounded-xl cursor-pointer" onClick={() => navigate(-1)}>
          <h1 className=" text-xl">Back</h1>
        </div>
      </div>

      <div className=" flex relative justify-center items-center mx-auto lg:w-10/12">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl">Admin Panel</h1>

        <div className=" absolute  top-1/2 -translate-y-1/2 right-0">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      <div className=" grid md:grid-cols-2 mx-auto max-w-2xl gap-20 mt-12 text-2xl tracking-wider">
        <Link
          className=" hover:bg-white rounded-2xl border flex justify-center items-center aspect-square"
          to={"/image-upload"}
        >
          <p>Upload Images</p>
        </Link>
        <Link
          className=" hover:bg-white rounded-2xl border flex justify-center items-center aspect-square"
          to={"/video-upload"}
        >
          <p>Upload Videos</p>
        </Link>
      </div>
    </div>
  );
};

export default NewDashboard;
