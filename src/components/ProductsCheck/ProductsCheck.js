import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import ProductCheckOut from '../ProductCheckOut/ProductCheckOut';

const Product = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [productData,setProductData]=useState([]);
    const {id}=useParams();
    
    useEffect(()=>{
        fetch('https://calm-lake-98159.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProductData(data))
        
    },[id])
    const selectedProduct=productData.find(productData=>productData?._id===id)
    console.log(selectedProduct)
   
    

    const handleCheckOut=()=>{
        const checkProduct={...loggedInUser,...selectedProduct}
        fetch('https://calm-lake-98159.herokuapp.com/productCheck',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(checkProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    // const HandelData=()=>{
        
    //     setProductData(productData)
    // }
    return (
        <div>
            <h1>This page is Check Out page</h1>
            <h3>{selectedProduct?.name}<span>       </span>{selectedProduct?.price}</h3>
            <button onClick={handleCheckOut}>check out</button>
            <ProductCheckOut></ProductCheckOut>
        </div>
    );
};

export default Product;