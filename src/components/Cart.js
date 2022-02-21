
import React ,{useContext} from "react";
import "../index.css";
import { cartContext } from "./cartContext";
import CartItem from "./CartItem";
import "./Cart.css";
import {Link} from "react-router-dom";


function Cart() {
    const {cart, endShopping, clear, precioTotal} = useContext(cartContext);
        
    return (
        <div className="page">
            <h2>Detalle de su compra</h2>
            {cart.length > 0 ?           
              (cart.map((producto) =>  {          
                        let {quantity,itemId,item} = producto;
                        return (
                          <div>
                          <ul>
                            <CartItem 
                              key={itemId}
                              id={itemId}
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
                            <div className="importeTotal">
                              Importe total de su compra: $ {precioTotal}
                            </div>
                            <div>
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