import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Product from '../Product/Product';



const Home = () => {

    const[product, setProduct]=useState([]);

    useEffect(()=>{
        fetch('https://calm-lake-98159.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

    return (
        <div className="row">
            {
                product.map(products=><Product products={products}></Product>)
            }
        </div>
    );
};

export default Home;