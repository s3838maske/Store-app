import React from "react";

export default function WishlistItem(props) {
  let {wishlist , addToCart} = props

  return (
    <>
      <ul className="flex flex-col divide-y divide-gray-200">
          <li
            
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src= {wishlist.imageSrc                }
                alt= {wishlist.title.slice(0,10)}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2 gap-28">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {wishlist.title.slice(0, 20)}

                    </h3>
                    <p className="text-sm">{wishlist.desc.slice(0,100)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">₹{wishlist.price} </p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button
                    type="button"
                    className="flex items-center space-x-2 px-2 py-1 pl-0"
                  >
                   
                    <span>Remove</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center space-x-2 px-2 py-1"
                    onClick={()=>addToCart(wishlist.id,wishlist.title,wishlist.imageSrc,wishlist.price,wishlist.desc)}
                  >
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </li>

      </ul>
    </>
  );
}
