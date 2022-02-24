import React ,{useContext} from "react";
import { cartContext } from "./cartContext";
import styles from "./CartItem.module.css"
import delImg from "../img/trash_64.png";


const CartItem = ({ id, title, price, image,quantity }) => {
    const {cart, addItem,removeItem} = useContext(cartContext);
    
    const newItem=cart.find(cart => cart.itemId === parseInt(id));
    
    return(
        <div className={styles.itemCart}>
            <li className={styles.itemCard}> 
               
                    <div>
                        <img className={styles.imgCart} alt={title} src={image}></img>
                    </div>
                    <div className={styles.prodCartDetail}>
                        <> {title} </><br />
                        <><button className={styles.itemCountButton} onClick={() => removeItem(id)} >-</button>
                            {quantity}
                            <button  className={styles.itemCountButton} onClick={() => addItem(newItem.item,1, id)} >+</button>   
                         x ${price} </>
                    </div>
                    
                    <div className={styles.subtotal}>= $ {(price * quantity).toFixed(2)}
                    </div>
                    <div>
                        <button onClick={() => removeItem(id, true)}><img className ={styles.delImg} src={delImg} alt="delete item"/></button>
                    </div>
             
            </li>
        </div>
    )
};

export default CartItem;