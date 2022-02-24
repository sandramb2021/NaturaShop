import React  from "react";
//import { cartContext } from "./cartContext";
import styles from  "./ItemCount.module.css";
import {  Link } from "react-router-dom";

function ItemCount({stock, initial,counter,onAdd,onIncrease,onDecrease}) {
   // const {cart, addToCart} = useContext(cartContext)
            
    return(
        <div className={styles.itemCountContainer}>
          <div className={styles.itemCountQuantity}>
          <div >
              Cantidad:   
              <button className={styles.itemCountButton} onClick={onDecrease} >-</button>
              <label className={styles.counter}> {counter}</label>
              <button  className={styles.itemCountButton} onClick={onIncrease} >+</button>           
          </div>
            <div className={styles.agregaCarritoContainer}>
            {console.log(!(stock >0))}
               <button id="agregarAlCarrito" onClick={() => onAdd(counter)} disabled={!(stock >0)}>Comprar</button>
               <Link to="/cart">
                    <button id="terminarCarrito" >Ir al carrito</button>
               </Link>
            
            </div>
            </div>
            <div className={styles.stock}>
              {stock >0 ? <label>Stock {stock}</label> :  <label>Sin Stock</label>}
            </div>
        </div>
    );
  }
  
export default ItemCount;