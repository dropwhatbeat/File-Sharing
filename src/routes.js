import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Typography from "views/Typography.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    component: Typography,
    layout: "/admin",
  },
];

export default dashboardRoutes;
