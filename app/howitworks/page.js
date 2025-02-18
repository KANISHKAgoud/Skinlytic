import React from 'react'

const working = () => {
  return (
    <div>
      <div className="text-center py-16">
    <h2 className="text-4xl font-bold">How It Works?</h2>
    <div className="flex flex-col md:flex-row justify-center gap-10 mt-8">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Step 1</h3>
            <p>Upload a clear image of your face.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Step 2</h3>
            <p>Our AI scans your skin and detects issues.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Step 3</h3>
            <p>Receive a detailed skin analysis report.</p>
        </div>
    </div>
</div>

    </div>
  )
}

export default working
