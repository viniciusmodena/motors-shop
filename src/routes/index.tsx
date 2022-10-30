import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Switch>
        {/* <Route index element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route> */}
      </Switch>
    </>
  );
};

export default Routes;
