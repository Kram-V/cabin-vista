import React, { Suspense } from "react";
import CabinList from "../_components/cabins/CabinList";
import Spinner from "../_components/global/Spinner";
import Filter from "../_components/global/Filter";

export const metadata = {
  title: "Cabins",
};

export const revalidate = 0;

const Page = async ({ searchParams }) => {
  const result = await searchParams;

  const filter = result.max_capacity ? result.max_capacity : "all";

  return (
    <div className="w-[1400px] mx-auto pt-[100px] pb-[30px]">
      <h1 className="text-4xl mb-5  font-medium">Our Luxury Cabins</h1>
      <p className="text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&lsquo;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <Filter />

      <Suspense
        fallback={<Spinner LoadingText="Loading Data..." className="mt-24" />}
        key={filter}
      >
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
};

export default Page;
