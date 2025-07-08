import React, { useState } from "react";

const Resevation = () => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Data:", form);
    alert("Reservation submitted!");
  };

  return (
    <section className="" id="reservation">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          📅 Book a Table
        </h2>
        <form
          onSubmit={handleSubmit}
          className="dark:bg-slate-700 p-8 rounded-2xl shadow-md space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="dark:bg-transparent dark:text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="dark:bg-transparent dark:text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="dark:bg-transparent dark:text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Number of Guests
            </label>
            <input
              type="number"
              name="guests"
              value={form.guests}
              onChange={handleChange}
              min={1}
              max={20}
              required
              className="dark:bg-transparent dark:text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition-all"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Resevation;
