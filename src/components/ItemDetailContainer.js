import React, { useState , useEffect}  from "react";
import styles from "./ItemDetailContainer.module.css";
import ItemDetail from "./ItemDetail";
import {  useParams } from 'react-router-dom'

const ItemDetailContainer = () => {  
    const [product, setProduct] = useState({});
    const { id  } = useParams()
    
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch("http://localhost:3000/data.json");
                const data = await response.json();
                                
                setProduct(data.find((item) => item.id === parseInt(id)));   
                
            } catch (error) {
                console.log(error)
            };
        };
        getProduct();
    },[id]);

console.log("IDetail", product);

    return(
        <div className={styles.catalogo}>                
            <div className={styles.ItemList}>
                 {product ? 
                    
                        <ItemDetail 
                            key={id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
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