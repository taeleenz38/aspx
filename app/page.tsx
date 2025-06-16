import Image from "next/image";

export default function Home() {
  return (
    <div className="h-dvh w-full text-primary mt-10 flex justify-between p-14">
      <div className="w-1/2 h-full flex flex-col justify-between py-20">
        <div className="flex justify-end">
          <p className="text-7xl mr-8 mb-14 self-end">
            Cultivating <span className="font-extralight">Creativity, </span>
          </p>
        </div>
        <Image
          src="/mock-statistics.png"
          width={740}
          height={740}
          alt="mock statistics image"
        />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-between items-end py-20">
        <Image
          src="/mock-video-work.png"
          width={740}
          height={740}
          alt="mock video work image"
        />
        <div className="h-full ml-8 mt-14 flex items-center self-start">
          <p className="text-7xl">
            Powering <span className="font-extralight">Possibility. </span>
          </p>
        </div>
      </div>
    </div>
  );
}
