import React from "react";
import CabinCard from "../global/CabinCard";
import { getCabins } from "@/app/_lib/data-service";
// import { unstable_noStore as noStore } from "next/cache";

const CabinList = async ({ filter }) => {
  // noStore();
  const cabins = await getCabins();

  if (!cabins.length)
    return <div className="text-center mt-36 text-xl">NO CABINS YET</div>;

  let filteredData;

  if (filter !== "all") {
    filteredData = cabins.filter(
      (cabin) => cabin.max_capacity === Number(filter)
    );
  } else {
    filteredData = cabins;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredData.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinList;
