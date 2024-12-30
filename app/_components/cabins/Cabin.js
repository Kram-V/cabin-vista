import React from "react";
import TextExpander from "../global/TextExpander";
import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Cabin = ({ cabin }) => {
  const {
    id,
    name,
    max_capacity,
    regular_price,
    discount,
    image,
    description,
  } = cabin;

  return (
    <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 mb-24">
      <div className="relative">
        <Image
          fill
          className=" object-cover"
          src={image}
          alt={`Cabin ${name}`}
        />
      </div>

      <div className="py-5 pr-5">
        <h3 className="text-accent-100 font-black text-7xl mb-5">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{max_capacity}</span> guests
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cabin;
