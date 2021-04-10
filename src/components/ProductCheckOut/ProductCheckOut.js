import React, { useEffect, useState } from 'react';

const ProductCheckOut = () => {
    const[productCheckOut,setProductCheckOut]=useState([]);
    
    useEffect(()=>{
        fetch('https://calm-lake-98159.herokuapp.com/checkOut')
        .then(res=>res.json())
        .then(data=>setProductCheckOut(data));
    })

    return (
        <div>
            <h1>This is checkout page</h1>
            <h3>{productCheckOut.length}</h3>
            {
                productCheckOut.map(pCheckOuts=> <li>{pCheckOuts.name} price:{pCheckOuts.price}</li>)
            }
        </div>
    );
};

export default ProductCheckOut;