import Dashboard from "views/Dashboard.js";
import Courses from "views/Courses.js";
import Files from "views/Files.js";
import Submission from "views/Submission.js";
import ipfs_connect from "views/ipfs_connect";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/courses",
    name: "My Courses",
    component: Courses,
    layout: "/admin",
  },
  {
    path: "/files",
    name: "Files",
    component: Files,
    layout: "/admin",
  },
  {
    path: "/submission",
    name: "Submission",
    component: Submission,
    layout: "/admin",
  },
  {
    path: "/ipfs_connect",
    name: "ipfs_connect",
    component: ipfs_connect,
    layout: "/admin",
  },
];

export default dashboardRoutes;
