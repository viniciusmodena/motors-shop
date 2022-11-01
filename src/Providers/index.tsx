import React from "react";
import { UserProvider } from "./users";
import { AdvertiseProvider } from "./advertises";

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
