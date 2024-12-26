import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodDetailsPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [food, setFood] = useState(null);
  const [purchaseCount, setPurchaseCount] = useState(0);

  useEffect(() => {
    fetchFoodDetails();
  }, []);

  const fetchFoodDetails = async () => {
    try {
      const response = await axios.get("http://localhost:5000/foods");
      const foodItem = response.data.find((item) => item._id === id);
      setFood(foodItem);
      setPurchaseCount(foodItem?.PurchaseCount || 0); 
    } catch (error) {
      console.error("Failed to fetch food details:", error);
    }
  };

  const handlePurchase = () => {
    navigate(`/purchase/${id}`);
  };

  if (!food) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-xl">Loading food details...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100">
      {/* Page Header */}
      <div
        className="bg-gradient-to-r text-white text-center py-12 mb-8"
        style={{ backgroundImage: "linear-gradient(to right, #FF5733, #FFD700)" }} // Red to Yellow gradient
      >
        <h1 className="text-4xl font-bold">{food.FoodName}</h1>
      </div>

      {/* Food Details */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={food.FoodImage}
          alt={food.FoodName}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{food.FoodName}</h2>
          <p className="text-gray-700 mb-4">{food.Description}</p>
          <div className="mb-4">
            <p className="text-gray-600">
              <span className="font-semibold">Category:</span> {food.FoodCategory}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Origin:</span> {food.FoodOrigin}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Price:</span> ${food.Price.toFixed(2)}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Quantity Available:</span>{" "}
              {food.Quantity > 0 ? `${food.Quantity} pcs` : "Out of Stock"}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Purchase Count:</span> {purchaseCount}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">
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
  );
};

export default FoodDetailsPage;
