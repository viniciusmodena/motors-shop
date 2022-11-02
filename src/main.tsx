import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./style/globalStyle";
import { AdvertiseListProvider } from "./Providers/AdvertiseList.provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { ProfilePage } from "./routes/Profile";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AdvertiseListProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<Home />} />
              <Route path="profile/:user_id" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AdvertiseListProvider>
  </React.StrictMode>
);
