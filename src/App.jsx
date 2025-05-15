import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import Home from "./screens/Home";
import About from "./screens/About";
import Academics from "./screens/Academics";
import Admission from "./screens/Admission";
import Blogs from "./screens/Blogs";
import ContactUs from "./screens/ContactUs";
import Enquiry from "./screens/Enquiry";
import Gallery from "./screens/Gallery";
import Navbar from "./components/common/Navbar";

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
      path: "/academics",
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
  ];

  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {router.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
