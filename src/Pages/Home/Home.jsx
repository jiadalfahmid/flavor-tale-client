import React from 'react';
import Banner from '../../Componenets/Banner/Banner';
import TopFoods from '../../Componenets/TopFoods/TopFoods';
import Testimony from '../../Componenets/Testimony/Testimony';
import FoodSpecialties from '../../Componenets/FoodSpecialties/FoodSpecialties';

const Home = () => {
   return (
      <div>
         <Banner/>
         <TopFoods/>
         <Testimony/>
         <FoodSpecialties/>
      </div>
   );
};

export default Home;