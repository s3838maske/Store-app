import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "../Components/common/Loading";
import Error from "../Components/common/Error";



export default function Home(props) {
  const [product, setProduct] = useState([]);
  const [error , setError] = useState('');

  const productData = async () => {
    try {
      // const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      const res = await axios.get("https://fakestoreapi.com/products");
      setProduct(res.data.slice(6,30));
    } catch (error) {
      setError(error.message)
    }
  };
  
  useEffect(() => {
    productData();
  }, [setProduct]);

if(error==0){
 return (
    <>  
{
  product.length==0?<Loading/> :
      <div className=" min-h-full py-20 px-4 max-w-screen-xl flex flex-wrap gap-x-6  justify-center gap-y-9 mx-auto">
       
        {product.map((post,i) => {
          return <ProductCard isLogin={props.isLogin} addToCartfunc={props.cartFunc} addToWishlistfunc={props.wishFunc} data={post} key={i}/>;
        })}
      </div> 
 } 
    </>
 )
}
else{
  return(
    <Error message={error} />
  );
}
}
