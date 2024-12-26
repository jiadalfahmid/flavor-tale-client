import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast"; 
import UseAuth from "../../Hooks/UseAuth";

const FoodPurchasePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { food } = location.state || {}; 
  const { user } = UseAuth();
  const [quantity, setQuantity] = useState(1);

  const loggedInUser = {
    name: user?.name || "Guest",
    email: user?.email || "",
  };

  const handlePurchase = async () => {
    const purchaseDetails = {
      foodName: food?.FoodName,
      price: food?.Price,
      quantity: parseInt(quantity, 10),
      buyerName: loggedInUser.name,
      buyerEmail: loggedInUser.email,
      buyingDate: Date.now(),
    };

    try {
      await axios.post("http://localhost:5000/foods", purchaseDetails);
      toast.success("Purchase successful!"); 
      navigate("/");
    } catch (error) {
      console.error("Error while purchasing:", error);
      toast.error("Failed to complete purchase. Try again!"); 
    }
  };


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Purchase {food?.FoodName}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePurchase();
          }}
          className="space-y-4"
        >
          {/* Food Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Food Name</label>
            <input
              type="text"
              value={food?.FoodName || ""}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Price</label>
            <input
              type="text"
              value={`$${food?.Price?.toFixed(2)}`}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Quantity</label>
            <input
              type="number"
              min="1"
              max={food?.Quantity || 1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          {/* Buyer Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Buyer Name</label>
            <input
              type="text"
              value={loggedInUser.name}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Buyer Email */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Buyer Email</label>
            <input
              type="email"
              value={loggedInUser.email}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Purchase Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-red-500 to-yellow-500 hover:shadow-lg"
          >
            Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default FoodPurchasePage;