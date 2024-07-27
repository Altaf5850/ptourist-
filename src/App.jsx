import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import NavBar from "./componets/NavBar";
import Footer from "./componets/Footer";
import Destinations from "./pages/destinations";
import Contact from "./pages/Contact";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <div className="font-merienda">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
