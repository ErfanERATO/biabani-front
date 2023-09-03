import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Routing = ({ routes = [], redirect }) => {
  return (
    <Routes>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        );
      })}
      {/* <Route path="*" element={<Navigate replace to={"/"} />} /> */}
    </Routes>
  );
};

export default Routing;
