"use client";
import React, { useState } from "react";

const SymptomsForm = () => {
  const [symptoms, setSymptoms] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState(""); // Track error

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("/api/analyze-symptoms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const textResponse = await response.text();
      console.log("Raw Response:", textResponse);

      if (!textResponse) {
        throw new Error("Empty response from server");
      }

      const data = JSON.parse(textResponse); // Parse manually
      if (data.error) {
        throw new Error(data.error);
      }

      setAnalysis(data);
    } catch (error: any) {
      console.error("Error:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Symptom-Based Disease Detection</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="symptoms" className="block mb-2">Symptoms</label>
          <textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="w-full p-2 rounded-lg text-white"
            placeholder="Describe your symptoms..."
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 px-4 py-2 rounded-lg w-full">
          Analyze Symptoms
        </button>
      </form>

      {errorMessage && (
        <p className="mt-4 text-red-400">{errorMessage}</p>
      )}

      {analysis && (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg w-full max-w-md">
          <h3 className="text-xl font-bold">Analysis Result</h3>
          <p><strong>Disease:</strong> {analysis.disease}</p>
          <p><strong>Solution:</strong> {analysis.solution}</p>
          <p><strong>Prevention:</strong> {analysis.prevention}</p>
          <p><strong>Medicine:</strong> {analysis.medicine}</p>
          {analysis.doctorRequired && (
            <p className="text-red-400">Consult a Doctor Immediately!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SymptomsForm;