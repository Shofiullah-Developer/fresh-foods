import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL,setImageURL] =useState(null);

  const onSubmit = data => {
      const productData={
          name: data.name,
          price: data.price,
          imageURL: imageURL
      };
      const url=`https://calm-lake-98159.herokuapp.com/addProduct`;

      console.log(productData)
      fetch(url,{
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(productData)
      })
      .then(res=>console.log('server side responce',res))
    };


  const handleImageUpload=event => {
    console.log(event.target.files[0])
    const imageData=new FormData();
    imageData.set('key','56736573fd2869065baccb5ad8c612bc');
    imageData.append('image',event.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload',
    imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    return (
        <div>
            <h1>Add Product Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <input name="name" defaultValue="New Product" {...register("name")} />
                <br/>
                <input name="price" defaultValue="TK" {...register("price")}  />
                <br/>
                <br/>
                <input type="file" onChange={handleImageUpload}/>
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;