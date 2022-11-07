import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { AdvertiseModal } from "../components/AdvertiseModal";
import ModalGallery from "../components/ModalGallery";
import Advertise from "../pages/Advertise";
import Home from "../pages/Home";
import { ProfilePage } from "../pages/Profile";
import { Profile } from "../pages/Profile/profile";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />}>
          <Route path=":user_id" element={<ProfilePage />}>
            {/* <Route path="new" element={<AdvertiseModal />} /> */}
          </Route>
        </Route>
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
