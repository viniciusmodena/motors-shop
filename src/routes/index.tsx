import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Header } from "../components/Header";
import ModalGallery from "../components/ModalGallery";
import Advertise from "../pages/Advertise";
import Home from "../pages/Home";
import { ProfilePage } from "../pages/Profile";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route index element={<Home />} />
        <Route path="profile/:user_id" element={<ProfilePage />} />
        <Route path="advertise/" element={<Advertise />}>
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
