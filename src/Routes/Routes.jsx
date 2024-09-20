import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:"about",
        element:<About />
      }
    ],
  },
]);