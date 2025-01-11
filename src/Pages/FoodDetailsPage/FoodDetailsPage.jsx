import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const SkeletonDetails = () => (
  <div className="p-6 min-h-screen">
    {/* Skeleton Page Header */}
    <div className="text-center py-12 mb-8 skeleton">
      <div className="skeleton h-12 w-1/3 mx-auto"></div>
    </div>

    {/* Skeleton Details Section */}
    <div className="max-w-6xl mx-auto shadow-md rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Skeleton Image Section */}
        <div className="flex-1 skeleton h-[400px]"></div>

        {/* Skeleton Info Section */}
        <div className="p-6 flex-1">
          <div className="skeleton h-8 w-3/4 mb-4"></div>
          <div className="skeleton h-20 w-full mb-4"></div>
          
          <div className="mb-4 space-y-2">
            <div className="skeleton h-4 w-2/3"></div>
            <div className="skeleton h-4 w-1/2"></div>
            <div className="skeleton h-4 w-1/3"></div>
            <div className="skeleton h-4 w-3/4"></div>
            <div className="skeleton h-4 w-2/3"></div>
          </div>
          
          <div className="mb-4">
            <div className="skeleton h-4 w-3/4"></div>
          </div>
          
          <div className="skeleton h-10 w-full rounded-md"></div>
        </div>
      </div>
    </div>
  </div>
);

const FoodDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const {user} = UseAuth();

  useEffect(() => {
    fetchFoodDetails();
  }, []);

  const fetchFoodDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE}foods/${id}`,
        {
          withCredentials: true,
        }
      );
      setFood(response.data);
    } catch (error) {
      console.error("Failed to fetch food details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = () => {
    navigate(`/purchase/${id}`);
  };

  if (loading) {
    return <SkeletonDetails />;
  }

  if (!food) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">No food details found.</p>
      </div>
    );
  }

  return (
    <div className="p-5 bg-base-300 min-h-screen">
      {/* Page Header */}
      <div
        className="text-white text-center py-12 mb-8"
        style={{
          backgroundImage: "linear-gradient(to right, #FF5733, #FFD700)",
        }}
      >
        <h1 className="text-4xl font-bold">{food.FoodName}</h1>
      </div>

      {/* Food Details Section */}
      <div className="max-w-6xl bg-base-100 mb-12 mx-auto shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src={food.FoodImage}
              alt={food.FoodName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-4">
              {food.FoodName}
            </h2>
            <p className="mb-4">{food.Description}</p>
            <div className="mb-4">
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {food.FoodCategory}
              </p>
              <p>
                <span className="font-semibold">Origin:</span> {food.FoodOrigin}
              </p>
              <p>
                <span className="font-semibold">Price:</span> ${food.Price}
              </p>
              <p>
                <span className="font-semibold">Quantity Available:</span>{" "}
                {food.Quantity > 0 ? `${food.Quantity} pcs` : "Out of Stock"}
              </p>
              <p>
                <span className="font-semibold">Purchase Count:</span>{" "}
                {food.PurchaseCount || 0} times
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-semibold">Added By:</span>{" "}
                {food.AddBy.Name} ({food.AddBy.Email})
              </p>
            </div>
            {food.Quantity === 0 ? (
              <p className="text-red-500 font-semibold text-lg">
                This item is currently out of stock.
              </p>
            ) : food.AddBy.Email === user?.email ? (
              <p className="text-red-500 font-semibold text-lg">
                You can't purchase your own food.
              </p>
            ) : (
              <button
                className="w-full px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-red-500 to-yellow-500 hover:shadow-lg"
                onClick={handlePurchase}
              >
                Purchase Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsPage;