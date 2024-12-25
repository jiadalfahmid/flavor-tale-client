import {Outlet} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Root = () => {
   return (
      <>
         <Navbar/>
         <div className="min-h-screen"><Outlet/></div>
         <Footer/>
      </>
   );
};

export default Root;