import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HERO_POSTER } from "../utils/constants";
import { Provider } from "react-redux";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import Browse from "./Browse";
import appStore from "../utils/appStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default Body;
