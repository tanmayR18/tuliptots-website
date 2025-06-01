import { BrowserRouter, Route, RouterProvider, Routes } from "react-router";
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

function App() {
  const router = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
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
        path: '/faq',
        element: <Faq/>
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
  ];

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
          <Routes>
            {router.map((route) => (
              <Route path={route.path} element={route.element} />
            ))}
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
