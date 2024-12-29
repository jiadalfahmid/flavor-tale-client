import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "./../../Hooks/UseAuth";


const SkeletonPurchase = () => (
  <div className="p-6 min-h-screen">
    {/* Header Skeleton */}
    <div className="skeleton py-12 mb-8">
      <div className="skeleton h-12 w-1/2 mx-auto"></div>
    </div>

    {/* Content Container Skeleton */}
    <div className="max-w-4xl mx-auto shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        {/* Food Details Section */}
        <div className="skeleton h-8 w-48 mb-4"></div>
        <div className="skeleton h-4 w-3/4 mb-2"></div>
        <div className="skeleton h-4 w-1/2 mb-2"></div>
        <div className="skeleton h-4 w-2/3 mb-2"></div>

        {/* Purchase Form Section */}
        <div className="skeleton h-8 w-64 mt-6 mb-4"></div>
        
        {/* Quantity Input */}
        <div className="mb-4">
          <div className="skeleton h-4 w-24 mb-2"></div>
          <div className="skeleton h-10 w-full"></div>
        </div>

        {/* Buyer Name Input */}
        <div className="mb-4">
          <div className="skeleton h-4 w-32 mb-2"></div>
          <div className="skeleton h-10 w-full"></div>
        </div>

        {/* Buyer Email Input */}
        <div className="mb-4">
          <div className="skeleton h-4 w-32 mb-2"></div>
          <div className="skeleton h-10 w-full"></div>
        </div>

        {/* Purchase Button */}
        <div className="skeleton h-10 w-full"></div>
      </div>
    </div>
  </div>
);

const FoodPurchasePage = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = UseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFoodDetails();
  }, []);

  const fetchFoodDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE}foods/${id}`
      );
      setFood(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch food details:", err);
      setError("Unable to fetch food details. Please try again.");
      setLoading(false);
    }
  };

  const handlePurchase = async () => {
    if (quantity <= 0 || isNaN(quantity)) {
      toast.error("Please enter a valid quantity.");
      return;
    }

    if (quantity > food.Quantity) {
      toast.error("Requested quantity exceeds available stock.");
      return;
    }

    const updatedQuantity = food.Quantity - quantity;
    const updatedPurchaseCount = (food.PurchaseCount || 0) + 1;

    try {
      await axios.put(`${import.meta.env.VITE_API_BASE}foods/${id}`, {
        Quantity: updatedQuantity,
        PurchaseCount: updatedPurchaseCount,
      });

      const purchaseData = {
        foodId: id,
        foodName: food.FoodName,
        price: food.Price,
        quantity,
        buyerName: user.displayName,
        buyerEmail: user.email,
        buyingDate: new Date().toISOString(),
      };

      await axios.post(
        `${import.meta.env.VITE_API_BASE}purchases`,
        purchaseData
      );

      toast.success("Purchase successful!");
      setFood((prev) => ({
        ...prev,
        Quantity: updatedQuantity,
        PurchaseCount: updatedPurchaseCount,
      }));
      setQuantity(1);

     
      navigate("/all-foods");
    } catch (err) {
      console.error("Failed to complete the purchase:", err);
      toast.error("Failed to complete the purchase. Please try again.");
    }
  };

  

    if (loading) {
      return <SkeletonPurchase />;
    }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base">
        <p className="text-base-content text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-base min-h-screen">
      <div
        className="bg-gradient-to-r text-white text-center py-12 mb-8"
        style={{
          backgroundImage: "linear-gradient(to right, #FF5733, #FFD700)",
        }}
      >
        <h1 className="text-4xl font-bold">Purchase {food.FoodName}</h1>
      </div>

      <div className="max-w-4xl mx-auto bg-base-200 shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          {/* Food Information */}
          <h2 className="text-2xl font-bold mb-4 text-base-content">
            Food Details
          </h2>
          <p className="text-base-content">
            <span className="font-semibold">Food Name:</span> {food.FoodName}
          </p>
          <p className="text-base-content">
            <span className="font-semibold">Price:</span> ${food.Price}
          </p>
          <p className="text-base-content">
            <span className="font-semibold">Quantity Available:</span>{" "}
            {food.Quantity} pcs
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
              className="w-full px-4 py-2 border rounded-md text-base-content"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <label className="block text-base-content mb-2 font-semibold">
              Buyer Name
            </label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-base-300 text-base-content"
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
              className="w-full px-4 py-2 border rounded-md bg-base-300 text-base-content"
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
