import React from "react";
// import ReactApp from "remote1/ReactApp";
import Home from "../components/Home";
import Layout from "../components/Layout";
// import VueApp from "../components/VueApp";

interface Route {
  path: string;
  component: React.ReactNode;
  children?: Route[];
}

const routes: Route[] = [
  {
    path: "/",
    component: <Layout />,
    children: [
      {
        path: "/",
        component: <Home />,
      },
      // {
      //   path: "/remote1",
      //   component: <ReactApp />,
      // },
      // {
      //   path: "/remote2",
      //   component: <VueApp />,
      // },
    ],
  },
];

export default routes;
