import React  from "react";
import logo from "../img/logo.jpg"
import CartWidget from "./CartWidget"
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar ()  {
  return (
    <div className="headerContainer">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo"/>
        </Link>
       </div>
      <div className="navbar">
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to="category/perfumeria">Perfumeria</Link></li>
          <li><Link to="category/cabello">Cabello</Link></li>
          <li><Link to="category/cosmeticos">Cosmeticos</Link></li>
          <li><Link to="contacto">Contacto</Link></li> 
        </ul>
      </div>
      <CartWidget/>
    </div>
  );
}

export default NavBar;
