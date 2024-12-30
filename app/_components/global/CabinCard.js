import { formatCurrency } from "@/app/_utils/helpers";
import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, max_capacity, regular_price, discount, image } = cabin;

  return (
    <div className="flex border">
      <div className="relative w-[200px]">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover border-r border-gray-200"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 ">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5" />
            <p className="text-lg ">
              For up to <span className="font-bold">{max_capacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  {formatCurrency(regular_price - discount)}
                </span>
                <span className="line-through font-semibold">
                  {formatCurrency(regular_price)}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">
                {formatCurrency(regular_price)}
              </span>
            )}
            <span className="">/ night</span>
          </p>
        </div>

        <div className="grid grid-cols-2 justify-items-center border-t">
          <Link
            href={`/cabins/rate/${id}`}
            className="py-4 flex items-center gap-2"
          >
            <span>Rate</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </Link>

          <Link
            href={`/cabins/${id}`}
            className="border-l py-4 px-6 flex items-center gap-2"
          >
            <span> Details & reservation</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
