import React from 'react';
import Banner from '../../Componenets/Banner/Banner';
import TopFoods from '../../Componenets/TopFoods/TopFoods';
import Testimony from '../../Componenets/Testimony/Testimony';
import FoodSpecialties from '../../Componenets/FoodSpecialties/FoodSpecialties';
import OnlineReservation from '../../Componenets/OnlineReservation/OnlineReservation';

const Home = () => {
   return (
      <div>
         <Banner/>
         <TopFoods/>
         <FoodSpecialties/>
         <Testimony/>
         <OnlineReservation/>
      </div>
   );
};

export default Home;