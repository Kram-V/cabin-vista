import React from "react";
import Button from "../global/Button";
import backgroundImg from "@/public/bg.jpg";

const Hero = () => {
  return (
    <div>
      <div
        className="h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImg.src})`,
        }}
      >
        <div className="mt-[72px] w-[1400px] mx-auto h-full flex flex-col justify-center items-center text-white gap-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className=" text-7xl font-medium">
              Welcome To The Cabin Vista
            </h1>
            <p className="text-xl text-center">
              your ultimate getaway booking platform. Discover stunning cabins,
              seamless reservations, <br /> and unforgettable stays in
              nature&lsquo;s embrace.
            </p>
          </div>

          <Button btn="link" link="/cabins">
            Explore Luxury Cabins
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
