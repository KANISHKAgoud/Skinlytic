"use client";

import { useState } from "react";

export default function UploadPhotoPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) return;
  
    setLoading(true);
  
    try {
      const formData = new FormData();
      formData.append("file", file);
  
      console.log("Sending file to backend:", file.name); // Debug log
  
      // Send the image to the Next.js API route
      const response = await fetch("/api/analyze-image", {
        method: "POST",
        body: formData,
      });
  
      console.log("Backend response status:", response.status); // Debug log
  
      const data = await response.json();
      console.log("Backend response data:", data); // Debug log
  
      setResult(data.result);
    } catch (error) {
      console.error("Error analyzing image:", error);
      setResult("An error occurred while analyzing the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="mx-auto bg-white p-6 rounded-lg shadow-md w-[85%]">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Upload Photo</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700">
              Upload your photo:
            </label>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze Photo"}
          </button>
        </form>

        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h2 className="text-xl font-semibold text-gray-800">Analysis Result</h2>
            <p className="mt-2 text-gray-600">
              Based on the analysis, you may have: <strong>{result}</strong>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}