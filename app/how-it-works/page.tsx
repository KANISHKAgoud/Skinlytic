export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 text-center p-4 sm:p-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6 sm:mb-8">How It Works</h1>
      <div className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <div className="space-y-6">
          {/* Your Symptoms Section */}
          <div className="flex flex-col sm:flex-row items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">1️⃣</span>
            </div>
            <div className="sm:ml-4 mt-2 sm:mt-0">
              <h2 className="text-xl font-semibold text-gray-800">Your Symptoms</h2>
              <p className="mt-2 text-base sm:text-lg text-gray-700">
                Start by describing your symptoms in the symptom analyzer. Be as detailed as possible to get the most accurate results.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">2️⃣</span>
            </div>
            <div className="sm:ml-4 mt-2 sm:mt-0">
              <h2 className="text-xl font-semibold text-gray-800">Provide Additional Information</h2>
              <p className="mt-2 text-base sm:text-lg text-gray-700">
                Enter your age, gender, and weight to help us tailor the analysis to your specific needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">3️⃣</span>
            </div>
            <div className="sm:ml-4 mt-2 sm:mt-0">
              <h2 className="text-xl font-semibold text-gray-800">Get Instant Insights</h2>
              <p className="mt-2 text-base sm:text-lg text-gray-700">
                Our AI-powered system will analyze your symptoms and provide you with potential conditions you may be experiencing.
              </p>
            </div>
          </div>

          {/* Upload Image Section */}
          <div className="flex flex-col sm:flex-row items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">4️⃣</span>
            </div>
            <div className="sm:ml-4 mt-2 sm:mt-0">
              <h2 className="text-xl font-semibold text-gray-800">Upload Image</h2>
              <p className="mt-2 text-base sm:text-lg text-gray-700">
                Upload a photo of your skin condition. Our AI will analyze the image and provide you with a potential diagnosis.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">5️⃣</span>
            </div>
            <div className="sm:ml-4 mt-2 sm:mt-0">
              <h2 className="text-xl font-semibold text-gray-800">Get Image-Based Insights</h2>
              <p className="mt-2 text-base sm:text-lg text-gray-700">
                Our AI will process the image and identify potential skin conditions based on visual patterns.
              </p>
            </div>
          </div>

          {/* Final Step */}
          <div className="flex flex-col sm:flex-row items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">6️⃣</span>
            </div>
            <div className="sm:ml-4 mt-2 sm:mt-0">
              <h2 className="text-xl font-semibold text-gray-800">Consult a Doctor</h2>
              <p className="mt-2 text-base sm:text-lg text-gray-700">
                Based on the results, we recommend consulting a healthcare professional for further evaluation and treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}