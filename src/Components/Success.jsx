import React from 'react'

export default function Success() {
  return (
    <>
<div id="successModal" aria-hidden="true" className="hidden mx-auto mt-44 hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
    <div className="mx-auto relative p-4 w-full max-w-md h-full md:h-auto">
        
        <div className="w-full relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <button onClick={successModalhide} type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-3xl p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="successModal">
            <ion-icon name="close-outline"></ion-icon>
           <span className="sr-only">Close modal</span>
            </button>
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                <span className="sr-only">Success</span>
            </div>
            <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully Added product.</p>
            <button data-modal-toggle="successModal" type="button" className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
            onClick={successModalhide}
            >
                Continue
            </button>
        </div>
    </div>
</div>
{/* 
<div className='text-center'>
            <button data-modal-toggle="successModal" id="successButton" onClick={successHandle} type="button" className="mt-28 py-2 bg-black px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900">
                Success
            </button>
</div> */}
    </>
  )
}
