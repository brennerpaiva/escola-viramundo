import React from "react";
import Logo from "../../assets/unnamed-removebg-preview.png";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#">
          <img src={Logo}></img>
        </a>
      </div>
      <div>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
    </header>
  );
}
