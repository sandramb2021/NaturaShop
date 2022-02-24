import React from "react";
import Item from "./Item";
import styles from  "./ItemList.module.css";


const ItemList = ({ items }) => {
    console.log("Items en IL", items);
    return (
       <div className={styles.ItemList}>
        {items.length ? (
        items.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              descripcion={item.descripcion}              
            />
          );
        }))
      :
      ( <p>No se encontraron productos</p>)}
      </div>
    );
  };
  export default ItemList;

