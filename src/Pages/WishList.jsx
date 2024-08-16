import React from 'react'
import WishlistItem from '../Container/WishlistItem'


export default function wishList(props) {
 
    return (
      <>
       <div className="h-screen my-24 rounded-xl mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your Wishlist</h2>
      {props.wishlistProduct.length===0?<h1 className='text-4xl text-center font-semibold text-gray-600'>No Product Available</h1>:
      props.wishlistProduct.map((value,index)=>{  
        return(<WishlistItem addToCart={props.cartFunc} wishlist={value} key={index} />)
      })
      

    }
    </div>
      </>
    )
  }

