import { createContext, useState } from "react";

const initialCart = [];

export const cartContext = createContext(initialCart);

/*export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => setCart(cart.push({item}))
    const removeItem = (itemId) => setCart()
    const clear = () => setCart([])
    const isInCart = () => {}

    return <cartContext.Provider value={item}>{children}</cartContext.Provider>;
}*/