import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import UseAuth from "./../../Hooks/UseAuth";

const AddFoodPage = () => {
  const { user } = UseAuth();
  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");
  const [foodOrigin, setFoodOrigin] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !foodName ||
      !foodImage ||
      !foodCategory ||
      !price ||
      !foodOrigin ||
      !description
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    const formData = {
      FoodName: foodName,
      FoodImage: foodImage,
      FoodCategory: foodCategory,
      Quantity: quantity,
      Price: price,
      AddBy: {
        Name: user.displayName,
        Email: user.email,
      },
      FoodOrigin: foodOrigin,
      Description: description,
      PurchaseCount: 0,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE}foods`,
        formData
      );

      if (response.status === 201) {
        toast.success("Food item added successfully!");
        setFoodName("");
        setFoodImage("");
        setFoodCategory("");
        setQuantity(1);
        setPrice("");
        setFoodOrigin("");
        setDescription("");
      } else {
        toast.error("Failed to add food item. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to add food item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-base-300 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-center py-8 mb-6">
        <h1 className="text-4xl font-bold">Add New Food Item</h1>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto bg-base-100 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-base-content">
          Food Details
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Input Fields */}
          <div>
            <label className="block text-base-content font-semibold mb-2">
              Food Name
            </label>
            <input
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter food name"
              required
            />
          </div>

          <div>
            <label className="block text-base-content font-semibold mb-2">
              Food Category
            </label>
            <input
              type="text"
              value={foodCategory}
              onChange={(e) => setFoodCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="e.g., Dessert, Main Course"
              required
            />
          </div>

          <div>
            <label className="block text-base-content font-semibold mb-2">
              Food Image URL
            </label>
            <input
              type="url"
              value={foodImage}
              onChange={(e) => setFoodImage(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Paste image URL"
              required
            />
          </div>

          <div>
            <label className="block text-base-content font-semibold mb-2">
              Quantity
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter quantity"
              required
            />
          </div>

          <div>
            <label className="block text-base-content font-semibold mb-2">
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              min="0"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter price in USD"
              required
            />
          </div>

          <div>
            <label className="block text-base-content font-semibold mb-2">
              Food Origin
            </label>
            <input
              type="text"
              value={foodOrigin}
              onChange={(e) => setFoodOrigin(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="e.g., Italian, Mexican"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-base-content font-semibold mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Describe the food item"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className={`w-full py-2 rounded-md text-white font-semibold bg-orange-500 hover:bg-orange-600 transition-all ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Food Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoodPage;
