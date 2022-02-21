import React ,{useContext} from "react";
import "../index.css";
import { cartContext } from "./cartContext";
import "./CartItem.css"
import delImg from "../img/trash_64.png";


const CartItem = ({ id, title, price, image,quantity }) => {
    const {cart, addItem,removeItem, clear} = useContext(cartContext);
    const newCart=[...cart];
    const newItem=cart.find(cart => cart.itemId === parseInt(id));
    console.log("newItem:" ,newItem);

    return(
        <div className="itemCart">
            <li className="itemCard"> 
               
                    <div>
                        <img className="imgCart" alt={title} src={image}></img>
                    </div>
                    <div className="prodCartDetail">
                        <> {title} </><br />
                        <><button className="itemCount-button" onClick={() => removeItem(id)} >-</button>
                            {quantity}
                            <button  className="itemCount-button" onClick={() => addItem(newItem.item,1, id,true)} >+</button>   
                         x ${price} </>
                    </div>
                    
                    <div className="subtotal">= $ {(price * quantity).toFixed(2)}
                    </div>
                    <div>
                        <button onClick={() => removeItem(id, true)}><img className ="delImg" src={delImg} alt="delete item"/></button>
                    </div>
             
            </li>
        </div>
    )
};

export default CartItem;