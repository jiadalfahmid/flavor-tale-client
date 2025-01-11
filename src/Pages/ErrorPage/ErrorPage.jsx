import React from "react";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-100 text-base-content">
      {/* Image */}
      <img 
        src="./404.png" 
        alt="404 Error" 
        className="w-1/4 mb-8" 
      />
      <p className="text-2xl mt-4 text-base-content">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 hover:scale-105 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
