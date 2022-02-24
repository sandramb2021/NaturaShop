import React, { useState , useEffect}  from "react";
import styles from "./ItemListContainer.module.css";
import ItemList from "./ItemList";
import {  useParams } from 'react-router-dom'



const ItemListContainer = () => {  
  const [items, setItems] = useState([]);
  const { categoria  } = useParams()

    useEffect(() => {
        const getItems = async () => {

            try {
                const response = await fetch("http://localhost:3000/data.json");
                const data = await response.json();
                console.log("Los items", data);
                
                const datos=data;
                if (categoria) { setItems(data.filter(item => item.categoria.toLowerCase() === (categoria))) }
                else {setItems(datos);};
                
                //const response = await fetch("https://fakestoreapi.com/products");
                //const data = await response.data;
                //console.log("Los items", data);
               // setItems();   
                      
            } catch (error) {
                console.log(error)
            };
        };

        getItems();
    },[categoria]);

    return(
        <div className={styles.catalogoItems}>
                {typeof items === 'undefined' ? (<div><p>Loading....</p></div>   )
                     : <ItemList items={items} /> }
        </div>
    );
  }
  
export default ItemListContainer