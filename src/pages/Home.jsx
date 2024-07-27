import React from "react";
import Hero from "../componets/Hero";
import Cart from "../componets/Cart";
import Massion from "../componets/Massion";
import Tcart from "../componets/Tcart";
import Team from "../componets/Team";
import AppStore from "../componets/AppStore";
import Customer from "../componets/Customer";
function Home() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <Hero />
      <Cart />
      <Tcart />
      <Massion />
      <Customer />
      <AppStore />
      <Team />
    </div>
  );
}

export default Home;
