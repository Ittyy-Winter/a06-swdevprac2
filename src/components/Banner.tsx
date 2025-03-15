import Image from "next/image";

export default function Banner() {
  return (
    <div className="block w-screen h-[80vh] relative p-1 m-0">
      <Image
        src={"/img/cover.jpg"}
        alt="cover"
        fill={true}
        priority
        objectFit="cover"
        style={{ filter: "brightness(50%)" }}
      />
      <div className="relative top-[35%] z-20 text-center">
        <h1 className="text-5xl font-serif">
          where every event finds its venue
        </h1>
        <h3 className="text-xl font-serif">
          Finding the perfect venue has never been easier. Whether it's a
          wedding, corporate event, or private party, we connecting people to
          the perfect place.
        </h3>
      </div>
    </div>
  );
}
