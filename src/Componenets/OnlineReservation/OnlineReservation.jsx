import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const OnlineReservation = () => {
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !phone || !date || !time) {
      toast.error("Please fill in all fields.");
    } else {
      toast.success("Reservation submitted successfully!");
      // Reset form after submission
      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      setPeople(1);
    }
  };

  return (
    <section className="relative bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex items-center justify-center bg-fixed">
      <div className="bg-gradient-to-b from-black/80 to-black/60 p-10 rounded-lg text-center max-w-4xl w-full mx-4 my-20">
        <h1 className="text-4xl font-bold text-white mb-8">BOOK A TABLE</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name input */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 bg-base-200 rounded-md w-full"
          />

          {/* Email input */}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 bg-base-200 rounded-md w-full"
          />

          {/* Phone input */}
          <input
            type="tel"
            placeholder="Your Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-3 bg-base-200 rounded-md w-full"
          />

          {/* Number of people dropdown */}
          <select
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="p-3 bg-base-200 rounded-md w-full"
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1} Person{num > 0 && "s"}
              </option>
            ))}
          </select>

          {/* Date picker */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-3 rounded-md bg-base-200 w-full"
          />

          {/* Time picker */}
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-3 rounded-md bg-base-200 w-full"
          />
        </div>

        {/* Book now button */}
        <button
          onClick={handleSubmit}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-red-500 to-yellow-500 font-semibold rounded-md hover:bg-orange-600 text-white"
        >
          BOOK NOW
        </button>

        {/* Toast container */}
        <Toaster position="top-center" />
      </div>
    </section>
  );
};

export default OnlineReservation;
