import Image from "next/image";


export default function Home() {
  return (<div className="w-full h-full relative -z-10">
    <div className=" w-full h-screen overflow-hidden">
      <video className="absolute h-[95%] w-full object-cover " src="/video-heropage.mp4" autoPlay loop muted ></video>
    </div>
  </div>
  );
}
