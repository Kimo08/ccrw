import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];

    const response = await fetch(
      `https://api.usccb.org/daily-readings?date=${formattedDate}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API returned status ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("API did not return JSON");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching readings:", error);

    // Fallback: Return mock data
    const mockData = {
      readings: [
        {
          title: "Daily Mass Reading",
          reading1: {
            display:
              "First Reading not available. Please visit USCCB.org for today's full readings.",
          },
          psalm: {
            display: "Psalm not available.",
          },
          reading2: {
            display: "Second Reading not available.",
          },
          gospel: {
            display: "Gospel not available.",
          },
        },
      ],
    };

    return NextResponse.json(mockData);
  }
}
