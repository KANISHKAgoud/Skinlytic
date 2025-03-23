import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Create a new FormData object to send to the Flask backend
    const backendFormData = new FormData();
    backendFormData.append("file", file);

    // Send the image to the backend API
    const backendResponse = await fetch("http://localhost:5000/predict", {
      method: "POST",
      body: backendFormData, // Send as FormData
    });

    if (!backendResponse.ok) {
      throw new Error(`Backend API returned ${backendResponse.status}: ${backendResponse.statusText}`);
    }

    const data = await backendResponse.json();
    return NextResponse.json({ result: data.result });
  } catch (error) {
    console.error("Error processing image:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the image." },
      { status: 500 }
    );
  }
}