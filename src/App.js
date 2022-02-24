import React from 'react';
import styles from './App.module.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Error from "./pages/Error"
import  Contacto  from './pages/Contacto';
import {CartProvider} from "./components/cartContext"
import Cart from "./components/Cart"

function App() {
  
  return (
    <div className={styles.App}>  
      <CartProvider >  
      <BrowserRouter>    
        <NavBar />
        
        <Routes>
          <Route 
            exact 
            path="/" 
            element={<ItemListContainer />}></Route>
          <Route
            exact
            path="category/:categoria"
            element={<ItemListContainer />}></Route>
          <Route
            exact
            path="products/:id"
            element={<ItemDetailContainer />}></Route>
          <Route path="contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='*' element={<Error />}>
					  
				  </Route>
        </Routes>
      </BrowserRouter>
     </CartProvider>
    </div>
  );
}

export default App;
