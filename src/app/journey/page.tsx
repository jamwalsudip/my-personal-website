import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#191919] flex justify-center min-h">
      <Image
        src="/Journey.png"
        alt="Journey"
        width={1920}
        height={1080}
        style={{
          width: "60%",
          height: "100%",
          objectFit: "cover",
          minWidth: "350px",
        }}
        priority
      />
    </div>
  );
}
