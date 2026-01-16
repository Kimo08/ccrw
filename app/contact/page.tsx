"use client";

import handleSendEmail from "@/service/contact";
import { FormEvent, useState } from "react";

const Page = () => {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const eventData = new FormData(event.currentTarget);

    // Clear response.
    setResponseMessage(null);

    const data = {
      name: eventData.get("name")?.toString(),
      email: eventData.get("email")?.toString(),
      message: eventData.get("message")?.toString(),
    };

    const { name, email, message } = data;

    if (name && email && message) {
      const response = await handleSendEmail({ name, email, message });
      if (response.error) {
        setResponseMessage(response.error);
      } else {
        setResponseMessage(response.message ?? "Message sent successfully!");
        (event.target as HTMLFormElement).reset();
      }
    } else {
      setResponseMessage("All fields are required.");
    }

    setIsSubmitting(false);
  }

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      content: "KM 32 Lagos - Ibadan Expy, Lagos 121101, Ogun State",
    },
    {
      icon: "📞",
      title: "Phone",
      content: "+234 706 375 4592",
      link: "tel:+2347063754592",
    },
    {
      icon: "⏰",
      title: "Office Hours",
      content: "Tuesday - Friday: 9:00 AM - 1:00 PM",
    },
  ];

  return (
    <div className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <h1 className="font-black text-gray-900 text-lg sm:text-xl max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-3">{info.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <h1 className="text-gray-900 text-lg sm:text-xl max-w-2xl  leading-relaxed">
                      {info.content}
                    </h1>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 sm:px-8 py-8 sm:py-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Send us a Message
                </h2>
                <p className="text-blue-100 mt-2">
                  For Mass bookings, prayers, counselling, or any inquiries
                </p>
              </div>

              {/* Form Content */}
              <form
                onSubmit={onSubmit}
                className="p-6 sm:p-8 space-y-5 sm:space-y-6"
              >
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm sm:text-base font-semibold text-gray-800 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 placeholder-gray-400"
                  />
                </div>

                {/* Phone and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm sm:text-base font-semibold text-gray-800 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      placeholder="+234 700 000 0000"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 placeholder-gray-400"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm sm:text-base font-semibold text-gray-800 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm sm:text-base font-semibold text-gray-800 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    required
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none placeholder-gray-400"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-4 px-6 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Response Message */}
                {responseMessage && (
                  <div
                    className={`p-4 sm:p-5 rounded-lg border-l-4 transition-all duration-300 ${
                      responseMessage.toLowerCase().includes("error") ||
                      responseMessage.toLowerCase().includes("required")
                        ? "bg-red-50 border-red-500 text-red-700"
                        : "bg-green-50 border-green-500 text-green-700"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl mt-1">
                        {responseMessage.toLowerCase().includes("error") ||
                        responseMessage.toLowerCase().includes("required")
                          ? "❌"
                          : "✅"}
                      </span>
                      <p className="font-medium leading-relaxed">
                        {responseMessage}
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 sm:p-8 lg:p-10 border border-blue-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why Contact Us?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">🙏</span>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">
                  Spiritual Guidance
                </h4>
                <h1 className="text-gray-900 text-sm sm:text-xl max-w-2xl ">
                  Receive counselling and spiritual direction from our
                  experienced pastoral team.
                </h1>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">💒</span>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">
                  Event Bookings
                </h4>
                <h1 className="text-gray-900 text-sm sm:text-xl max-w-2xl ">
                  Schedule Mass bookings, Baptisms, and other sacramental
                  celebrations.
                </h1>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">👥</span>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">
                  Community Support
                </h4>
                <h1 className="text-gray-900 text-sm sm:text-xl max-w-2xl">
                  Join our vibrant parish community and connect with fellow
                  believers.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
