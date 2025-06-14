import { UserAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const BlogUpload = () => {
  const { checkIsAdmin, uploadImages } = UserAuth();
  const [uploading, setUploading] = useState(false);
  const [imagePath, setImagePath] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      await uploadImages(file);
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
    <div className=" py-44">
      <h2>Upload Profile Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        disabled={uploading}
      />
      {uploading && <p>Uploading...</p>}
      {previewUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img
            src={previewUrl}
            alt="Profile"
            style={{ width: 150, borderRadius: 8 }}
          />
        </div>
      )}
    </div>
  );
};

export default BlogUpload;
