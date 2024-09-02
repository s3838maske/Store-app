import React from "react";
import { connect } from "react-redux";

// import { sagaAddToCart } from "../Store/Cart/cartAction";
// import { bindActionCreators } from "redux";

function WishlistItem(props) {
  return (
    <>
        <ul className="bg-white px-2 flex flex-col divide-y divide-gray-200">
      {props.wishListData.map((Items) => (
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between" key={Items.payload.id} >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={Items.payload.image}
                alt={Items.payload.title}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2 gap-28">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {Items.payload.title}
                    </h3>
                    <p className="text-sm">{Items.payload.discription}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">₹{Items.payload.price} </p>
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
                    // onClick={()=>props.addToCartAction(wishlist)}
                  >
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
      ))}
      </ul>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     wishListData: state.wishList.wishListProduct,
//   }
// };


// // const mapDispatchToProps = (dispatch) => {
// //   return bindActionCreators(
// //     {
// //       addToCartAction: sagaAddToCart,
// //     },
// //     dispatch
// //   );
// // };

// export default connect(mapStateToProps)(WishlistItem);

// // export default WishlistItem


// import React from "react";
// import { connect } from "react-redux";


 
// function WishlistItem(props) {
//   return (
//     <>
//       <ul role="list" className="bg-white rounded-lg divide-y divide-gray-200">
//         {props.wishListData.map((product) => (
//           <div key={product.payload.id} >
//             <li className="flex py-6 px-5 sm:py-6 ">
//               <div className="flex-shrink-0">
//                 <img
//                   src={product.payload.image}
//                   alt={product.payload.title}
//                   className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
//                 />
//               </div>

//               <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
//                 <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
//                   <div>
//                     <div className="flex justify-between">
//                       <h3 className="text-sm">
//                         <a
//                           href={product.payload.image}
//                           className="font-semibold text-black"
//                         >
//                           {product.payload.title}
//                         </a>
//                       </h3>
//                     </div>
//                     <div className="mt-1 flex items-end">
//                       <p className="text-xs font-medium text-gray-500 line-through">
//                         {product.payload.originalPrice}
//                       </p>
//                       <p className="text-lg font-medium text-gray-900 text-green-600">
//                         &nbsp;&nbsp;₹ {product.payload.price}
//                       </p>
//                       &nbsp;&nbsp;
//                       <p className="text-sm font-medium text-green-500">
//                         {product.payload.discount}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </li>
//             <div className="mb-2 flex">
//               <div className="min-w-24 flex">
//                 <button type="button" className="h-7 w-7">
//                   -
//                 </button>
//                 <input
//                   type="text"
//                   className="mx-1 h-7 w-9 rounded-md border text-center"
//                   defaultValue={1}
//                 />
//                 <button
//                   type="button"
//                   className="flex h-7 w-7 items-center justify-center"
//                 >
//                   +
//                 </button>
//               </div>
//               <div className="ml-6 flex text-sm">
//                 <button
//                   type="button"
//                   className="flex items-center space-x-1 px-2 py-1 pl-0"
//                 >
//                   <ion-icon name="trash-outline"></ion-icon>
//                   <span className="text-xs font-medium text-red-500">
//                     Remove
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </ul>
//     </>
//   );
// }

const mapStateToProps = (state) => {
  return {
    wishListData: state.wishList.wishListProduct
  };
};

export default connect(mapStateToProps)(WishlistItem);
