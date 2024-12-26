import { createBrowserRouter } from "react-router-dom";

import Root from "../Componenets/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from './../Pages/Register/Register';
import AllFoodsPage from "../Pages/AllFoods/AllFoods";
import FoodDetailsPage from "../Pages/FoodDetailsPage/FoodDetailsPage";
import PrivateRouter from "./PrivateRouter";
import FoodPurchasePage from "../Pages/FoodPurchasePage/FoodPurchasePage";
import AddFoodPage from "../Pages/AddFoodPage/AddFoodPage";
import MyFoodsPage from "../Pages/MyFoodsPage/MyFoodsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-foods",
        element: <AllFoodsPage />,
      },
      {
        path:"/food/:id", 
        element:<FoodDetailsPage />,
      },
      {
        path:"/purchase/:id", 
        element:<PrivateRouter><FoodPurchasePage/></PrivateRouter>,
      },
      {
        path:"/add-food", 
        element:<PrivateRouter><AddFoodPage /></PrivateRouter>,
      },
      {
        path:"/my-foods", 
        element:<PrivateRouter><MyFoodsPage /></PrivateRouter>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
