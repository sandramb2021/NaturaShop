
import React ,{useContext} from "react";
import "../index.css";
import  {cartContext}  from "./cartContext";


const Cart = () => {
    const {cart,removeItem} = useContext(cartContext);
    console.log("Carro:", cart)

    return (
        <div className="page">
            <h2>Carro de compras</h2>
            {/*cart.map((item) => {
          return (
            <div>
               <p> 
                   <label>Producto: {item.title}</label>
                   <label>Cantidad: {item.quantity}</label>
                   <label>Importe: {item.price * item.quantity}</label>
                </p>
                <button onClick={removeItem(item.itemId)}>Eliminar</button>
                     
            </div>
          );
        })*/}

        </div>
    );
};

export default Cart;