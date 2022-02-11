import React, { useState , useEffect}  from "react";
import "./ItemDetailContainer.css";
import  ItemDetail from "./ItemDetail";
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
                console.log("El producto", product);           
            } catch (error) {
                console.log(error)
            };
        };
        getProduct();
    },[id]);

    return(
        <div className="catalogo">                
            <div className="ItemList">
                 {product ? 
                    
                        <ItemDetail 
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            description={product.description} 
                            stock={product.stock}
                        /> 
                     : <p>Consultando producto....</p>}         
            </div>
        </div>
    );
  }
  
export default   ItemDetailContainer;