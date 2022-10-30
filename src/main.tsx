import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./style/globalStyle";
import { AdvertiseListProvider } from "./Providers/AdvertiseList.provider";
import Providers from "./Providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Providers>
        <App />
      </Providers>
    </ChakraProvider>
  </React.StrictMode>
);
