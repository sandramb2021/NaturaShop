import React,{useContext}  from "react";
import cartImg from "../img/cart3.png";
import {cartContext} from "./cartContext";
import {  Link } from "react-router-dom";

function CartWidget ()  {

  const {cart} = useContext(cartContext);
      
  return (
    <div className="cart">
      <Link to="/cart">
        <img src={cartImg} alt="cart"/>
      </Link>
        {cart.length>=1 ? <label>{cart.length}</label>    : <label></label>
        }
      
    </div>
  );
}

export default CartWidget;
