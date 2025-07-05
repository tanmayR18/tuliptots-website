import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/supabaseClient";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef({});

  const fetchGalleryImages = async () => {
    const { data, error } = await supabase.storage
      .from("gallery")
      .list("", { limit: 100 });

    if (error) {
      console.error("Error listing gallery files:", error);
      return [];
    }

    // Replace this with your actual Supabase project ID
    const projectID = import.meta.env.VITE_PROJECT_ID;
    const publicBaseUrl = `https://${projectID}.supabase.co/storage/v1/object/public/gallery`;

    const urls = data.map(
      (file) => `${publicBaseUrl}/${encodeURIComponent(file.name)}`
    );

    setImages(urls);
  };

  const fetchVideos = async () => {
    const { data, error } = await supabase.storage.from("video").list("", {
      limit: 100,
      offset: 0,
      sortBy: { column: "created_at", order: "desc" },
    });

    if (error) {
      console.error("Error listing videos:", error.message);
      return;
    }

    const videosWithUrls = data.map((file) => ({
      name: file.name,
      url: supabase.storage.from("video").getPublicUrl(file.name).data
        .publicUrl,
    }));

    setVideos(videosWithUrls);
  };

  useEffect(() => {
    fetchGalleryImages();
    fetchVideos();
  }, []);

  const handleSlideChange = (swiper) => {
    // Pause all videos
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.pause();
      }
    });

    // Play the current video
    const currentVideo = videoRefs.current[swiper.activeIndex];
    if (currentVideo) {
      currentVideo.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-20 font-kgPrimaryPenmanship pt-32 lg:pt-44 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[3px]  mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Tulip Tales
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl md:text-2xl tracking-wider text-gray-600  max-w-2xl mx-auto">
            A window into our world—where learning is led by wonder, guided with
            love, and captured in the quiet beauty of everyday moments
          </p>
        </motion.div>

        {/* Video Carousel Section */}
        {videos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="relative w-10/12 mx-auto aspect-video">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                allowTouchMove={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                onSlideChange={handleSlideChange}
                className="video-swiper"
                style={{
                  "--swiper-navigation-color": "#8b5cf6",
                  "--swiper-pagination-color": "#8b5cf6",
                }}
              >
                {videos.map((video, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative group h-[600px] flex items-center justify-center">
                      <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900 w-full h-full flex justify-center items-center">
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          className="max-w-full max-h-full object-contain"
                          controls
                          controlsList="nodownload"
                          disablePictureInPicture
                          onLoadedMetadata={() => {
                            if (index === 0) {
                              videoRefs.current[index]
                                ?.play()
                                .catch((error) => {
                                  console.log("Autoplay prevented:", error);
                                });
                            }
                          }}
                        >
                          <source src={video.url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                        {/* <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {video.name.replace(/\.[^/.]+$/, "")}
                        </h3> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev !hidden -translate-y-1/2 !w-12 !h-12 !bg-white/80 !rounded-full !shadow-lg hover:!bg-white transition-all duration-300 after:!text-lg after:!text-purple-600" />
              <div className="swiper-button-next !hidden -translate-y-1/2 !w-12 !h-12 !bg-white/80 !rounded-full !shadow-lg hover:!bg-white transition-all duration-300 after:!text-lg after:!text-purple-600" />
            </div>
          </motion.div>
        )}

        {/* Images Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, translateY: 0, scale: 1 }}
              whileInView={{
                opacity: 1,
                translateY: 0,
                scale: 1,
                transition: { duration: 0.8, delay: 0.3 },
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={"gallery image"}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-[1000] flex items-center justify-center p-4"
            onClick={() => setSelectedImage("")}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt={"selected image"}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage("")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        )}
      </div>

      <style jsx>{`
        .video-swiper {
          padding-bottom: 60px;
        }
        .video-swiper .swiper-pagination {
          bottom: 0;
        }
        .video-swiper .swiper-pagination-bullet {
          background: #8b5cf6;
          opacity: 0.5;
        }
        .video-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
