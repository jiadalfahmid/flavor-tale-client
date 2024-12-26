import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import UseAuth from "./../../Hooks/UseAuth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Initialize SweetAlert2 with React
const MySwal = withReactContent(Swal);

const MyFoodsPage = () => {
  const { user } = UseAuth();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetchMyFoods();
    }
  }, [user]);

  // Fetch food items added by the logged-in user
  const fetchMyFoods = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/foods/email?email=${user?.email}`);
      setFoods(response.data); // Corrected the reference here
    } catch (error) {
      console.error("Failed to fetch foods:", error);
    }
  };

  // Handle food update by showing SweetAlert
  const handleFoodUpdate = (food) => {
    MySwal.fire({
      title: "Update Food Item",
      html: `
        <div class="bg-base-100 w-full py-4">
          <label class="swal2-input-label text-base-content">Food Name</label>
          <input id="foodName" class="swal2-input" value="${food.FoodName}" />
          <label class="swal2-input-label text-base-content">Price</label>
          <input id="price" class="swal2-input" type="number" value="${food.Price}" />
          <label class="swal2-input-label text-base-content">Quantity</label>
          <input id="quantity" class="swal2-input" type="number" value="${food.Quantity}" />
          <label class="swal2-input-label text-base-content">Description</label>
          <textarea id="description" class="swal2-input">${food.Description}</textarea>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const foodName = document.getElementById("foodName").value;
        const price = document.getElementById("price").value;
        const quantity = document.getElementById("quantity").value;
        const description = document.getElementById("description").value;

        // Validate the input
        if (!foodName || !price || !quantity || !description) {
          MySwal.showValidationMessage("Please fill out all fields.");
        }

        return { foodName, price, quantity, description };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { foodName, price, quantity, description } = result.value;

        try {
          await axios.put(`http://localhost:5000/foods/${food._id}`, {
            FoodName: foodName,
            Price: price,
            Quantity: quantity,
            Description: description,
          });

          toast.success("Food item updated successfully!");
          fetchMyFoods(); // Fetch updated food list after update
        } catch (error) {
          toast.error("Failed to update food item. Please try again.");
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        MySwal.fire("Cancelled", "Your food item update is cancelled.", "error");
      }
    });
  };

  // Render the food items in the new card layout
  return (
    <div className="p-6 bg-base-300 min-h-screen">
      <div
        className="bg-gradient-to-r text-white text-center py-12 mb-8"
        style={{ backgroundImage: "linear-gradient(to right, #FF5733, #FFD700)" }} 
      >
        <h1 className="text-4xl font-bold">My All Foods</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foods.length > 0 ? (
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
                onClick={() => handleFoodUpdate(food)}
                className="w-full text-center text-white p-4 rounded-lg"
                style={{
                  backgroundImage:"linear-gradient(to right, #FF5733, #FFD700)" 
                }}
              >
                Update
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-xl">No food items added yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyFoodsPage;
