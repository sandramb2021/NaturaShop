import { createContext, useState } from "react";

const initialCart = [
    { 
        item: {},
        quantity:0, 
        itemId:0
    }];

export const cartContext = createContext(initialCart);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity, itemId) =>  
    {
        const aux =isInCart(itemId);
        console.log("aux:", aux);
        const existeItem= cart.find((item) => item.itemId === parseInt(itemId))
        console.log("existeItem:", existeItem ? existeItem : null);
        console.log("existeItem:", existeItem ? existeItem.quantity : null);

        if (!aux) {
           const itemAddToCart = {
              item: item,
              quantity: quantity,
              itemId: parseInt(itemId),
           };
           
           setCart([ ...cart, itemAddToCart ]);
           
        } else
        {            
            setCart(cart.map((item) => item.itemId === parseInt(itemId) ?
           
             {...item, quantity: existeItem.quantity + parseInt(item.quantity)}
            
             : {...item}
            )
            );
            
        }

        console.log(cart);
    }
        //isInCart(item.id) ? setCart({...cart,quantity}) : setCart(cart.push({item},quantity,item.itemId))
    const removeItem = (itemId) => setCart(cart.filter(cart => cart.itemId !== parseInt(itemId)))
    
    const clear = () => setCart([])
    const isInCart = (itemId) => { 
     
        const existe= cart.find((x) => x.itemId === parseInt(itemId))
                
        return (
            existe ? true : false
        );
    };

    return (
        <cartContext.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </cartContext.Provider>
    );
}