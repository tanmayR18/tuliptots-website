import { UserAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { signOut, session, checkIsAdmin } = UserAuth();
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  console.log(session);
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
    <div className=" py-44">
      <div className=" w-10/12 max-w-md mx-auto grid grid-cols-2 gap-10">
        <button
          disabled={!isUserAdmin}
          onClick={() => navigate("/galleryUpload")}
          className=" bg-amber-200 aspect-square flex justify-center items-center"
        >
          <p className=" font-semibold">Upload Gallery Images</p>
        </button>
        <button
          disabled={!isUserAdmin}
          onClick={() => navigate("/blogUpload")}
          className=" bg-green-200 aspect-square flex justify-center items-center"
        >
          <p className=" font-semibold">Upload blog</p>
        </button>
      </div>
      <button
        className=" text-white bg-blue-600 px-4 py-2 mt-20"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
