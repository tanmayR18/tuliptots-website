import { supabase } from "@/supabaseClient";
import { Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

function VideoUpload() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [videoFile, setVideoFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const uploadVideo = async () => {
    if (!videoFile) return alert("Please select a video file");

    setUploading(true);

    const fileExt = videoFile.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
      .from("video") // your bucket name
      .upload(filePath, videoFile, {
        contentType: videoFile.type,
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Upload error:", error.message);
      alert("Error uploading video");
    } else {
      fetchVideos();
    }

    setUploading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    setLoading(true);

    const { data, error } = await supabase.storage.from("video").list("", {
      limit: 100,
      offset: 0,
      sortBy: { column: "created_at", order: "desc" },
    });

    if (error) {
      console.error("Error listing videos:", error.message);
      setLoading(false);
      return;
    }

    const videosWithUrls = data.map((file) => ({
      name: file.name,
      url: supabase.storage.from("video").getPublicUrl(file.name).data
        .publicUrl,
    }));

    setVideos(videosWithUrls);
    setLoading(false);
  };

  const deleteVideo = async (fileName) => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${fileName}?`
    );
    if (!confirm) return;

    const { error } = await supabase.storage.from("video").remove([fileName]);

    if (error) {
      console.error("Error deleting video:", error.message);
      alert("Failed to delete video");
    } else {
      // Remove from UI
      //   setVideos((prev) => prev.filter((video) => video.name !== fileName));
      fetchVideos();
    }
  };

  return (
    <div className="p-6 py-44 bg-[#f7eee9]">
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={uploadVideo} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Video"}
      </button>

      {videoUrl && (
        <div>
          <p>Uploaded Video URL:</p>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            {videoUrl}
          </a>
        </div>
      )}

      <h2 className="text-4xl text-center font-bold mb-4">Uploaded Videos</h2>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : videos.length === 0 ? (
        <p className="text-gray-500">No videos found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {videos.map((video, index) => (
            <div
              key={index}
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
                onClick={() => deleteVideo(video.name)}
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

export default VideoUpload;
