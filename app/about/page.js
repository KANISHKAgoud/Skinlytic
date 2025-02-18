import React from 'react'

const about = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center py-16">
    <div className="lg:w-1/2 px-8">
        <h2 className="text-4xl font-bold">Why Skinlytic?</h2>
        <p className="mt-4 text-lg">
            Our AI technology detects acne, dark spots, and skin conditions with high accuracy.
        </p>
        <button className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900">
            Learn More
        </button>
    </div>
    <img src="/ai-skin-analysis.png" className="lg:w-1/2 mt-8 lg:mt-0" />
</div>

    </div>
  )
}

export default about
