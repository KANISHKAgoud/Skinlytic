import React from 'react'

const reviews = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16">
    <h2 className="text-center text-4xl font-bold">What Our Users Say</h2>
    <div className="flex flex-wrap justify-center gap-10 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>"Amazing AI technology! It detected my acne issues perfectly."</p>
            <h3 className="mt-4 font-semibold">- Sarah M.</h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>"Super accurate skin analysis. Helped me improve my skincare routine."</p>
            <h3 className="mt-4 font-semibold">- John D.</h3>
        </div>
    </div>
</div>

    </div>
  )
}

export default reviews
