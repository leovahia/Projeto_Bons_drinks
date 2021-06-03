import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="menuNav">
        <Link className="menuItem" to="/drinks/populares">
          Drinks
        </Link>
        <Link className="menuItem" to="/sobre">
          Quem somos
        </Link>
        <Link className="menuItemLogo" to="/">
          Bons Drinks
        </Link>
        <Link className="menuItem" to="/time">
          Equipe
        </Link>
        <Link className="menuItem" to="/contato">
          Contato
        </Link>
      </nav>
    </header>
  );
};

export default Header
