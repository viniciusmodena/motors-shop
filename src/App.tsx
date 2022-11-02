import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Advertise from "./pages/Advertise";
import Routes from "./routes";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />

    </>
  );
}

export default App;
