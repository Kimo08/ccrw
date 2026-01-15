"use client";

import React, { useState, FormEvent } from "react";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(""); // Clear previous messages

    try {
      // Replace with your API route URL
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Success! Check your email to confirm your subscription.");
        setEmail(""); // Clear the input field
      } else {
        // Handle specific errors from your API route
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" rounded-lg shadow-md mb-1">
      <h4 className=" font-bold mb-2 items-center">
        Subscribe to Our Newsletter
      </h4>
      <h4 className="mb-4 text-sm text-white">
        Subscribe to our newsletter to stay informed about upcoming events,
        inspiring messages and the latest news from our church community
      </h4>
      <form onSubmit={handleSubmit} className="flex flex-row ">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={isSubmitting || !email}
          className="p-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 disabled:opacity-50 transition duration-150 ease-in-out"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-3 text-sm ${
            message.includes("Success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;
