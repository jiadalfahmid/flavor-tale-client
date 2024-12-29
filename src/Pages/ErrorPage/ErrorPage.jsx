import React from "react";
import { Link } from 'react-router-dom';


const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-500 to-yellow-400 text-white text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-white text-red-500 font-semibold rounded-lg shadow-md hover:bg-red-500 hover:text-white transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
