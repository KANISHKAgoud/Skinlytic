"use client";
import React, { useState } from "react";

const SymptomsForm = () => {
  const [symptoms, setSymptoms] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("Sending request to /api/analyze-symptoms...");
      const response = await fetch("/api/analyze-symptoms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms }),
      });

      console.log("Response received:", response);

      if (!response.ok) {
        throw new Error("Failed to analyze symptoms");
      }

      const data = await response.json();
      console.log("Analysis result:", data);

      // Update the analysis state with the response data
      setAnalysis(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Symptom-Based Disease Detection</h2>

      {/* Symptom Input Form */}
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

        <div className="mb-4">
          <label htmlFor="age" className="block mb-2">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 rounded-lg text-white"
            placeholder="Enter your age"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block mb-2">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 rounded-lg text-black"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="weight" className="block mb-2">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 rounded-lg text-white"
            placeholder="Enter your weight"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 px-4 py-2 rounded-lg w-full">
          Analyze Symptoms
        </button>
      </form>

      {/* Display Analysis Result */}
      {analysis && (
        <div className="mt-6 bg-white p-4 rounded-lg w-full max-w-md">
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