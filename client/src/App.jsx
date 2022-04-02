import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate 
} from "react-router-dom";

const App = () => {
  const user = true;

  return (<Router>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={user ? <Home/>  : <Login/>} />
    <Route exact path="/register" element={user ? <Home/>  : <Register/>}/>
    <Route exact path="/product/:id" element={<Product/>}/>
    <Route exact path="/productlist/:category"  element={<ProductList/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
  </Routes>
  </Router>);
};

export default App;