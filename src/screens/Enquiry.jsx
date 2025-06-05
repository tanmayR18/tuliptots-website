import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import emailjs from "@emailjs/browser";
import axios from "axios";

const Enquiry = () => {
  const date = new Date();
  const [status, setStatus] = useState("");
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

  const submitHandler = async (event) => {
    event.preventDefault();
    setError({
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

    const YOUR_SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID1;
    const YOUR_TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID1;
    const OPTIONS = {
      publicKey: import.meta.env.VITE_PUBLIC_KEY1,
    };

    console.log(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, OPTIONS);

    //validations

    if (data.name === "") {
      setError((prev) => {
        return {
          ...prev,
          name: "Enter the children name",
        };
      });
      return;
    }

    if (data.dob === "") {
      setError((prev) => {
        return {
          ...prev,
          dob: "Enter the Date of Birth",
        };
      });
      return;
    }

    if (data.parentName === "") {
      setError((prev) => {
        return {
          ...prev,
          parentName: "Enter the Parent's Name",
        };
      });
      return;
    }

    if (data.occupation === "") {
      setError((prev) => {
        return {
          ...prev,
          occupation: "Enter the Parent's occupation",
        };
      });
      return;
    }

    if (data.email === "") {
      setError((prev) => {
        return {
          ...prev,
          email: "Enter your email",
        };
      });
      return;
    }

    if (
      !/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(
        data.email
      )
    ) {
      setError((prev) => {
        return {
          ...prev,
          email: "Invalid email",
        };
      });
      return;
    }

    if (data.number.length !== 10) {
      setError((prev) => {
        return {
          ...prev,
          number: "Invalid Phone number",
        };
      });
      return;
    }

    if (data.address === "") {
      setError((prev) => {
        return {
          ...prev,
          address: "Enter your address",
        };
      });
      return;
    }

    try {
      console.log(data);

      const response = axios.post("http://localhost:3000/enquiry", {
        parentName: data.parentName,
        childName: data.name,
        dob: data.dob,
        occupation: data.occupation,
        email: data.email,
        number: data.number,
        address: data.address,
        program: data.program,
        message: data.message,
      });
    } catch (error) {
      //   const response = await emailjs.send(
      //     YOUR_SERVICE_ID,
      //     YOUR_TEMPLATE_ID,
      //     {
      //       parentName: data.parentName,
      //       childName: data.name,
      //       dob: data.dob,
      //       occupation: data.occupation,
      //       email: data.email,
      //       number: data.number,
      //       address: data.address,
      //       program: data.program,
      //       message: data.message,
      //     },
      //     OPTIONS
      //   );

      //   console.log("response of emailjs ", response);
      //   if (response?.status === 200) {
      //     setStatus("success");
      //   }
      // }
      console.log("error of email js ", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#F7EEE9]">
      <div className=" relative pt-44 pb-20  bg-[#F7EEE9]">
        {/* <div className=" absolute top-0 bottom-0 left-0 right-0 ">
          <img
            className=" w-full h-full"
            src="https://www.humanium.org/en/wp-content/uploads/2020/02/pic5-830x554.jpg"
          />
        </div>
        <div className=" absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.75)]" /> */}
        <p className="  font-semibold text-xl text-center lg:text-4xl lg:font-bold z-10 text-pink-500">
          Come Experience the Bloom
        </p>
        <p className=" text-green-500 font-semibold text-base text-center lg:text-2xl lg:font-bold z-10 mt-4 lg:mt-5">
          Let us show you around and answer your questions.
        </p>
      </div>
      <form className="  py-10 rounded-t-[64px] bg-white">
        <div className="w-[85%] mx-auto">
          <div className=" flex flex-col lg:flex-row gap-8  ">
            <div className=" w-full">
              <p className=" text-black font-semibold text-2xl">Details</p>

              <div className=" mt-6">
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
              <div className=" mt-3">
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
              <div className=" mt-3">
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
              <div className=" mt-3">
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

              <div className=" mt-6">
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
              <div className=" mt-3">
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
              <div className=" mt-3">
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
                  maxLength={400}
                  className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
                />
                {error.address && (
                  <p className=" text-red-500 text-sm">{error.address}</p>
                )}
              </div>
              <DropDown setData={setData} data={data} />
              <div className=" mt-3">
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
          {!status && (
            <div
              onClick={submitHandler}
              className=" mt-5 bg-blue-400 text-white py-2 px-4 rounded-lg cursor-pointer w-fit"
            >
              Send
            </div>
          )}

          {status === "success" && (
            <div className=" mt-10 flex flex-col items-center justify-center">
              <p className=" text-green-500 font-bold text-2xl">
                Thank You for Reaching Out!{" "}
              </p>
              <p className=" text-blue-500 text-center font-semibold w-1/2 mt-2">
                Your enquiry has been received. We can’t wait to welcome you
                into our Tulip Tots family, where little seeds grow into
                confident blooms!{" "}
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
        </div>
      </form>
      <Footer />
    </div>
  );
};

const DropDown = ({ setData, data }) => {
  return (
    <div className=" relative mt-3">
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
