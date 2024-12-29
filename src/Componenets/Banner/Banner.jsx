import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/all-foods');
  };

  return (
   <section className="relative bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D')] h-[500px] flex items-center justify-center">
   <div className="bg-gradient-to-b from-black/70 to-black/40 p-8 rounded-lg text-center max-w-2xl">
     <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-md">
       Crave It. Taste It. Love It.
     </h1>
     <p className="text-xl text-gray-200 mb-8 font-medium">
       Indulge in a world of flavors. Find your favorite dish now!
     </p>
        <button
          onClick={handleButtonClick}
          className="bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Explore All Foods
        </button>
      </div>
    </section>
  );
};

export default Banner;
