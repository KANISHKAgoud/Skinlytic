import Link from "next/link";

export default function Home() {
  return (
    <div
      className="h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/images/background-image.jpg')" }}>
      {/* <h1 className="text-white text-4xl font-bold flex justify-center items-center h-full">
        Welcome to Skinlytic
      </h1> */}

      <div className="h-screen bg-home flex items-center justify-center text-white max-w-screen">
        <div className="text-center bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-5xl font-bold">Welcome to Skinlytic</h1>
          <p className="mt-4 text-lg">Your AI-powered skincare assistant</p>
          <Link href="/symptoms">
          <button className="bg-blue-800 mt-3 h-10 px-4 rounded-4xl">Symptoms Analyzer</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
