import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { getFirstThreeCabins } from "@/app/_lib/data-service";

const Cabins = async () => {
  const cabins = await getFirstThreeCabins();

  return (
    <div className="bg-gray-50">
      <div className="w-[1400px] mx-auto text-black gap-10 py-16 ">
        <div>
          <h2 className="text-5xl font-medium mb-10">Featured Cabins</h2>

          <div className="h-[600px]">
            <Carousel>
              {cabins.map((cabin) => (
                <div className="relative h-full" key={cabin.id}>
                  <span className="absolute left-[20px] top-[20px] text-white z-20 text-3xl font-medium">
                    Cabin {cabin.name}
                  </span>
                  <Link href={`/cabins/${cabin.id}`}>
                    <Image
                      src={cabin.image}
                      alt={`Cabin ${cabin.name}`}
                      fill
                      className="object-cover"
                    />
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cabins;
