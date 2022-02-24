import React,{useContext}  from "react";
import cartImg from "../img/cart3.png";
import {cartContext} from "./cartContext";
import {  Link } from "react-router-dom";
import styles from "./CartWidget.module.css";

function CartWidget ()  {

  const {cart} = useContext(cartContext);
      
  return (
    <div className={styles.cart}>
      <Link to="/cart">
        <img src={cartImg} alt="cart"/>
      
        {cart.length>=1 ? <label>{cart.length}</label>    : <></>
        }
      </Link>
    </div>
  );
}

export default CartWidget;
