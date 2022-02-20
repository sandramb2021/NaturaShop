import React ,{useContext} from "react";
import "../index.css";
import { cartContext } from "./cartContext";
import "./CartItem.css"
import delImg from "../img/trash_64.png";


const CartItem = ({ id, title, price, image,quantity }) => {
    const {cart, removeItem, clear} = useContext(cartContext);
    
    return(
        <div className="itemCart">
            <li className="itemCard"> 
               
                    <div>
                        <img className="imgCart" alt={title} src={image}></img>
                    </div>
                    <div className="prodCartDetail">
                        <> {title} - {quantity} x ${price} </>
                    </div>
                    
                    <div className="subtotal">= $ {(price * quantity).toFixed(2)}
                    </div>
                    <div>
                        <button onClick={() => removeItem(id)}><img className ="delImg" src={delImg} alt="delete item"/></button>
                    </div>
             
            </li>
        </div>
    )
};

export default CartItem;