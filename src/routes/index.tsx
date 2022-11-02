import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Header } from "../components/Header";
import ModalGallery from "../components/ModalGallery";
import Advertise from "../pages/Advertise";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="advertise" element={<Advertise />}>
          <Route
            path="/advertise/gallery/:image_id"
            element={<ModalGallery />}
          />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
