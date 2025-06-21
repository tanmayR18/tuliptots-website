import { BrowserRouter, Route, RouterProvider, Routes } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import Home from "./screens/Home";
import About from "./screens/About";
import Academics from "./screens/Academics";
import Admission from "./screens/Admission";
import Blogs from "./screens/Blogs";
import ContactUs from "./screens/ContactUs";
import Enquiry from "./screens/Enquiry";
import Gallery from "./screens/Gallery";
import Navbar from "./components/common/Navbar";
import Blog1 from "./screens/Blogs/Blog1";
import Blog2 from "./screens/Blogs/Blog2";
import Blog3 from "./screens/Blogs/Blog3";
import Blog4 from "./screens/Blogs/Blog4";
import Blog5 from "./screens/Blogs/Blog5";
import Blog6 from "./screens/Blogs/Blog6";
import Blog7 from "./screens/Blogs/Blog7";
import Blog8 from "./screens/Blogs/Blog8";
import Blog9 from "./screens/Blogs/Blog9";
import Blog10 from "./screens/Blogs/Blog10";
import Blog11 from "./screens/Blogs/Blog11";
import Blog12 from "./screens/Blogs/Blog12";
import ScrollToTop from "./components/common/ScrollToTop";
import Faq from "./screens/Faq";
import JoinTeam from "./screens/JoinTeam";
import AdmissionForm from "./screens/AdmissionForm";
import Health from "./screens/Health";
import Growth from "./screens/Growth";
import Library from "./screens/Library";
import Classroom from "./screens/Classroom";
import DayCare from "./screens/DayCare";
import Footer from "./components/common/Footer";
import AddmissionPdf from "./screens/AddmissionPdf";
import OurStory from "./screens/OurStory";
import Signin from "./screens/Auth/Signin";
import Signup from "./screens/Auth/Signup";
import Dashboard from "./screens/Auth/Dashboard";
import { AuthContextProvider } from "./context/AuthContext";
import PrivateRoute from "./components/common/PrivateRoute";
import GalleryUpload from "./screens/Auth/GalleryUpload";
import BlogUpload from "./screens/Auth/ImageUpload";
import VideoUpload from "./screens/Auth/VideoUpload";

function App() {
  const router = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/aboutUs",
      element: <About />,
    },
    {
      path: "/school",
      element: <Academics />,
    },
    {
      path: "/admission",
      element: <Admission />,
    },
    {
      path: "/admissionForm",
      element: <AdmissionForm />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/contactUs",
      element: <ContactUs />,
    },
    {
      path: "/enquiry",
      element: <Enquiry />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/careers",
      element: <JoinTeam />,
    },
    {
      path: "/faq",
      element: <Faq />,
    },
    {
      path: "/classroom",
      element: <Classroom />,
    },
    {
      path: "/library",
      element: <Library />,
    },
    {
      path: "/growth",
      element: <Growth />,
    },
    {
      path: "/health",
      element: <Health />,
    },
    {
      path: "/daycare",
      element: <DayCare />,
    },
    {
      path: "/admissionPdf",
      element: <AddmissionPdf />,
    },
    {
      path: "/blog1",
      element: <Blog1 />,
    },
    {
      path: "/blog2",
      element: <Blog2 />,
    },
    {
      path: "/blog3",
      element: <Blog3 />,
    },
    {
      path: "/blog4",
      element: <Blog4 />,
    },
    {
      path: "/blog5",
      element: <Blog5 />,
    },
    {
      path: "/blog6",
      element: <Blog6 />,
    },
    {
      path: "/blog7",
      element: <Blog7 />,
    },
    {
      path: "/blog8",
      element: <Blog8 />,
    },
    {
      path: "/blog9",
      element: <Blog9 />,
    },
    {
      path: "/blog10",
      element: <Blog10 />,
    },
    {
      path: "/blog11",
      element: <Blog11 />,
    },
    {
      path: "/blog12",
      element: <Blog12 />,
    },
    {
      path: "/story",
      element: <OurStory />,
    },
    {
      path: "/admin",
      element: <Signin />,
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
    },
    {
      path: "/galleryUpload",
      element: (
        <PrivateRoute>
          <GalleryUpload />
        </PrivateRoute>
      ),
    },
    {
      path: "/videoUpload",
      element: (
        <PrivateRoute>
          <VideoUpload />
        </PrivateRoute>
      ),
    },
    {
      path: "/blogUpload",
      element: (
        <PrivateRoute>
          <BlogUpload />
        </PrivateRoute>
      ),
    },
  ];

  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <ScrollToTop>
            <Routes>
              {router.map((route) => (
                <Route path={route.path} element={route.element} />
              ))}
            </Routes>
          </ScrollToTop>
          <Footer />
          <Toaster />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
