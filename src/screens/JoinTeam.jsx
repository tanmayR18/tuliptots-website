import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import image from "../assets/joinOurTeam/joinOurTeam.jpg";
import hero1 from "../assets/joinOurTeam/joinHeroChild.png";

const JoinTeam = () => {
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      contactNumber: "",
      name: "",
      role: "",
      age: "",
      education: "",
    },
  });

  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    // console.log(data);

    setStatus("loading");
    const url = import.meta.env.VITE_BACKEND_URL;
    try {
      const response = await axios.post(`${url}/joinTeam`, data);
      if (response.status === 200) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
      setStatus("error");
    }
  };

  return (
    <div className=" bg-[#f3f3f3]">
      <div className=" flex justify-between items-center pt-32 lg:pt-40 px-4 md:px-0 md:w-[80%] mx-auto">
        <div className=" md:w-[50%]">
          <h1 className=" text-4xl font-bold ">Join Our team</h1>

          <h4 className=" text-xl mt-5 lg:mt-8">
            At TulipTots International School, we believe in nurturing not just
            young minds, but also the careers of passionate educators. Join a
            collaborative environment where your ideas matter and your growth is
            a priority.
          </h4>
        </div>
        <div className=" hidden md:flex">
          <img src={image} className=" w-[290px] h-[290px] rounded-full" />
        </div>
      </div>

      <div className=" w-[90%] md:w-10/12 mx-auto my-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name and age */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Full Name<span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                  minLength: {
                    value: 3,
                    message: "Name should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 60,
                    message: "Name shouldn't exceed 60 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.name && (
                <span className=" text-red-500 text-xs">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Age<span className=" text-red-500"> *</span>
              </p>
              <input
                maxLength={10}
                {...register("age", {
                  required: { value: true, message: "age is required" },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "only number allowed",
                  },
                  maxLength: {
                    value: 2,
                    message: "age shouldn't exceed 2 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.age && (
                <span className=" text-red-500 text-xs">
                  {errors.age.message}
                </span>
              )}
            </div>
          </div>

          {/* role and education */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Any Specific role you want to apply
                <span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("role", {
                  required: { value: true, message: "role is required" },
                  minLength: {
                    value: 3,
                    message: "role should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 60,
                    message: "role shouldn't exceed 60 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.role && (
                <span className=" text-red-500 text-xs">
                  {errors.role.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Education <span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("education", {
                  required: { value: true, message: "edication is required" },
                  maxLength: {
                    value: 40,
                    message: "education shouldn't exceed 40 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.education && (
                <span className=" text-red-500 text-xs">
                  {errors.education.message}
                </span>
              )}
            </div>
          </div>

          {/* email and number */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Email
                <span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
                    message: "invalid email address",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.email && (
                <span className=" text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Contact Number<span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("contactNumber", {
                  required: { value: true, message: "Number is required" },
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "invalid phonenumber",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.contactNumber && (
                <span className=" text-red-500 text-xs">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>
          </div>

          {(!status || status === "loading") && (
            <button
              disabled={status === "loading"}
              //   onClick={submitHandler}
              className=" mt-5 bg-blue-400 text-white py-2 px-4 rounded-lg cursor-pointer w-fit"
            >
              <p>{status === "loading" ? "Sending..." : "Send"}</p>
            </button>
          )}

          {status === "success" && (
            <div className=" mt-10 flex flex-col items-center justify-center">
              <p className=" text-green-500 font-bold text-2xl">
                Thank You for Showing Interest!
              </p>
              <p className=" text-blue-500 text-center font-semibold w-1/2 mt-2">
                We've received your application. We’re excited to connect with
                passionate individuals like you who want to grow with the Tulip
                Tots family. Stay tuned — your journey with us may be about to
                bloom!
              </p>
            </div>
          )}
          {status === "error" && (
            <div className=" mt-10 flex flex-col items-center justify-center">
              <p className=" text-red-500 font-bold text-2xl">
                Unable to send your enquiry at this point{" "}
              </p>
              <p className=" text-gray-500 text-center font-semibold w-1/2 mt-2">
                Sorry for the inconvenience, please contact as 1234567890 for
                the enquiry
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default JoinTeam;
