import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function NewVideoUpload() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isSignedIn, user } = useUser();
  const navigate = useNavigate();
  const verificationId = user?.emailAddresses?.[0]?.emailAddress;

  const [videoFile, setVideoFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  //   const [videoUrl, setVideoUrl] = useState("");
  const [videoURL, setVideoURL] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const tempUrl = URL.createObjectURL(file); // For preview
      setVideoURL(tempUrl);
      setVideoFile(file);
    }
  };

  const uploadVideo = async () => {
    if (!videoFile) return alert("Please select a video");

    setUploading(true);

    const formData = new FormData();
    formData.append("file", videoFile);
    formData.append("email", verificationId);

    try {
      const res = await axios.post(`${BASE_URL}/upload/uploadVideo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const newVideo = res.data?.data;

      if (res.status === 200) {
        console.log(newVideo);
        setVideos((prev) => [...prev, newVideo]);
        setVideoFile("");
        setVideoURL("");
      }
    } catch (err) {
      console.error("Error uploading video:", err);
      alert("Something went wrong");
    }

    setUploading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/");
    }
  }, [isSignedIn, navigate]);

  const fetchVideos = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`${BASE_URL}/upload/getVideo`);
      setVideos(response?.data?.data);
    } catch (error) {
      console.error("Error fetching images:", error.message);
      return [];
    }
    setLoading(false);
  };

  const deleteVideo = async (videoToDelete) => {
    const confirm = window.confirm(
      `Are you sure you want to delete this video?`
    );
    if (!confirm) return;

    try {
      const response = await axios.delete(`${BASE_URL}/upload/deleteVideo`, {
        data: { id: videoToDelete?._id, email: verificationId }, // Send id in request body
      });

      if (response?.status === 200) {
        setVideos((prev) =>
          prev.filter((item) => item?._id !== response?.data?.id)
        );
      }

      return response.data;
    } catch (error) {
      console.error(
        "Error deleting image:",
        error.response?.data || error.message
      );
      throw error;
    }
  };

  return (
    <div className="p-6 py-44 bg-[#f7eee9]">
      <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
        {/* Custom File Upload Button */}
        <label
          htmlFor="video-upload"
          className="cursor-pointer px-6 py-2 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
        >
          Choose Video
        </label>
        <input
          id="video-upload"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Video Preview */}
        {videoURL && (
          <video
            src={videoURL}
            controls
            className="rounded-xl border shadow-md max-h-64 w-full object-contain"
          />
        )}

        {/* Upload Button */}
        <button
          onClick={uploadVideo}
          disabled={uploading || !videoFile}
          className={`px-6 py-2 rounded-xl shadow-md transition w-full ${
            uploading || !videoFile
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {uploading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                ></path>
              </svg>
              Uploading...
            </span>
          ) : (
            "Upload Video"
          )}
        </button>
      </div>

      {/* {videoUrl && (
        <div>
          <p>Uploaded Video URL:</p>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            {videoUrl}
          </a>
        </div>
      )} */}

      <h2 className="text-4xl text-center font-bold mb-4 mt-16">
        Uploaded Videos
      </h2>

      {loading ? (
        <p className="text-gray-500 text-center text-3xl">Loading Videos...</p>
      ) : videos.length === 0 ? (
        <p className="text-gray-500">No videos found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {videos.map((video) => (
            <div
              key={video.name}
              className="relative bg-[#ccc] shadow-md rounded-xl p-4 flex flex-col justify-center items-center "
            >
              <video
                controls
                className=" rounded-xl mb-2 max-h-[50vh]"
                preload="metadata"
              >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <p className="text-sm text-gray-600 truncate">{video.name}</p>

              <button
                onClick={() => deleteVideo(video)}
                className="absolute top-5 right-5 bg-white hover:bg-red-600 text-red-600 hover:text-white cursor-pointer p-3 rounded-full transition"
                title="Delete Video"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NewVideoUpload;
