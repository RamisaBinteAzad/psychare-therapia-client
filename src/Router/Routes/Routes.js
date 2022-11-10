import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Blogs from "../../Pages/Blogs/Blogs";
// import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceReviewDetails from "../../Pages/ServiceReviewDetails/ServiceReviewDetails";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/services/:id",
        element: <ServiceReviewDetails></ServiceReviewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
export default router;
