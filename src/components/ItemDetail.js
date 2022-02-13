import { render } from "@testing-library/react";
import React, { useContext, useState } from "react";
import { Component } from "react";
import ItemCount  from "./ItemCount";
import "./ItemDetail.css";
import  {cartContext}  from "./cartContext";
import ItemDetailContainer from "./ItemDetailContainer";


const ItemDetail = (props) => {  

   const [counter, setCounter] = useState(1);
   const {cart,addItem,removeItem} = useContext(cartContext);
   /*constructor(props){
      super(props);
      this.state={
         counter:1,
         title: props.title, 
         price: props.price, 
         image: props.image, 
         description: props.description, 
         stock: props.stock,
         itemId: props.itemId,
      };

      this.onAdd=this.onAdd.bind(this);
   }
   
   onAdd(quantityToAdd){
      //const {addItem,removeItem} = useContext(cartContext);
      console.log("cantidad: ");

            console.log(quantityToAdd);
            console.log ("id :");
            console.log(this.state.itemId);
            
            
      //this.setState({counter:this.state.counter+1});
      console.log("estoy agregando al carro ");
      console.log(this);
      
   } ;
  
   render()
   {            
        */
      const onAdd = (quantityToAdd) => {
         //const {addItem,removeItem} = useContext(cartContext);
         console.log("cantidad: ", quantityToAdd);
         console.log ("id :", props.itemId);
         console.log(props);
           
         const subirAlCarro = {
                  item: {props},
                  quantity: quantityToAdd,
                  itemId: props.itemId,
         }
         console.log(subirAlCarro);

         addItem({props},quantityToAdd,props.itemId)
         //this.setState({counter:this.state.counter+1});
         console.log("estoy agregando al carro ");
         //console.log(this);
         
      } ;

     const onIncrease =() => {
      
         counter < props.stock ? setCounter(counter + 1) : setCounter(counter + 0)         
         console.log("counter mas ");
         console.log({counter});
         
       };
   
      const onDecrease = () => {
         counter > 1 ? setCounter(counter - 1) : setCounter(1)            
         console.log("counter menos");
         console.log(counter);
       };

         return (     
            <div className="product">
                  <h2 className="title">{props.title}</h2>         
                  <img className="image" alt={props.title} src={props.image}></img>
                  <p className="price">${props.price}</p>
                  <p className="description">{props.description}</p>
                  <ItemCount stock={props.stock} initial={1} counter={counter} onAdd={onAdd} onIncrease={onIncrease} onDecrease={onDecrease}/>                
       
            {/*<cartContext.Consumer>
               {value => { 
               
              
               }}
            </cartContext.Consumer>*/}
            </div>
         ) ;  
  {/*} }*/}
};

export default ItemDetail;
