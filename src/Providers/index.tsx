import React from "react";
import { AdvertiseProvider } from "./advertise";
import { UserProvider } from "./users";

const Providers = ({ children }: any) => {
  return (
    <>
      <UserProvider>
        <AdvertiseProvider>{children}</AdvertiseProvider>
      </UserProvider>
    </>
  );
};

export default Providers;
