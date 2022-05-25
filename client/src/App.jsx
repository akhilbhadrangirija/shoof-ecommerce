import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React,{useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation 
} from "react-router-dom";
const ScrollToTop =()=> {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const user = false;

  return (<Router>
  <ScrollToTop />
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={user ? <Home/>  : <Login/>} />
    <Route exact path="/register" element={user ? <Home/>  : <Register/>}/>
    <Route exact path="/product/:id" element={<Product/>}/>
    <Route exact path="/products/:cat"  element={<ProductList/>}/>
    <Route exact path="/products"  element={<ProductList/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
  </Routes>
  </Router>);
};

export default App;