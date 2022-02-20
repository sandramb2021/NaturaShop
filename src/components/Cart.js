
import React ,{useContext} from "react";
import "../index.css";
import { cartContext } from "./cartContext";
import CartItem from "./CartItem";
import "./Cart.css";


function Cart() {
    const {cart, removeItem, clear, precioTotal} = useContext(cartContext);
        
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
                              <button onClick={clear}>Limpiar carrito</button>
                              
                              <button >Terminar la compra</button>
                            </div>
                          </div>)
                          : <></>}
            
        </div>
    );
};

export default Cart;