import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import UseAuth from "./../../Hooks/UseAuth";

const MySwal = withReactContent(Swal);

const MyOrdersPage = () => {
  const { user } = UseAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE}purchases/email?email=${user.email}`,
        {
          withCredentials: true,
        }
      );
      setOrders(response.data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    const confirmDelete = await MySwal.fire({
      title: "Are you sure?",
      text: "This will permanently remove the order.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_BASE}purchases/${orderId}`
        );
        toast.success("Order deleted successfully!");
        fetchOrders();
      } catch (error) {
        toast.error("Failed to delete the order. Please try again.");
      }
    }
  };

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-base-content">
        My Orders
      </h1>

      {orders.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-base-300 bg-base-100">
            <thead>
              <tr className="bg-base-300">
                <th className="border border-base-300 px-4 py-2 text-left">
                  #
                </th>
                <th className="border border-base-300 px-4 py-2 text-left">
                  Food Name
                </th>
                <th className="border border-base-300 px-4 py-2 text-left">
                  Price
                </th>
                <th className="border border-base-300 px-4 py-2 text-left">
                  Quantity
                </th>
                <th className="border border-base-300 px-4 py-2 text-left">
                  Total
                </th>
                <th className="border border-base-300 px-4 py-2 text-left">
                  Purchased On
                </th>
                <th className="border border-base-300 px-4 py-2 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order._id}
                  className="hover:bg-base-200 transition-all"
                >
                  <td className="border border-base-300 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-base-300 px-4 py-2">
                    {order.foodName}
                  </td>
                  <td className="border border-base-300 px-4 py-2">
                    ${order.price}
                  </td>
                  <td className="border border-base-300 px-4 py-2">
                    {order.quantity}
                  </td>
                  <td className="border border-base-300 px-4 py-2">
                    ${(order.price * order.quantity).toFixed(2)}
                  </td>
                  <td className="border border-base-300 px-4 py-2">
                    {moment(order.buyingDate).format("MMMM Do YYYY, h:mm:ss a")}
                  </td>
                  <td className="border border-base-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-xl text-base-content">
          No orders found.
        </p>
      )}
    </div>
  );
};

export default MyOrdersPage;
