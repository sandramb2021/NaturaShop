
import React ,{useContext} from "react";
import { cartContext } from "./cartContext";
import CartItem from "./CartItem";
import styles from  "./Cart.module.css";
import {Link} from "react-router-dom";


function Cart() {
    const {cart, endShopping, clear, precioTotal} = useContext(cartContext);
     

    return (
        <div className={styles.page}>
            <h2>Detalle de su compra</h2>
            {cart.length > 0 ?           
              (cart.map((producto) =>  {          
                        let {quantity,id,item} = producto;
                        return (
                          <div>
                          <ul>
                            <CartItem 
                              key={id}
                              id={id}
                              title={item.props.title}
                              image={item.props.image}
                              price={item.props.price}
                              quantity={quantity}
                            />
                          </ul>
                        </div> 
                       
                        );
                      })
                      
            )            
            
            : (<p>Su carro está vacío</p>)}
           
           {cart.length > 0 ?
                          (<div>
                            <div className={styles.importeTotal}>
                              Importe total de su compra: $ {precioTotal}
                            </div>
                            <div className={styles.buttonsContainer}>
                              <Link to={'/'}>
                                <button >Ir a la Tienda</button>
                              </Link>
                              <button onClick={clear}>Limpiar carrito</button>
                              
                              <button onClick={endShopping} >Terminar la compra</button>
                            </div>
                          </div>)
                          : <></>}
            
        </div>
    );
};

export default Cart;