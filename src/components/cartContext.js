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

    const addItem = (item, quantity) => 
    
    {
        const aux = this.cart.find((x) => x.itemId === item.itemId);
     
        if (!aux) {
           const itemAddToCart = {
              item: item,
              quantity: quantity,
              itemId: item.itemId
           };
           
           setCart([ ...cart, itemAddToCart ]);
        }
    }
        //isInCart(item.id) ? setCart({...cart,quantity}) : setCart(cart.push({item},quantity,item.itemId))
    const removeItem = (itemId) => setCart(this.cart.filter(cart => cart.itemId !== itemId))
    
    const clear = () => setCart([])
    const isInCart = (itemId) => { 
     
        const existe= this.cart.find((cart) => cart.itemId === itemId)
        console.log("isInCart ")
        console.log(existe)
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