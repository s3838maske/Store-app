import React from "react";
import { ArrowLeft } from 'lucide-react'


class ErrorBoundary  extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
   console.log(error);
   console.log(errorInfo);
   
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return(
        <>
    {/* <div className="py-10 h-screen mt-16">
      <div className="text-center">
        <p className="text-base font-semibold text-black">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-700 sm:text-5xl">
        Something went wrong...
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, we couldn&apos:t find the page you&apos;re looking for.
        </p>
       
      </div>
    </div> */}
      <div className=" flex items-center justify-center px-2 md:my-24 md:px-0">
        <div className="h-screen">
 
     <p className=" text-sm font-semibold text-red-800">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-black-800 md:text-3xl">
          Something Went Wrong
        </h1>
        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for doesn&#x27;t exist or has been
          moved.
        </p>
        </div> 
        </div>

        </>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary