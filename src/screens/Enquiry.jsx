import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Enquiry = () => {
  const date = new Date();
  const [data, setData] = useState({
    name: "",
    dob: "",
    parentName: "",
    occupation: "",
    email: "",
    number: "",
    address: "",
    program: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    dob: "",
    parentName: "",
    occupation: "",
    email: "",
    number: "",
    address: "",
    program: "",
    message: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();

    if (data.name === "") {
      setError((prev) => {
        return {
          ...prev,
          name: "Enter the children name",
        };
      });
    }

    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
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
        <p className=" text-white font-semibold text-4xl z-10">
          Come Experience the Bloom
        </p>
        <p className=" text-white font-semibold text-2xl z-10 mt-7">
          Let us show you around and answer your questions.
        </p>
      </div>
      <form className=" w-[85%] mx-auto mb-10">
        <div className=" flex gap-8 mt-10 ">
          <div className=" w-full">
            <p className=" text-black font-semibold text-2xl">Details</p>

            <div>
              <p>Name of the Child</p>
              <input
                value={data.name}
                onChange={(e) => {
                  setData((prev) => {
                    return {
                      ...prev,
                      name: e.target.value,
                    };
                  });
                }}
                maxLength={60}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {error.name && (
                <p className=" text-red-500 text-sm">{error.name}</p>
              )}
            </div>
            <div>
              <p>Date of Birth</p>
              <input
                type="date"
                max={`${date.getFullYear()}-${(date.getMonth() + 1)
                  .toString()
                  .padStart(2, "0")}-${date.getDate()}`}
                // min={`${date.getFullYear() - 20}-${(date.getMonth() + 1)
                //   .toString()
                //   .padStart(2, "0")}-${date.getDate()}`}
                value={data.dob}
                onChange={(e) => {
                  setData((prev) => {
                    return {
                      ...prev,
                      dob: e.target.value,
                    };
                  });
                }}
                maxLength={60}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {error.dob && (
                <p className=" text-red-500 text-sm">{error.dob}</p>
              )}
            </div>
            <div>
              <p>Parents Name</p>
              <input
                value={data.parentName}
                onChange={(e) => {
                  setData((prev) => {
                    return {
                      ...prev,
                      parentName: e.target.value,
                    };
                  });
                }}
                maxLength={60}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {error.parentName && (
                <p className=" text-red-500 text-sm">{error.parentName}</p>
              )}
            </div>
            <div>
              <p>Occupation</p>
              <input
                value={data.occupation}
                onChange={(e) => {
                  setData((prev) => {
                    return {
                      ...prev,
                      occupation: e.target.value,
                    };
                  });
                }}
                maxLength={60}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {error.occupation && (
                <p className=" text-red-500 text-sm">{error.occupation}</p>
              )}
            </div>
          </div>
          <div className=" w-full">
            <p className=" text-black font-semibold text-2xl">
              Contact Details
            </p>

            <div>
              <p>Email</p>
              <input
                value={data.email}
                onChange={(e) => {
                  setData((prev) => {
                    return {
                      ...prev,
                      email: e.target.value,
                    };
                  });
                }}
                maxLength={60}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {error.email && (
                <p className=" text-red-500 text-sm">{error.email}</p>
              )}
            </div>
            <div>
              <p>Contact Number</p>
              <input
                maxLength={10}
                value={data.number}
                onChange={(e) => {
                  if (!/^\d*$/.test(e.target.value)) {
                    return;
                  }
                  setData((prev) => {
                    return {
                      ...prev,
                      number: e.target.value,
                    };
                  });
                }}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {error.number && (
                <p className=" text-red-500 text-sm">{error.number}</p>
              )}
            </div>
            <div>
              <p>Address</p>
              <input
                value={data.address}
                onChange={(e) => {
                  setData((prev) => {
                    return {
                      ...prev,
                      address: e.target.value,
                    };
                  });
                }}
                maxLength={60}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {error.address && (
                <p className=" text-red-500 text-sm">{error.address}</p>
              )}
            </div>
            <DropDown setData={setData} data={data} />
            <div>
              <p>Message / Questions</p>
              <textarea
                value={data.message}
                onChange={(e) => {
                  setData((prev) => {
                    return {
                      ...prev,
                      message: e.target.value,
                    };
                  });
                }}
                maxLength={300}
                className=" w-full glowing-border resize-none rounded-md focus:outline-blue-400 py-2 min-h-24 px-3 bg-blue-100"
              />
            </div>
          </div>
        </div>
        <div
          onClick={submitHandler}
          className=" mt-5 bg-blue-400 text-white py-2 px-4 rounded-lg cursor-pointer w-fit"
        >
          Send
        </div>
      </form>
      <Footer />
    </div>
  );
};

const DropDown = ({ setData, data }) => {
  return (
    <div className=" relative">
      <p>Select Program</p>
      <select
        className=" focus:outline-none w-full bg-blue-100 rounded-md py-2 px-3"
        name="program"
        id="program"
        value={data.program}
        onChange={(e) => {
          setData((prev) => {
            return {
              ...prev,
              program: e.target.value,
            };
          });
        }}
        maxLength={60}
      >
        <option value="Playgroup">Playgroup </option>
        <option value="Nursery">Nursery</option>
        <option value="LKG">LKG</option>
        <option value="UKG">UKG</option>
        <option value="Daycare">Daycare</option>
      </select>
    </div>
  );
};

export default Enquiry;
