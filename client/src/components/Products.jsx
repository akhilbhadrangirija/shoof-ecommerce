import { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import React from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
 
const Products = ({cat,filters}) => {

  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);





  
  useEffect(() => {
    
    const getProduct =async ()=>{
      
      try {
       const res = await axios.get(cat ? `http://localhost:5000/api/product?category=${cat}`: `http://localhost:5000/api/product` );
       setProducts(res.data)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    getProduct();
    
  
   
  }, [cat]);
  useEffect(() => {
    cat &&
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key,value])=>
        item[key].includes(value))
      )
    )
  
    
  }, [filters,cat,products]);


  useEffect(() => {
    filters &&
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key,value])=>
        item[key].includes(value))
      )
    )
  
    
  }, [filters,products]);

  
  

  return (
    <Container>
      {cat ? filteredProducts.map((item) => (
        <Product item={item} key={item._id} />
      )) : filters ? filteredProducts.map((item) => (
        <Product item={item} key={item._id} />
      )) :  products.slice(0,4).map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;
