// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import MenuSection from "./components/MenuSection";
import BookingForm from "./components/BookingForm";

function App() {
  const banners = [
    {
      src: "/pizza1.jpg",
      caption: "Neapolitan Pizza",
      desc: "If you are looking for traditional Italian pizza, the Neapolitan is the best option!",
    },
    {
      src: "/pizza2.jpg",
      caption: "Delicious Mushroom Pizza",
      desc: "Taste the flavor explosion of freshly baked mushroom pizza.",
    },
    {
      src: "/pizza3.jpg",
      caption: "Hot & Fresh Hawaiian",
      desc: "A sweet and savory classic with pineapple and ham.",
    },
  ];

  return (
    <div>
      <Navbar />
      <HeroCarousel banners={banners} />
      <MenuSection />
      <BookingForm />
    </div>
  );
}

export default App;
