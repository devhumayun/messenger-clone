import Forgot from "../pages/auth/Forgot";
import Home from "../pages/auth/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// create public router
const publicRouter = [
  {
    path: "/auth",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
];

// export router
export default publicRouter;
