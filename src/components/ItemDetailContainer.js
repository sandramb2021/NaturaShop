import React, { useState , useEffect}  from "react";
import styles from "./ItemDetailContainer.module.css";
import ItemDetail from "./ItemDetail";
import {  useParams } from 'react-router-dom';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemDetailContainer = () => {  
    const [product, setProduct] = useState({});
    const { id  } = useParams()
    
    useEffect(() => {
        const getProduct = async () => {
            try {
               
                const querySnapshot = await getDocs(collection(db, "items"));
                                            
                const products = querySnapshot.docs.map((item) => ({
                    id: item.id,
                    ...item.data(),
                }));
                
                setProduct(products.find((item) => item.id === id));   
                
            } catch (error) {
                console.log(error)
            };
        };
        getProduct();
    },[id]);


    return(
        <div className={styles.catalogo}>                
            <div className={styles.ItemList}>
                 {product ? 
                    
                        <ItemDetail 
                            key={id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            categoria={product.categoria}
                            descripcion={product.descripcion} 
                            stock={product.stock}
                            itemId={id}
                        /> 
                     : <p>Consultando producto....</p>}         
            </div>
        </div>
    );
  }
  
export default   ItemDetailContainer;