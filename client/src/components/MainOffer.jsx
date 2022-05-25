import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';


const Banner = styled.div`
display: flex;
background-color: #292929;
height:40vh;
align-items:center;
justify-content:center;
font-size:3rem;
`;

function MainOffer() {
  return (
    <div>
    <Link to="/products" style={{ textDecoration: 'none',color:'black'}}>
        <Banner>
        <div>
       <h2>Minimum  <br />30% <strong>OFF</strong><br /> <span>On all Products</span> </h2>
        </div>
             
        </Banner>
        </Link>
    </div>
  )
}

export default MainOffer