import React from 'react';
import { Link } from 'react-router-dom';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Product = ({products}) => {
   
    console.log(products)
    return (
        <div className="col-md-3">
            <img style={{height:'300px'}} src={products.imageURL} alt=""/>
            <h4>{products.name}</h4>
            <h5>${products.price}<Link to={`productsCheck/${products._id}`}><button>Add to Cart</button></Link></h5> 
        </div>
    );
};

export default Product;