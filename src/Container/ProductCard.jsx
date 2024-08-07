import React from "react";

export default function ProductCard(props) {
  let { data } = props;

  return (
    <div className="w-72 rounded-md border bg-white shadow-2xl">
      <img
        src={data.image}
        alt="Laptop"
        className="object-contain aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {data.title.slice(0, 20)}
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          {data.description.slice(0, 100)}
        </p>

        <div className="mt-5 flex items-center space-x-2">
          <span className="block text-base font-semibold">Price : </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-base font-medium">
            {data.price}/-
          </span>
        </div>
        <button
          type="button"
          className="flex justify-center items-center gap-1 mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          // onClick={()=> handleCart(data.id,data.title,data.image,data.price,data.description)}
          onClick={increament}
        >
         
            <ion-icon name="cart-outline"></ion-icon>
          
          Add to Cart
        </button>
        <button
          type="button"
          className="flex justify-center items-center gap-1 mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={()=>handelWishlist(data.id,data.title,data.image,data.price,data.description)}
        >
        
            <ion-icon name="heart-outline"></ion-icon>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
