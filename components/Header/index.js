import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";

export default function Header() {
  return (
    <header className="header bg-navy">
      <Navbar />
      <Hero />
    </header>
  );
}
