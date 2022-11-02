import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./style/globalStyle";
import { AdvertiseListProvider } from "./Providers/AdvertiseList.provider";
import Providers from "./Providers";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
