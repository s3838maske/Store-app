import React from 'react'
import { Star} from 'lucide-react'

import { useDispatch, useSelector } from 'react-redux';
import { sagaAddToWish } from '../Store/Wishlist/wishAction';
import { toast } from 'react-toastify';
import { sagaAddToCart } from '../Store/Cart/cartAction';


export default  function ItemDetailsCard (props) {
  const { productData } = props
  const dispatch = useDispatch()
  const wish = useSelector(state=>state.wishList.wishListProduct)
  const cart = useSelector(state=>state.cartProduct.cart)

  const handleProduct = (data) => {
    let itemExits = wish.some((item) => item.id === data.id);
    if (itemExits) {
      toast.info("Product already exist", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success("Added To Cart Successfully !!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      dispatch(sagaAddToWish(data))
    }
  };

  const handleAddToCart = (data) => {
    let itemExits = cart.some((item) => item.id === data.id);
    if (itemExits) {
      toast.info("Product already exist", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success(data.title.slice(0, 20)+" Added Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // props.addtocartAction(data);
      dispatch(sagaAddToCart(data))
    }
  };
  
  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt= {productData?.title}
            className="h-64 w-full rounded object-contain lg:h-96 lg:w-1/2"
            src= {productData?.images || productData?.image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500"> {productData?.category?.name}  </h2>
            <h1 className="my-4 text-3xl font-semibold text-black">{productData?.title}</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(Math.floor(4.2))].map((_, i) => (
                  <Star key={i} size={16} fill='rgb(237 189 15)' className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold"> {productData?.rating?.count} </span>
              </span>
            </div>
            <p className="leading-relaxed">
              {productData?.description}
            </p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-semibold">Color</span>
                <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
              </div>
              
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">₹{productData.price}</span>
              <button
                type="button"
                onClick={()=>handleProduct(productData)}
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Wishlist
              </button>
              <button
                type="button"
                onClick={()=>handleAddToCart(productData)}
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
