


export default function Home() {
  return (<div className="w-full h-screen relative -z-10">
    <div className=" w-full h-full overflow-hidden">
      <video className="absolute h-[100%] w-full object-cover " src="/video-heropage.mp4" autoPlay loop muted ></video>

      <div className="absolute text-black flex flex-col justify-center items-center h-screen text-center px-6">
        <h1 className="text-5xl font-bold">Analyze Your Skin Instantly</h1>
        <p className="mt-4 text-lg max-w-xl">
          Upload an image and get AI-powered skin analysis with detailed reports.
        </p>
        <button className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition">
          Upload Your Image
        </button>
      </div>
    </div>

    <div className=" bg-gray-100 py-16">
      <h2 className="text-center text-4xl font-bold">What Our Users Say</h2>
      <div className="flex flex-wrap justify-center gap-10 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p>{`"Amazing AI technology! It detected my acne issues perfectly."`}</p>
          <h3 className="mt-4 font-semibold">- Sarah M.</h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p>{`"Super accurate skin analysis. Helped me improve my skincare routine."`}</p>
          <h3 className="mt-4 font-semibold">- John D.</h3>
        </div>
      </div>
    </div>
    
  </div>
  );
}
