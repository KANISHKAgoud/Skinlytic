"use client";
import React, { useState } from "react";

const UploadImage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [accepted, setAccepted] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleAccept = async () => {
    if (!image) return;
    setAccepted(true);

    // Convert image to base64
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      const base64Image = reader.result;

      // Send image to backend for analysis
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64Image }),
      });

      const result = await res.json();
      setAnalysis(result);
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Upload Image for Analysis</h2>

      {!image ? (
        <label className="cursor-pointer bg-blue-500 px-4 py-2 rounded-lg">
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          Choose Image
        </label>
      ) : (
        <>
          <img src={preview!} alt="Uploaded" className="w-48 h-48 object-cover rounded-md mb-4" />
          {!accepted ? (
            <button onClick={handleAccept} className="bg-green-500 px-4 py-2 rounded-lg">Accept & Analyze</button>
          ) : (
            <p className="text-lg text-green-400">Analyzing...</p>
          )}
        </>
      )}

      {/* Display Analysis Result */}
      {analysis && (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold">Analysis Result</h3>
          <p><strong>Disease:</strong> {analysis.disease}</p>
          <p><strong>Solution:</strong> {analysis.solution}</p>
          <p><strong>Prevention:</strong> {analysis.prevention}</p>
          <p><strong>Medicine:</strong> {analysis.medicine}</p>
          {analysis.doctorRequired && <p className="text-red-400">Consult a Doctor Immediately!</p>}
        </div>
      )}
    </div>
  );
};

export default UploadImage;
