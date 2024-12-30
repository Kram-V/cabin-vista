import Cabin from "@/app/_components/cabins/Cabin";
import Reservation from "@/app/_components/cabins/Reservation";
import Spinner from "@/app/_components/global/Spinner";
import TextExpander from "@/app/_components/global/TextExpander";
import { auth } from "@/app/_lib/auth";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id: cabinId } = await params;
  const cabin = await getCabin(cabinId);

  const { name, description } = cabin;

  return {
    title: `Cabin ${name}`,
    description,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const cabinIds = cabins.map((cabin) => {
    return {
      id: String(cabin.id),
    };
  });

  return cabinIds;
}

export const revalidate = 0;

export default async function Page({ params }) {
  const { id: cabinId } = await params;
  const [cabin, session] = await Promise.all([getCabin(cabinId), auth()]);

  const { user } = session || {};

  return (
    <div className="w-[1400px] mx-auto pt-[100px] pb-[30px]">
      <Cabin cabin={cabin} />

      <div className="flex flex-col gap-16">
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>

        <Suspense
          fallback={
            <Spinner className="mt-36 mb-56" LoadingText="Loading..." />
          }
        >
          <Reservation cabin={cabin} user={user} />
        </Suspense>
      </div>
    </div>
  );
}
