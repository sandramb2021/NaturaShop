import React, { useState , useEffect}  from "react";
import styles from "./ItemListContainer.module.css";
import ItemList from "./ItemList";
import {  useParams } from 'react-router-dom';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";


const ItemListContainer = () => {  
    const [items, setItems] = useState([]);
    const { categoria  } = useParams();
    

    useEffect(() => {
      try {
        const getItems = async () => {
            const querySnapshot = await getDocs(collection(db, "items"));
                    
            const products = querySnapshot.docs.map((item) => ({
              id: item.id,
              ...item.data(),
            }));
            if (categoria) { setItems(products.filter(item => item.categoria.toLowerCase() === (categoria))) }
                else {setItems(products);};
           
          };
          
            getItems();
          } 
          catch (error) {
            console.log("we have this error: ", error);
          }

    },[categoria]);

    return(
        <div className={styles.catalogoItems}>
          { items ?  <ItemList items={items} />: (<div><p>Loading....</p></div>) }
        </div>
    );
  }
  
export default ItemListContainer