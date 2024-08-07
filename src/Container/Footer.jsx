import React from 'react'

export default function Footer() {
  return (
  //   <section className="abosolute w-full bottom-0 bg-white overflow-hidden py-10 mt-5">
  //   <div className="relative z-10 mx-auto max-w-7xl px-4">
  //     <div className="-m-6 flex flex-wrap">
  //       <div className="w-full p-6 md:w-1/2 lg:w-5/12">
  //         <div className="flex h-full flex-col justify-between">
  //           <div className="mb-4 inline-flex items-center">
  //             <span className="ml-4 text-2xl font-bold"><ion-icon name="bag-handle-outline"></ion-icon> Store</span>
  //           </div>
  //           <div>
  //             <p className="text-sm text-gray-600">
  //               &copy; Copyright 2022. All Rights Reserved by Store.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="w-full p-6 md:w-1/2 lg:w-2/12">
  //         <div className="h-full">
  //           <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
  //             Company
  //           </h3>
  //           <ul>
  //             <li className="mb-4">
  //               <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
  //                 Features
  //               </a>
  //             </li>
  //             <li className="mb-4">
  //               <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
  //                 Pricing
  //               </a>
  //             </li>
  //             <li className="mb-4">
  //               <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
  //                 Affiliate Program
  //               </a>
  //             </li>
  //             <li>
  //               <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
  //                 Press Kit
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="w-full p-6 md:w-1/2 lg:w-2/12">
  //         <div className="h-full">
  //           <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
  //             Support
  //           </h3>
  //           <ul>
  //             <li className="mb-4">
  //               <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
  //                 Account
  //               </a>
  //             </li>
  //             <li className="mb-4">
  //               <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
  //                 Help
  //               </a>
  //             </li>
  //             <li className="mb-4">
  //               <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
  //                 Contact Us
  //               </a>
  //             </li>
  //             <li>
  //               <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
  //                 Customer Support
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="w-full p-6 md:w-1/2 lg:w-3/12">
  //         <div className="h-full">
  //           <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
  //             Legals
  //           </h3>
  //           <ul>
  //             <li className="mb-4">
  //               <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
  //                 Terms &amp; Conditions
  //               </a>
  //             </li>
  //             <li className="mb-4">
  //               <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
  //                 Privacy Policy
  //               </a>
  //             </li>
  //             <li>
  //               <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
  //                 Licensing
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  

<footer className="bg-white shadow dark:bg-gray-900 m-0">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white flex items-center"><ion-icon name="bag-handle-outline"></ion-icon>Store</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Store Application. All Rights Reserved.</span>
    </div>
</footer>


  )
}
