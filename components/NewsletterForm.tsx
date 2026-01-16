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
    <div>
      <h4 className="text-white font-bold text-lg mb-2 pb-2 border-b border-blue-300">
        Subscribe to Our Newsletter
      </h4>
      <p className="mb-4 text-sm text-blue-100 leading-relaxed">
        Stay informed about upcoming events, inspiring messages and the latest
        news from our church community
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-2 text-sm sm:text-base border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <button
          type="submit"
          disabled={isSubmitting || !email}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 transition-all duration-200 whitespace-nowrap"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-3 text-xs sm:text-sm font-medium ${
            message.includes("Success")
              ? "text-green-600 bg-green-50 p-2 rounded"
              : "text-red-600 bg-red-50 p-2 rounded"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;
