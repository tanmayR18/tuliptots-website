import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

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
    <div>
      <h1 className=" text-3xl font-black text-center pt-40">Join Our team</h1>

      <h3 className=" text-center font-semibold mt-12">
        Currently there are no vacancies in the schools{" "}
      </h3>


      <h4 className=" text-xl text-center mt-12">
        Send us your information and we will let you know about opening suitable for you
      </h4>

      <div className=" w-10/12 mx-auto mt-4">
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
            className=" mt-5 bg-blue-500 text-white font-semibold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinTeam;
