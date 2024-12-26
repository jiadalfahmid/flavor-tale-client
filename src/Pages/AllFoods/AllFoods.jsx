import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllFoodsPage = () => {
  const [foods, setFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await axios.get("http://localhost:5000/foods");
      setFoods(response.data);
    } catch (error) {
      console.error("Failed to fetch foods:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/foods/search?q=${searchQuery}`);
      setFoods(response.data);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  const handleDetailsClick = (id) => {
    navigate(`/food/${id}`);
  };

  return (
    <div className="p-6 bg-base-300">
      {/* Page Title */}
      <div
        className="bg-gradient-to-r text-white text-center py-12 mb-8"
        style={{ backgroundImage: "linear-gradient(to right, #FF5733, #FFD700)" }} 
      >
        <h1 className="text-4xl font-bold">All Foods</h1>
      </div>

      {/* Search Functionality */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search food by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-base-300 rounded-md w-80"
        />
        <button
          onClick={handleSearch}
          className="ml-4 px-4 py-2 rounded-md shadow-md text-white font-semibold"
          style={{
            backgroundImage: "linear-gradient(to right, #FF5733, #FFD700)", // Red to Yellow gradient
          }}
        >
          Search
        </button>
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div
            className="bg-base-100 shadow-md rounded-lg p-4 hover:shadow-lg transition"
            key={food._id}
          >
            <img
              src={food.FoodImage}
              alt={food.FoodName}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{food.FoodName}</h3>
            <p className="text-base-content mb-1">
              <span className="font-semibold">Category:</span> {food.FoodCategory}
            </p>
            <p className="text-base-content mb-1">
              <span className="font-semibold">Price:</span> ${food.Price}
            </p>
            <p className="text-base-content mb-2">
              <span className="font-semibold">Quantity:</span>{" "}
              {food.Quantity > 0 ? `${food.Quantity} pcs` : "Out of Stock"}
            </p>
            <button
              onClick={() => handleDetailsClick(food._id)}
              disabled={food.Quantity === 0}
              className={`w-full px-4 py-2 rounded-md text-white font-semibold ${
                food.Quantity > 0
                  ? "hover:shadow-lg"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              style={{
                backgroundImage:
                  food.Quantity > 0
                    ? "linear-gradient(to right, #FF5733, #FFD700)" // Red to Yellow gradient
                    : "none",
              }}
            >
              {food.Quantity > 0 ? "View Details" : "Unavailable"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFoodsPage;
