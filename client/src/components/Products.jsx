import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import React from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
 
const Products = ({cat,filters,sort}) => {

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
    
  
   
  }, [filters]);
  

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;
