import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import UseAuth from "./../../Hooks/UseAuth"; // Assuming this hook gives the logged-in user data

const AddFoodPage = () => {
  const { user } = UseAuth();
  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState();
  const [foodOrigin, setFoodOrigin] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle the submit action
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

    console.log(formData);

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
      console.error("Error adding food item:", error);
      toast.error("Failed to add food item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-base min-h-screen">
      <div
        className="bg-gradient-to-r text-white text-center py-12 mb-8"
        style={{
          backgroundImage: "linear-gradient(to right, #FF5733, #FFD700)",
        }}
      >
        <h1 className="text-4xl font-bold">Add New Food Item</h1>
      </div>

      <div className="max-w-4xl mx-auto bg-base-200 shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          {/* Add Food Form */}
          <h2 className="text-2xl font-bold mb-4 text-base-content">
            Food Details
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Left Column */}
            <div>
              <label className="block text-base-content mb-2 font-semibold">
                Food Name
              </label>
              <input
                type="text"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md text-base-content"
                required
              />
            </div>

            <div>
              <label className="block text-base-content mb-2 font-semibold">
                Food Category
              </label>
              <input
                type="text"
                value={foodCategory}
                onChange={(e) => setFoodCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-md text-base-content"
                required
              />
            </div>

            <div>
              <label className="block text-base-content mb-2 font-semibold">
                Food Image URL
              </label>
              <input
                type="url"
                value={foodImage}
                onChange={(e) => setFoodImage(e.target.value)}
                className="w-full px-4 py-2 border rounded-md text-base-content"
                required
              />
            </div>

            <div>
              <label className="block text-base-content mb-2 font-semibold">
                Quantity
              </label>
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded-md text-base-content"
                required
              />
            </div>

            {/* Right Column */}
            <div>
              <label className="block text-base-content mb-2 font-semibold">
                Price
              </label>
              <input
                type="number"
                value={price}
                min="0"
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded-md text-base-content"
                required
              />
            </div>

            <div>
              <label className="block text-base-content mb-2 font-semibold">
                Food Origin
              </label>
              <input
                type="text"
                value={foodOrigin}
                onChange={(e) => setFoodOrigin(e.target.value)}
                className="w-full px-4 py-2 border rounded-md text-base-content"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-base-content mb-2 font-semibold">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border rounded-md text-base-content"
                required
              ></textarea>
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-red-500 to-yellow-500 hover:shadow-lg"
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Item"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFoodPage;
