import { createContext, useState } from "react";

const initialCart = [
    { 
        item: {},
        quantity:0, 
        itemId:0
    }];

export const cartContext = createContext(initialCart);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [precioTotal, setPrecioTotal] = useState (0);
   

    const addItem = (item, quantity, itemId) =>  
    {
               
        if (!isInCart(itemId)) {
           const itemAddToCart = {
              item: item,
              quantity: quantity,
              itemId: parseInt(itemId),
           };
           
           setCart([ ...cart, itemAddToCart ]);
           
        } else
        {     
            let newCart = [...cart];
            let match =cart.find((item) => item.itemId === parseInt(itemId));
            let idx = newCart.indexOf(match);
 
            (newCart[idx].quantity+ parseInt(quantity))>parseInt(newCart[idx].item.props.stock)
            ?  newCart[idx].quantity= parseInt(newCart[idx].item.props.stock)
            : newCart[idx].quantity= newCart[idx].quantity + parseInt(quantity);
        
            setCart(newCart);

        }
        
        const PrecioPorCantidad = parseInt(item.props.price) * parseInt(quantity);
        setPrecioTotal(precioTotal + PrecioPorCantidad);
        
    }
        
    const removeItem = (itemId) => {
        const deletedItem=cart.find((item) => item.itemId === parseInt(itemId));
        setCart(cart.filter(cart => cart.itemId !== parseInt(itemId)))
        setPrecioTotal(precioTotal - deletedItem.item.props.price);
    }
    
    const clear = () =>  { 
        setCart([]);        
        setPrecioTotal(0);
    }

    const isInCart = (itemId) => { 
        return cart.some((x) => x.itemId === parseInt(itemId))
    };

    return (
        <cartContext.Provider value={{cart,precioTotal,addItem, removeItem, clear}}>
            {children}
        </cartContext.Provider>
    );
}