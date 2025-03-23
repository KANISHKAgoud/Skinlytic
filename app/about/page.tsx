export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 text-center p-4 sm:p-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6 sm:mb-8">About Us</h1>
      <div className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600">Skinlytic</span>, your AI-powered skincare assistant. 
          Our mission is to provide you with quick, reliable, and accessible skin health insights. 
          Whether you're dealing with a sudden rash, persistent acne, or just curious about your skin's health, 
          Skinlytic is here to help.
        </p>
        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
          Our platform uses advanced AI algorithms to analyze your symptoms and skin images, providing you with potential diagnoses. 
          With two powerful features—<span className="font-semibold text-blue-600">Your Symptoms</span> and <span className="font-semibold text-blue-600">Upload Image</span>—you can get insights tailored to your needs.
        </p>
        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
          While our tool is designed to offer helpful insights, it is not a substitute for professional medical advice. 
          We always recommend consulting a dermatologist for a thorough evaluation.
        </p>
        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
          At Skinlytic, we believe that everyone deserves access to quality skincare information. 
          Our team is dedicated to making skin health management easier and more accessible for everyone.
        </p>
      </div>
    </div>
  );
}