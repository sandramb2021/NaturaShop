import React  from "react";
import cart from "../img/cart3.png";

function CartWidget ()  {
  return (
    <div className="cart">
        <img src={cart} alt="cart"/><label>0</label>    
    </div>
  );
}

export default CartWidget;
