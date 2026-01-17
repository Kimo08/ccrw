"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Reading {
  title: string;
  firstReading: string;
  psalm: string;
  secondReading: string;
  gospel: string;
}

const Readings = () => {
  const [reading, setReading] = useState<Reading | null>(null);
  const [date, setDate] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReadings = async () => {
      try {
        const today = new Date();
        setDate(
          today.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        );

        // Fetch from internal API
        const response = await fetch("/api/readings");

        if (!response.ok) {
          throw new Error(`API returned status ${response.status}`);
        }

        const data = await response.json();

        if (
          data.readings &&
          Array.isArray(data.readings) &&
          data.readings.length > 0
        ) {
          const readingData = data.readings[0];
          setReading({
            title: readingData.title || "Daily Mass Reading",
            firstReading: readingData.reading1?.display || "Not available",
            psalm: readingData.psalm?.display || "Not available",
            secondReading: readingData.reading2?.display || "Not available",
            gospel: readingData.gospel?.display || "Not available",
          });
        } else {
          console.log("No readings found in response:", data);
          setReading(null);
        }
      } catch (error) {
        console.error("Error fetching readings:", error);
        setReading(null);
      } finally {
        setLoading(false);
      }
    };

    fetchReadings();
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <Link href="/schedule">
            <button className="text-blue-600 hover:text-blue-700 mb-4 text-sm font-semibold">
              ← Back to Schedule
            </button>
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Daily Mass Reading
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
          <h4 className="text-gray-600 mt-4 text-lg">{date}</h4>
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Loading today&apos;s reading...
            </p>
          </div>
        ) : reading ? (
          <div className="space-y-8">
            {/* Title */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h2 className="text-2xl font-bold text-gray-800">
                {reading.title}
              </h2>
            </div>

            {/* First Reading */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600">
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                First Reading
              </h3>
              <h4 className="text-gray-900 leading-relaxed whitespace-pre-wrap">
                {reading.firstReading}
              </h4>
            </div>

            {/* Psalm */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-green-800 mb-3">Psalm</h3>
              <h4 className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {reading.psalm}
              </h4>
            </div>

            {/* Second Reading */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                Second Reading
              </h3>
              <h4 className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {reading.secondReading}
              </h4>
            </div>

            {/* Gospel */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-red-800 mb-3">Gospel</h3>
              <h4 className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {reading.gospel}
              </h4>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 p-6 rounded-lg text-center">
            <h4 className="text-gray-700 text-lg">
              Unable to load today&apos;s reading. Please try again later.
            </h4>
            <a
              href="https://www.usccb.org/daily-readings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 mt-4 inline-block font-semibold"
            >
              View readings at USCCB →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Readings;
