import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[99999] bg-black text-white">
      <div className="w-[1400px] mx-auto flex items-center justify-between py-4">
        <Logo />

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
