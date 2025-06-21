import { UserAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { signOut, checkIsAdmin } = UserAuth();
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut();

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const checkFun = async () => {
      const isAdmin = await checkIsAdmin();
      console.log("isAdmin", isAdmin);
      setIsUserAdmin(isAdmin);
    };

    checkFun();
  }, [checkIsAdmin]);

  return (
    <div className=" py-44 bg-[#f7eee9]">
      <h1 className=" text-3xl font-semibold text-center">Dashboard</h1>
      <div className="w-10/12 max-w-md bg-white border shadow p-4 md:p-7 rounded-2xl flex flex-col gap-7 mx-auto mt-12">
        <div className=" grid grid-cols-2  gap-3 md:gap-10">
          <button
            disabled={!isUserAdmin}
            onClick={() => navigate("/galleryUpload")}
            className=" aspect-square rounded-2xl border border-black cursor-pointer p-4 flex justify-center items-center"
          >
            <p className=" font-semibold">Upload Image</p>
          </button>
          <button
            disabled={!isUserAdmin}
            onClick={() => navigate("/videoUpload")}
            className=" rounded-2xl border border-black cursor-pointer aspect-square flex justify-center items-center"
          >
            <p className=" font-semibold">Upload Video</p>
          </button>
        </div>
        <button
          className=" text-white self-end bg-blue-600 px-3 py-1.5 rounded-md cursor-pointer"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
