


export default function Home() {
  return (<div className="w-full h-full relative -z-10">
    <div className=" w-full h-screen overflow-hidden">
      <video className="absolute h-[95%] w-full object-cover " src="/video-heropage.mp4" autoPlay loop muted ></video>

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
  </div>
  );
}
