import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const FoodPurchasePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState(null);
  const [quantity, setQuantity] = useState(1);

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

  const handlePurchase = async () => {
    const purchaseData = {
      foodName: food.FoodName,
      price: food.Price,
      quantity,
      buyerName: user.name,
      buyerEmail: user.email,
      buyingDate: Date.now(),
    };

    try {
      await axios.post("http://localhost:5000/purchases", purchaseData);
      toast.success("Purchase successful!");
      navigate("/confirmation");
    } catch (error) {
      console.error("Failed to complete the purchase:", error);
      toast.error("Failed to complete the purchase.");
    }
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
      <div
        className="bg-gradient-to-r text-white text-center py-12 mb-8"
        style={{ backgroundImage: "linear-gradient(to right, #FF5733, #FFD700)" }}
      >
        <h1 className="text-4xl font-bold">Purchase {food.FoodName}</h1>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          {/* Food Information */}
          <h2 className="text-2xl font-bold mb-4 text-base-content">
            Food Details
          </h2>
          <p className="text-base-content">
            <span className="font-semibold">Food Name:</span> {food.FoodName}
          </p>
          <p className="text-base-content">
            <span className="font-semibold">Price:</span> ${food.Price.toFixed(2)}
          </p>

          {/* Purchase Form */}
          <h2 className="text-2xl font-bold mt-6 mb-4 text-base-content">
            Purchase Information
          </h2>
          <div className="mb-4">
            <label className="block text-base-content mb-2 font-semibold">
              Quantity
            </label>
            <input
              type="number"
              value={quantity}
              min="1"
              max={food.Quantity}
              className="w-full px-4 py-2 border rounded-md text-base-content"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-base-content mb-2 font-semibold">
              Buyer Name
            </label>
            <input
              type="text"
              value={user.name}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-base-content"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base-content mb-2 font-semibold">
              Buyer Email
            </label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-base-content"
            />
          </div>

          <button
            className="w-full px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-red-500 to-yellow-500 hover:shadow-lg"
            onClick={handlePurchase}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodPurchasePage;
