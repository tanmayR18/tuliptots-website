import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import image1 from "../assets/admissionForm.jpg";
import { useForm } from "react-hook-form";

const Admission = () => {
//   const [admissionData, setAdmissionData] = useState({});

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className=" relative h-[60vh] w-full flex flex-col justify-center items-center">
        <div className=" absolute top-0 bottom-0 left-0 right-0 ">
          <img
            className=" w-full h-full"
            src="https://www.humanium.org/en/wp-content/uploads/2020/02/pic5-830x554.jpg"
          />
        </div>
        <div className=" absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.75)]" />
        <div className=" absolute top-0 right-0 left-0 bottom-0">
          <Navbar />
        </div>
        <p className=" text-white font-semibold text-xl text-center lg:text-4xl z-10">
          Admissions
        </p>
        <p className=" text-white font-semibold text-base text-center lg:text-2xl z-10 mt-4 lg:mt-7 lg:w-[60%]">
          Admissions are open throughout the year for families who resonate with
          our joyful, child-led approach to early learning.
        </p>
      </div>
      <div className=" mt-10 w-[80%] mx-auto">
        <div className=" flex justify-center items-center gap-5">
          <div className=" w-1/2 flex flex-col  gap-4">
            <p className=" text-3xl font-semibold mb-7">Here's how to begin:</p>
            <p>
              ✻ Reach out to <strong>schedule a meeting</strong> with our team
            </p>
            <p>
              ✻ Explore our unique educational philosophy and thoughtfully
              designed curriculum
            </p>
            <p>
              ✻ Fill in the admission form if it feels like the right fit for
              your family
            </p>
            <p>✻ Join us for an interaction session</p>
            <p>✻ Receive an update on available spots and next steps</p>
          </div>
          <div className=" w-1/2">
            <img className=" w-full h-full" src={image1} />
          </div>
        </div>
        {/* <div className=" flex flex-row-reverse justify-center gap-5 items-center mt-12">
          <div className=" w-1/2 flex flex-col  gap-4">
            <p className=" text-3xl font-semibold mb-7">
              The Settling-In Process at Tulip Tots International
            </p>
            <p>
              We understand that a child's first school experience can feel
              overwhelming for both little ones and their parents. At Tulip
              Tots, we approach this delicate phase with deep sensitivity,
              patience, and trust-building at the heart of it all.
            </p>
            <p className=" -mt-5">Our <strong> settling-in program </strong> is thoughtfully designed to support emotional security through:</p>
            <p>
              ✻ Reach out to <strong>schedule a meeting</strong> with our team
            </p>
            <p>
              ✻  <strong>Gradual, child-led transitions</strong> that allow each child to settle at their own pace
            </p>
            <p>
              ✻ Fill in the admission form if it feels like the right fit for
              your family
            </p>
            <p>✻ Join us for an interaction session</p>
            <p>✻ Receive an update on available spots and next steps</p>
          </div>
          <div className=" w-1/2">
            <img className=" w-full h-full" src={image1} />
          </div>
        </div> */}
      </div>
      <p className=" text-3xl text-black font-bold text-center mt-12 ">FORM</p>

      {/* Child Details */}
      <div className=" w-[80%] mx-auto mt-5">
        <p className=" text-black text-xl font-semibold">Child Details</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("example")} />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Admission;
