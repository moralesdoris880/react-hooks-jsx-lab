import React from "react";
import Home from "./Home";
import About from "./About";

function NavBar() {
  // update the JSX being returned!
  return (
  <nav>
    <a href="#home">Home{Home}</a>
    <a href="about">About{About}</a>
  </nav>
    )
}

export default NavBar;
