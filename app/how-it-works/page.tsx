export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 text-center p-6">
      <h1 className="text-5xl font-bold text-blue-900 mb-8">How It Works</h1>
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">1️⃣</span>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-800">Enter Your Symptoms</h2>
              <p className="mt-2 text-lg text-gray-700">
                Start by describing your symptoms in the symptom analyzer. Be as detailed as possible to get the most accurate results.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">2️⃣</span>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-800">Provide Additional Information</h2>
              <p className="mt-2 text-lg text-gray-700">
                Enter your age, gender, and weight to help us tailor the analysis to your specific needs.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">3️⃣</span>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-800">Get Instant Insights</h2>
              <p className="mt-2 text-lg text-gray-700">
                Our AI-powered system will analyze your symptoms and provide you with potential conditions you may be experiencing.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">4️⃣</span>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-800">Consult a Doctor</h2>
              <p className="mt-2 text-lg text-gray-700">
                Based on the results, we recommend consulting a healthcare professional for further evaluation and treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}