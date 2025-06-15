import { UserAuth } from "@/context/AuthContext";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { RxCross2 } from "react-icons/rx";

const GalleryUpload = () => {
  const { checkIsAdmin, uploadImages } = UserAuth();
  const ref = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [imagePath, setImagePath] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const navigate = useNavigate();

  const handleUpload = async () => {
    const file = ref.current.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const isUpload = await uploadImages(file);
      if (isUpload) {
        toast.success("Image uploaded successfully!");
        setPreviewUrl("");
      }
    } catch (err) {
      console.error(err);
    }
    setUploading(false);
  };

  useEffect(() => {
    const checkFun = async () => {
      const isAdmin = await checkIsAdmin();
      if (!isAdmin) {
        navigate("/dashboard");
      }
    };

    checkFun();
  }, [checkIsAdmin]);

  return (
    <div className=" py-44 bg-[#f7eee9]">
      <h2 className=" text-3xl font-semibold text-center">
        Upload Profile Image
      </h2>
      <div className=" border border-black flex flex-col gap-7 mt-12 mx-auto max-w-md p-4 md:p-7 rounded-2xl">
        {previewUrl ? (
          <div className=" w-full aspect-square relative">
            <button className=" absolute right-4 top-4 cursor-pointer p-2 rounded-full bg-white/80" onClick={() => setPreviewUrl("")}>
              <RxCross2 />
            </button>
            <img className=" rounded-2xl" src={previewUrl} />
          </div>
        ) : (
          <button
            onClick={() => ref.current.click()}
            className="  cursor-pointer  flex justify-center items-center border border-black border-dashed p-4 rounded-2xl"
          >
            <p className=" text-lg font-semibold">Select image</p>
          </button>
        )}
        <button
          className="text-white self-end bg-blue-600 px-3 py-1.5 rounded-md cursor-pointer"
          disabled={!previewUrl || uploading}
          onClick={handleUpload}
        >
          <p>{uploading ? "uploading" : "upload"}</p>
        </button>
      </div>
      <input
        className=" hidden"
        type="file"
        ref={ref}
        accept="image/*"
        onChange={(event) => {
          const file = event.target.files[0];
          const url = URL.createObjectURL(file);
          setPreviewUrl(url);
        }}
        disabled={uploading}
      />
    </div>
  );
};

export default GalleryUpload;
