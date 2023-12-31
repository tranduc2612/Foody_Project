import {
  DefaultLayout,
  LayoutWithOutSidebar,
  LayoutForm,
} from "~/layouts/Index";
import Home from "~/pages/home/Index";
import Login from "~/pages/login/Index";
import Profile from "~/pages/profile/Index";
import Register from "~/pages/register/Index";

const publicRouter = [
  {
    path: "/",
    page: Home,
    layout: DefaultLayout,
  },
  {
    path: "/login",
    page: Login,
    layout: LayoutForm,
  },
  {
    path: "/register",
    page: Register,
    layout: LayoutForm,
  },
  {
    path: "/about-us",
    page: Login,
    layout: DefaultLayout,
  },
];

const privateRouter = [
  {
    path: "/profile",
    page: Profile,
    layout: DefaultLayout,
  },
];

export { privateRouter, publicRouter };
