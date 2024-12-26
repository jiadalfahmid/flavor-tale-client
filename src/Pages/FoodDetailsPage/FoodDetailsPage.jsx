import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetchFoodDetails();
  }, []);

  const fetchFoodDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/foods/${id}`);
      setFood(response.data);
    } catch (error) {
      console.error("Failed to fetch food details:", error);
    }
  };

  const handlePurchase = () => {
    navigate(`/purchase/${id}`);
  };

  if (!food) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base">
        <p className="text-base-content text-xl">Loading food details...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-base min-h-screen">
      {/* Page Header */}
      <div
        className="bg-gradient-to-r text-white text-center py-12 mb-8"
        style={{ backgroundImage: "linear-gradient(to right, #FF5733, #FFD700)" }}
      >
        <h1 className="text-4xl font-bold">{food.FoodName}</h1>
      </div>

      {/* Food Details Section */}
      <div className="max-w-6xl mx-auto bg-base-200 shadow-md rounded-lg overflow-hidden">
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
          <div className="p-6 flex-1 bg-base">
            <h2 className="text-2xl font-bold mb-4 text-base-content">{food.FoodName}</h2>
            <p className="text-base-content mb-4">{food.Description}</p>
            <div className="mb-4">
              <p className="text-base-content">
                <span className="font-semibold">Category:</span> {food.FoodCategory}
              </p>
              <p className="text-base-content">
                <span className="font-semibold">Origin:</span> {food.FoodOrigin}
              </p>
              <p className="text-base-content">
                <span className="font-semibold">Price:</span> ${food.Price.toFixed(2)}
              </p>
              <p className="text-base-content">
                <span className="font-semibold">Quantity Available:</span>{" "}
                {food.Quantity > 0 ? `${food.Quantity} pcs` : "Out of Stock"}
              </p>
              <p className="text-base-content">
                <span className="font-semibold">Purchase Count:</span>{" "}
                {food.PurchaseCount || 0} times
              </p>
            </div>
            <div className="mb-4">
              <p className="text-base-content">
                <span className="font-semibold">Added By:</span> {food.AddBy.Name}{" "}
                ({food.AddBy.Email})
              </p>
            </div>
            {food.Quantity === 0 ? (
              <p className="text-red-500 font-semibold text-lg">
                This item is currently out of stock.
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
