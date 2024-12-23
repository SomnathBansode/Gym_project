import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-violet-400">
          Contact Us
        </h2>
        <p className="text-lg sm:text-xl text-zinc-300 mt-4">
          We’d love to hear from you! Please reach out with any questions or
          feedback.
        </p>
      </div>

      <div className="flex justify-center">
        <form
          className="w-3/4 sm:w-3/4 lg:w-3/4 bg-zinc-800 p-8 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-lg text-violet-400 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-700 text-white rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-lg text-violet-400 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-700 text-white rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-lg text-violet-400 mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-700 text-white rounded-lg resize-none"
              rows="4"
              required
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-[#43b878] text-white rounded-lg text-lg hover:bg-[#36a268] transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
