import React , {useContext,  useState} from "react";
import { cartContext } from "./cartContext";
import "./ItemCount.css";
import Cart from "./Cart"
import {  Link } from "react-router-dom";

function ItemCount({stock, initial,counter,onAdd,onIncrease,onDecrease}) {
    const {cart, addToCart} = useContext(cartContext)
    
    /*const [counter,setCounter]= useState(initial);
    
    const onIncrease =()=> {
        counter < stock ? setCounter(counter + 1) : setCounter(counter + 0)            
    }

    const onDecrease =()=> {
        counter > initial ? setCounter(counter - 1) : setCounter(initial)            
    }
        */
    
    return(
        <div className="itemCount-Container">
            <button className="itemCount-button" onClick={onDecrease} >-</button>
            <label > {counter}</label>
            <button  className="itemCount-button" onClick={onIncrease} >+</button>           
            
            <div className="agrega-carrito-Container">
               {/* <button id="agregarAlCarrito" onClick={() => addToCart(counter)}>Comprar</button>*/}
               <button id="agregarAlCarrito" onClick={onAdd(counter)}>Comprar</button>
               <Link to="/cart">
                    <button id="terminarCarrito" >Terminar mi compra</button>
               </Link>
            </div>
            <div className="stock">
                 <label>Stock {stock}</label>
            </div>
        </div>
    );
  }
  
export default ItemCount;