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
 
const ProductPrev = () => {

  const [products,setProducts] = useState([]);

  


  
  useEffect(() => {
    
    const getProduct =async ()=>{
      
      try {
       const res = await axios.get(`http://localhost:5000/api/product` );
       setProducts(res.data)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    getProduct();
    
  
   
  }, []);


  
  

  return (
    <Container>
      
      {products.slice(0,4).map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default ProductPrev;
