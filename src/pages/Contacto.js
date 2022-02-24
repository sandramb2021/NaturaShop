import React from 'react';
import styles from "./Contacto.module.css";
import { Link } from "react-router-dom";
import face from "../img/face.png";
import instagram from "../img/instagram.png";
import ws from "../img/ws.png";

const Contacto = () => {
	return (
		<div className={styles.page}>
			<h1>Contactate con nosotros!</h1>
			<p><img className={styles.imgRS} src={ws}></img> 1145552156 </p>
			
			
			<p>
				<Link to="">
					<img className={styles.imgRS}  src={face}></img>
				</Link>
			</p>
			<p>
				<Link to="">
					<img className={styles.imgRS}  src={instagram}></img>
				</Link>
			</p>
			<p>Mail: natura@gmail.com</p>
			
		</div>
	)
};

export default Contacto;
