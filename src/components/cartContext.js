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
        let PrecioPorCantidad = 0; 
                       
        if (!isInCart(itemId)) {
           const itemAddToCart = {
              item: item,
              quantity: quantity,
              itemId: parseInt(itemId),
           };
           
           setCart([ ...cart, itemAddToCart ]);
           PrecioPorCantidad = parseInt(item.props.price) * parseInt(quantity);
        } else
        {     
            let newCart = [...cart];
            let match =cart.find((item) => item.itemId === parseInt(itemId));
            let idx = newCart.indexOf(match);
 
            const qtyAnterior = parseInt(newCart[idx].quantity);

            (newCart[idx].quantity+ parseInt(quantity))>parseInt(newCart[idx].item.props.stock)
            ?  newCart[idx].quantity= parseInt(newCart[idx].item.props.stock)
            : newCart[idx].quantity= newCart[idx].quantity + parseInt(quantity);
        
            setCart(newCart);
            PrecioPorCantidad = parseInt(item.props.price) * (parseInt(newCart[idx].quantity) - qtyAnterior);
        }
        
        
        setPrecioTotal(precioTotal + PrecioPorCantidad);
        
    }
        
    const removeItem = (itemId, all = false) => {

        const deletedItem=cart.find((item) => item.itemId === parseInt(itemId));
        console.log("veamos:", deletedItem);
        let PrecioPorCantidad = 0;

        if ( all )
        {   setCart(cart.filter(cart => cart.itemId !== parseInt(itemId)))
            
            PrecioPorCantidad= parseInt(deletedItem.item.props.price) * parseInt(deletedItem.quantity);           
        }
        else
        {
            if (!(parseInt(deletedItem.quantity)>1) )
            {
                setCart(cart.filter(cart => cart.itemId !== parseInt(itemId)))
                PrecioPorCantidad=  parseInt(deletedItem.item.props.price) * parseInt(deletedItem.quantity);  
            }
            else
            {
                let newCart = [...cart];         
                let idx = newCart.indexOf(deletedItem);
                newCart[idx].quantity= newCart[idx].quantity - 1;        
                setCart(newCart);
                PrecioPorCantidad= parseInt(newCart[idx].item.props.price);
            }
        }
        setPrecioTotal(precioTotal -  PrecioPorCantidad);
        
    }
    
    const clear = () =>  { 
        setCart([]);        
        setPrecioTotal(0);
    }

    const isInCart = (itemId) => { 
        return cart.some((x) => x.itemId === parseInt(itemId))
    };

    const endShopping = () =>  { 
        setCart([]);        
        setPrecioTotal(0);      
        alert("Gracias por tu compra! Te esperamos pronto.")
    }

    return (
        <cartContext.Provider value={{cart,precioTotal,addItem, removeItem, clear, endShopping}}>
            {children}
        </cartContext.Provider>
    );
}