import React from "react";
import { Link } from "react-router-dom";
import styles from  "./Item.module.css";
//import ItemDetailContainer from "./ItemDetailContainer";


const Item = ({ id, title, price, image  }) => {  
   
    return (
        <Link to={`/products/${id}`}>
            <div className={styles.itemDetail}>
                <div >
                    <div className={styles.itemDetailTitle}>
                        <h2 className={styles.title}>{title}</h2>    
                    </div>
                    <div className={styles.itemDetailImage}>
                        <img className={styles.image_card} alt={title} src={image}></img>
                    </div>
                    <div className={styles.itemDetailDetalles}>
                        <p className={styles.price}>${price}</p>
                        <button id="boton-mas-detalles" >Ver más detalles</button>
                    </div>
                </div>
            </div>        
        </Link>
   );
 };
 export default Item;