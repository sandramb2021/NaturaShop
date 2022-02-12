import { render } from "@testing-library/react";
import React, { useContext } from "react";
import { Component } from "react";
import ItemCount  from "./ItemCount";
import "./ItemDetail.css";
import  {cartContext}  from "./cartContext";



export default class ItemDetail extends Component{
   constructor(props){
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
  
    
    onIncrease =()=> {
      
      this.state.counter < this.state.stock ? this.setState({counter:this.state.counter+1}) : this.setState({counter:this.state.counter+0})           
      console.log("counter mas ");
      console.log(this.state.counter);
      
    }

   onDecrease =()=> {
      this.state.counter > 1 ? this.setState({counter:this.state.counter-1}) : this.setState({counter:1})           
      console.log("counter menos");
      console.log(this.state.counter);
    }

   render()
   {            
        

         return (     
            <div className="product">
                  <h2 className="title">{this.state.title}</h2>         
                  <img className="image" alt={this.state.title} src={this.state.image}></img>
                  <p className="price">${this.state.price}</p>
                  <p className="description">{this.state.description}</p>
                  <ItemCount stock={this.state.stock} initial={1} counter={this.state.counter} onAdd={this.onAdd} onIncrease={this.onIncrease} onDecrease={this.onDecrease}/>                
       
            {/*<cartContext.Consumer>
               {value => { 
               
              
               }}
            </cartContext.Consumer>*/}
            </div>
         ) ;  
   }
};