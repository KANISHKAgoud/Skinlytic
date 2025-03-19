export default function Home() {
  return (
    <div
      className="h-screen w-full bg-center bg-cover"
      style={{ backgroundImage: "url('/images/background-image.jpg')" }}>
      {/* <h1 className="text-white text-4xl font-bold flex justify-center items-center h-full">
        Welcome to Skinlytic
      </h1> */}

      <div className="h-screen bg-home flex items-center justify-center text-white">
        <div className="text-center bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-5xl font-bold">Welcome to Skinlytic</h1>
          <p className="mt-4 text-lg">Your AI-powered skincare assistant</p>
        </div>
      </div>
    </div>
  );
}
