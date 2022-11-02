import { useState } from "react";
import { Header } from "./components/Header";
import Advertise from "./pages/Advertise";
import Routes from "./routes";

function App() {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

export default App;
