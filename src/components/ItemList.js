import React from "react";
import Item from "./Item";
import "./ItemList.css";


const ItemList = ({ items }) => {
    console.log("Items en IL", items);
    return (
       <div className="ItemList">
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              description={item.description}              
            />
          );
        })}
      </div>
    );
  };
  export default ItemList;

