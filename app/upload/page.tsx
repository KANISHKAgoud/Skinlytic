"use client";

import { useState } from "react";

export default function Upload() {
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-amber-900">Upload Image</h1>
      <p className="mt-4 text-lg text-gray-600">Upload a clear image of your skin for analysis.</p>

      <input
        type="file"
        accept="image/*"
        className="mt-4 p-2 border rounded-md"
        onChange={handleImageUpload}
      />

      {image && (
        <div className="mt-4">
          <p className="text-gray-700">Selected File:</p>
          <p className="font-medium text-gray-800">{image.name}</p>
        </div>
      )}
    </div>
  );
}
