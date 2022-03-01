import React, { createContext, useState } from "react";
import { db } from "../firebase/firebase";
import { addDoc, getDocs,collection, getFirestore ,updateDoc,doc, setDoc,data} from "firebase/firestore";


const initialCart = [
    { 
        item: {},
        quantity:0, 
        itemId:0
    }];

const buyer = { name: "Sandra Baronetto", phone:"2515621155", email:"sbaronetto@gmail.com"};

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
              id: itemId,
           };
           
           let newCart = [...cart];
           newCart.push(itemAddToCart);
                    
           setCart(newCart); 
           PrecioPorCantidad = parseInt(item.props.price) * parseInt(quantity);
        } else
        {     
            let newCart = [...cart];
            let match =cart.find((item) => item.id === itemId);
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

        const deletedItem=cart.find((item) => item.id === itemId);
        
        let PrecioPorCantidad = 0;

        if ( all )
        {   setCart(cart.filter(cart => cart.id !== itemId))
            
            PrecioPorCantidad= parseInt(deletedItem.item.props.price) * parseInt(deletedItem.quantity);           
        }
        else
        {
            if (!(parseInt(deletedItem.quantity)>1) )
            {
                setCart(cart.filter(cart => cart.id !== itemId))
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
        console.log("cart", cart)
        console.log("itemId", itemId)
        
        return cart.some((x) => x.id === itemId)
    };

    const endShopping = () =>  { 
        //modelamos la orden
        const db=getFirestore();
        let orderDetails = [];
        
        
        cart.map((item) => {
            
            const newOrderDetail={
                itemId:item.id,
                quantity:item.quantity,
                price:item.item.props.price*item.quantity,
            };
            
            
            const createOrderDetail= async (newOrderDetail) => {
                try{
                    const DocRef=await addDoc(collection(db,'orderDetail'),newOrderDetail);
                    if (DocRef.id) {orderDetails.push(DocRef)};

                    //actualizo stock
                       const newProduct = {

                            categoria: item.item.props.categoria,
                            descripcion:item.item.props.descripcion,
                            image: item.item.props.image,
                            price: item.item.props.price,
                            stock: item.item.props.stock-item.quantity,
                            title: item.item.props.title,
                       }
                            
                        const updateProduct=async(newProduct) =>{
                            const updatedItem= await updateDoc(doc(db,'items', newOrderDetail.itemId), newProduct);
                        }
                        updateProduct(newProduct);
                }
                catch (e) {
                        console.error("Error adding orderDetail: ", e);
                }
            }
            
            createOrderDetail(newOrderDetail);

        });

        if (orderDetails) {
           
            const newOrder={ 
                name: buyer.name,
                phone: buyer.phone,
                email: buyer.email,
                fecha: Date.now(),
                orderDetailItems: orderDetails,
                total: precioTotal,
            };

            console.log("newOrder:", newOrder);
            
            const createOrder= async (newOrder) => {
                try{
                    const DocRef=await addDoc(collection(db,'orders'),newOrder);
                    
                    alert(`Tu orden se generó con nro. ` + DocRef.id );
                    
   
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            }
            createOrder(newOrder);        
        }

        setCart([]);        
        setPrecioTotal(0);      


        
    }

    return (
        <cartContext.Provider value={{cart,precioTotal,addItem, removeItem, clear, endShopping}}>
            {children}
        </cartContext.Provider>
    );
}