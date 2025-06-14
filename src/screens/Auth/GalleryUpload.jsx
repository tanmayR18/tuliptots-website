import { UserAuth } from "@/context/AuthContext";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const GalleryUpload = () => {
  const { checkIsAdmin } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkFun = async () => {
      const isAdmin = await checkIsAdmin();
      if (!isAdmin) {
        navigate("/dashboard");
      }
    };

    checkFun();
  }, [checkIsAdmin]);

  return <div className=" py-44">GalleryUpload</div>;
};

export default GalleryUpload;
