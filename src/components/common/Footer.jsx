import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";

const explore = [
  {
    name: "Gallery",
    navigate: "/gallery",
  },
  {
    name: "Blogs",
    navigate: "/blogs",
  },
  {
    name: "Careers",
    navigate: "/careers",
  },
  {
    name: "Our Story",
    navigate: "/story",
  },
  {
    name: "FAQ",
    navigate: "/faq",
  },
];

const impLinks = [
  {
    name: "Home",
    navigate: "/",
  },
  {
    name: "About Us",
    navigate: "/aboutUs",
  },
  {
    name: "School",
    navigate: "/school",
  },
  {
    name: "Admission",
    navigate: "/admission",
  },
  {
    name: "Contact Us",
    navigate: "/contactUs",
  },
  {
    name: "Enquiry",
    navigate: "/enquiry",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b font-kgPrimaryPenmanship text-xl tracking-wider from-[#333] to-[#222] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* School Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Tulip Tots International
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Punawale, Pune
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                tuliptotsinternational@gmail.com
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className=" flex space-x-2">
                  <p>7558300669</p>
                  <p>/</p>
                  <p>7558611669</p>
                </div>
              </p>
            </div>
            {/* Social Media */}
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/tuliptotsinternational/"
                target="_blank"
                rel="noopener noreferrer"
                className=" h-12 w-12 text-gray-200 flex justify-center items-center hover:text-black border border-gray-200 hover:bg-gray-200  rounded-full  "
              >
                <FaInstagram size={26} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.youtube.com/@tuliptotsinternational"
                target="_blank"
                rel="noopener noreferrer"
                className=" h-12 w-12 text-gray-200 flex justify-center items-center hover:text-black border border-gray-200 hover:bg-gray-200  rounded-full  "
              >
                <FiYoutube size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/profile.php?id=61577004178106&rdid=ldZ4ru8rKpLpv0zY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1P6xWooKrH%2F#"
                target="_blank"
                rel="noopener noreferrer"
                className=" h-12 w-12 text-gray-200 flex justify-center items-center hover:text-black border border-gray-200 hover:bg-gray-200  rounded-full  "
              >
                <FaFacebookSquare size={24} />
              </motion.a>
            </div>
          </div>

          <div className=" flex justify-between max-w-sm pr-6">
            {/* Important Links */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-gray-200">
                Important Links
              </h4>
              <ul className="space-y-3">
                {impLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.navigate.toLowerCase().replace(" ", "")}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-gray-200">Explore</h4>
              <ul className="space-y-3">
                {explore.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.navigate.toLowerCase().replace(" ", "")}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-gray-200">
              Our location
            </h4>

            <p className="text-gray-300">
              Shop No 1 & 2, Yash one infinite, Kate wasti, punawale, pune
              411033
            </p>
            <Link
              to={
                "https://www.google.com/maps/search/?api=1&query=18%C2%B037'14.1%22N+73%C2%B044'15.4%22E"
              }
              target="_blank"
            >
              <img
                className=" rounded-xl"
                src="https://www.independent-software.com/assets/gmap/gmap-tutorial-google-map-provider.jpg"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-center md:text-left">
              © {currentYear} Tulip Tots International. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              {/* <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
