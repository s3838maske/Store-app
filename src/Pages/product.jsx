import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'


export default function Product() {

  const [product, setProduct] = useState([])

  const data = async()=>{
    const res = await axios.get("https://api.escuelajs.co/api/v1/products")
    setProduct(res.data.slice(0,5))
    // console.log(res.data);
  }

  useEffect(()=>{
    data()
  },[product])

 

  return (
    <>
    <div className="min-h-full py-12 px-4 max-w-screen-xl place-content-center grid grid-cols-4 gap-x-6  justify-items-center gap-y-9 mx-auto">
    {product.map(post=>{ 
       return  <ProductCard data={post}/>
        })}

         </div>

{/* <div className="min-h-full py-12 px-4 max-w-screen-xl place-content-center grid grid-cols-4 gap-x-6  justify-items-center gap-y-9 mx-auto">
      
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
     
      </div> */}

    
    </>
  )
}
