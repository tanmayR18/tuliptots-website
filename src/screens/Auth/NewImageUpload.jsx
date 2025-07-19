import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { useQueryClient } from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const NewImageUpload = () => {
  const ref = useRef(null);
  const { isSignedIn, user } = useUser();
  const verificationId = user?.emailAddresses?.[0]?.emailAddress;
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);

  const navigate = useNavigate();

  const handleUpload = async () => {
    const file = ref.current.files[0];
    if (!file) return;

    setUploading(true);
    toast.remove();
    toast.loading("Uploading Images...");
    try {
      const formData = new FormData();
      formData.append("file", file); // Key must match `upload.single("file")` on backend
      formData.append("email", verificationId);

      const response = await axios.post(
        `${BASE_URL}/upload/uploadImage`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response?.status === 200) {
        setImages((prev) => [...prev, response?.data?.data]);
        setPreviewUrl("");
        ref.current.value = "";
        toast.remove();
        toast.success("Image Uploaded");
      }

      return response.data;
    } catch {
      toast.remove();
      toast.error("Error Occured");
    } finally {
      setUploading(false);
    }
  };

  // Function to delete image
  const deleteImage = async (imageToDelete) => {
    toast.remove();
    toast.loading("Deleting Images...");
    try {
      const response = await axios.delete(`${BASE_URL}/upload/deleteImage`, {
        data: { id: imageToDelete?._id, email: verificationId }, // Send id in request body
      });

      if (response?.status === 200) {
        setImages((prev) =>
          prev.filter((item) => item?._id !== response?.data?.id)
        );
        toast.remove();
        toast.success("Image Deleted");
      }

      return response.data;
    } catch {
      toast.remove();
      toast.error("Error occured");
    }
  };

  const fetchGalleryImages = async () => {
    toast.remove();
    toast.loading("Loading Images...");
    try {
      const response = await axios.get(`${BASE_URL}/upload/getImage`);
      setImages(response?.data?.data);
    } catch {
      toast.remove();
      toast.error("Error Occured");
      return [];
    } finally {
      toast.remove();
    }
  };

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className=" py-44 bg-[#f7eee9]">
      <h2 className=" text-3xl font-semibold text-center">
        Upload Profile Image
      </h2>
      <div className=" border border-black flex flex-col gap-7 mt-12 mx-auto max-w-md p-4 md:p-7 rounded-2xl">
        {previewUrl ? (
          <div className=" w-full aspect-square relative">
            <button
              className=" absolute right-4 top-4 cursor-pointer p-2 rounded-full bg-white/80"
              onClick={() => setPreviewUrl("")}
            >
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
      <div className=" w-10/12 mx-auto grid grid-cols-3 gap-5 mt-32">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative "
            // onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-w-4 aspect-h-3 relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={image?.url}
                alt={"gallery image"}
                className="w-full h-full object-cover"
              />
              <div
                onClick={() => {
                  deleteImage(image);
                }}
                className=" absolute top-5 right-5 hover:bg-red-600 hover:text-white cursor-pointer transition-all  bg-white text-red-600 p-2 rounded-full"
              >
                <RiDeleteBin6Line size={20} />
              </div>
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-lg font-semibold">
                      {image.alt}
                    </p>
                    <p className="text-white/80 text-sm mt-1">
                      {image.category}
                    </p>
                  </div>
                </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewImageUpload;
