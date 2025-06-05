import Footer from "@/components/common/Footer";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import image from "../assets/joinOurTeam/joinOurTeam.jpg";

const JoinTeam = () => {
  const {
    register,
    handleSubmit,
    getValues,
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

  const onSubmit = (data) => {
    console.log(data);

    try {
      const response = axios.post("http://localhost:3000/joinTeam", data);
    } catch (error) {}
  };

  return (
    <div className=" bg-[#f3f3f3]">
      <div className=" flex justify-between items-center  pt-40 w-[80%] mx-auto">
        <div className=" w-[50%]">
          <h1 className=" text-4xl font-bold ">Join Our team</h1>

          <h4 className=" text-xl  mt-8">
            At TulipTots International School, we believe in nurturing not just
            young minds, but also the careers of passionate educators. Join a
            collaborative environment where your ideas matter and your
            growth is a priority.
          </h4>
        </div>
        <div className="">
          <img src={image} className=" w-[290px] h-[290px] rounded-full" />
        </div>
      </div>

      <div className=" w-10/12 mx-auto my-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name and age */}
          <div className=" flex gap-5">
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
              <p>Age</p>
              <input
                {...register("age", {
                  required: { value: true, message: "age is required" },
                  maxLength: {
                    value: 3,
                    message: "age shouldn't exceed 3 characters",
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
          <div className=" flex gap-5">
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
              <p>Education</p>
              <input
                {...register("education", {
                  required: { value: true, message: "edication is required" },
                  maxLength: {
                    value: 3,
                    message: "education shouldn't exceed 3 characters",
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

          {/* role and education */}
          <div className=" flex gap-5">
            <div className=" mt-3 w-full">
              <p>
                Email
                <span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("email", {
                  required: { value: true, message: "Emaul is required" },
                  minLength: {
                    value: 3,
                    message: "Email should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 60,
                    message: "Email shouldn't exceed 60 characters",
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
              <p>Contact Number</p>
              <input
                {...register("contactNumber", {
                  required: { value: true, message: "Number is required" },
                  maxLength: {
                    value: 3,
                    message: "Number shouldn't exceed 3 characters",
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

          <button
            className=" mt-5 bg-blue-500 px-3 py-2 rounded-lg text-white font-semibold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default JoinTeam;
