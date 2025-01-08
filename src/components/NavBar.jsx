import React from "react";

const NavBar = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center w-full">
        <div className="flex gap-5 w-full border border-red-400 text-red-500">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
