import React from 'react'
import WishlistItem from '../Container/WishlistItem'


export default function wishList(props) {
 
    return (
      <>
       <div className="bg-white my-24 rounded-xl mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your Wishlist</h2>
      {
      props.wishlistProduct.map((value,index)=>{  
        return(<WishlistItem addToCart={props.cartFunc} wishlist={value} key={index} />)
      })
      }
    </div>
      </>
    )
  }

