import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SkeletonCard = () => (
  <div className="bg-base-100 shadow-md rounded-lg p-4 hover:shadow-lg">
    <div className="w-full h-48 skeleton rounded-t-lg mb-4" />
    <div className="h-6 skeleton rounded w-3/4 mb-2" />
    <div className="h-4 skeleton rounded w-1/2 mb-1" />
    <div className="h-4 skeleton rounded w-1/3 mb-1" />
    <div className="h-4 skeleton rounded w-2/5 mb-2" />
    <div className="h-10 skeleton rounded-md w-full" />
  </div>
);

const AllFoodsPage = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_BASE}foods?search=${search}`
        );
        setFoods(data);
      } catch (error) {
        toast.error("Failed to fetch foods. Please try again later.");
        console.error("Fetch Foods Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFoods();
  }, [search]);

  const handleSearch = async () => {
    if (!search.trim()) {
      toast.error("Search query cannot be empty!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE}foods?search=${search}`
      );
      setFoods(response.data);
      if (response.data.length === 0) {
        toast.error("No foods found for the search term!");
      } else {
        toast.success("Search results updated!");
      }
    } catch (error) {
      toast.error("Search failed. Please try again later.");
      console.error("Search Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDetailsClick = (id) => {
    navigate(`/food/${id}`);
  };

  return (
    <div className="p-6 bg-base-300">
      {/* Page Title */}
      <div
        className="bg-gradient-to-r to-yellow-500 from-red-500 text-white text-center py-12 mb-8"
      >
        <h1 className="text-4xl font-bold">All Foods</h1>
      </div>

      {/* Search Functionality */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search food by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-base-300 rounded-md w-80"
        />
        <button
          onClick={handleSearch}
          className="ml-4 px-4 py-2 rounded-md shadow-md text-white font-semibold"
          style={{
            backgroundImage: "linear-gradient(to right, #FF5733, #FFD700)",
          }}
        >
          Search
        </button>
      </div>

      {/* Food Cards or Skeleton Loading */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          [...Array(6)].map((_, index) => <SkeletonCard key={index} />)
        ) : foods.length === 0 ? (
          <div className="col-span-full text-center py-8">
            <h2 className="text-2xl font-semibold text-gray-600">
              No foods found
            </h2>
            <p className="text-gray-500 mt-2">
              Try adjusting your search criteria
            </p>
          </div>
        ) : (
          foods.map((food) => (
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
                <span className="font-semibold">Category:</span>{" "}
                {food.FoodCategory}
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
                className="w-full px-4 py-2 rounded-md text-white font-semibold hover:shadow-lg"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FF5733, #FFD700)",
                }}
              >
                View Details
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllFoodsPage;
