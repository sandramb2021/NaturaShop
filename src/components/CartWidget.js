import React,{useContext}  from "react";
import cartImg from "../img/cart3.png";
import {cartContext} from "./cartContext";

function CartWidget ()  {

  const {cart} = useContext(cartContext);
      
  return (
    <div className="cart">
        <img src={cartImg} alt="cart"/><label>{cart.length}</label>    
    </div>
  );
}

export default CartWidget;
