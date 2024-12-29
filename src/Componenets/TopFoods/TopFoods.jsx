import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

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

const TopFoods = () => {
  const [topFoods, setTopFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE}foods?search=${""}`);
        
      
        const sortedTopFoods = data
          .sort((a, b) => b.PurchaseCount - a.PurchaseCount)
          .slice(0, 6); 

        setTopFoods(sortedTopFoods);
      } catch (error) {
        toast.error("Failed to fetch foods. Please try again later.");
        console.error("Fetch Foods Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFoods();
  }, []);

  const handleDetailsClick = (id) => {
    navigate(`/food/${id}`);
  };

  return (
    <div className="p-6 bg-base-300">
      {/* Top Foods Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">Top Foods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            [...Array(6)].map((_, index) => <SkeletonCard key={index} />)
          ) : topFoods.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <h2 className="text-2xl font-semibold text-gray-600">
                No top foods found
              </h2>
              <p className="text-gray-500 mt-2">
                Please check back later for updates!
              </p>
            </div>
          ) : (
            topFoods.map((food) => (
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
                  <span className="font-semibold">Purchases:</span>{" "}
                  {food.PurchaseCount}
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
          <div className="flex p-4 justify-center">
            <Link
            to={'/all-foods'}
                    className="px-4 py-2 rounded-md text-white font-semibold hover:shadow-lg"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #FF5733, #FFD700)",
                    }}
                  >
                    See All Foods
                  </Link>
          </div>
      </section>
    </div>
  );
};

export default TopFoods;
