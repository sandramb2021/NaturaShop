//import { render } from "@testing-library/react";
import React, { useContext, useState } from "react";
//import { Component } from "react";
import ItemCount  from "./ItemCount";
import styles from "./ItemDetail.module.css";
import  {cartContext}  from "./cartContext";



const ItemDetail = (props) => {  

   const [counter, setCounter] = useState(1);
   const {addItem} = useContext(cartContext);
console.log("props",props);
      const onAdd = (quantityToAdd) => {
                 
         /*const subirAlCarro = {
                  item: {props},
                  quantity: quantityToAdd,
                  itemId: props.itemId,
         }*/
         
         addItem({props},quantityToAdd,props.itemId)
         
         
      } ;

     const onIncrease =() => {
      
         counter < props.stock ? setCounter(counter + 1) : setCounter(counter + 0)         
        
         
       };
   
      const onDecrease = () => {
         counter > 1 ? setCounter(counter - 1) : setCounter(1)            
         
       };

         return (     
            <div className={styles.product}>
                  <div className={styles.imgDetails}>
                     <img className={styles.image} alt={props.title} src={props.image}></img>
                  </div>
                  <div className={styles.productDetails}>
                     <div>
                        <h2 className={styles.title}>{props.title}</h2>         
                        <p className={styles.description}>{props.descripcion}</p>
                     </div>
                     <div>
                        <p className={styles.price}>${props.price}</p>
                        <ItemCount stock={props.stock} initial={1} counter={counter} onAdd={onAdd} onIncrease={onIncrease} onDecrease={onDecrease}/>                
                     </div>
                  </div>
            </div>
         ) ;  
};

export default ItemDetail;
