import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./style/globalStyle";
import { AdvertiseListProvider } from "./Providers/AdvertiseList.provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AdvertiseListProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </AdvertiseListProvider>
  </React.StrictMode>
);
