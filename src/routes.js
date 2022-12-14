import { lazy } from "react";

const routes = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("./pages/Home")),
  },
];

export default routes;
