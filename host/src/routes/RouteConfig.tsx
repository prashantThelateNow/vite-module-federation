import { Routes, Route } from "react-router-dom";
import routes from "./Routes";
import React from "react";

const RouteConfig = () => (
  <>
    <Routes>
      {routes.map((route, index) => (
        <React.Fragment key={index}>
          {route.children ? (
            <Route key={index} path={route.path} element={route.component}>
              {route.children.map((childRoute, index) => (
                <Route
                  key={index}
                  path={childRoute.path}
                  element={childRoute.component}
                />
              ))}
            </Route>
          ) : (
            <Route key={index} path={route.path} element={route.component} />
          )}
        </React.Fragment>
      ))}
    </Routes>
  </>
);

export default RouteConfig;
