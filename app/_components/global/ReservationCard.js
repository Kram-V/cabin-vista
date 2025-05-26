"use client";

import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "../../../starter/components/DeleteReservation";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/app/_utils/helpers";

const formatDistanceFromNow = (startDate) => {
  const localDateOnly = new Date(startDate.split("T")[0]);

  if (isPast(localDateOnly)) {
    return formatDistance(localDateOnly, new Date(), {
      addSuffix: true,
    })
      .replace("about ", "")
      .replace("in", "In");
  } else {
    const fullDate = parseISO(startDate);

    return formatDistance(fullDate, new Date(), {
      addSuffix: true,
    })
      .replace("about ", "")
      .replace("in", "In");
  }
};

function ReservationCard({ booking }) {
  const {
    id,
    guest_id,
    start_date,
    end_date,
    num_nights,
    total_price,
    num_guests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex border">
      <div className="relative h-32 aspect-square">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover border-r"
        />
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {num_nights} nights in Cabin {name}
          </h3>
          {isPast(new Date(start_date)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="text-lg ">
          {format(new Date(start_date), "EEE, MMM dd yyyy")} (
          {isToday(new Date(start_date))
            ? "Today"
            : formatDistanceFromNow(start_date)}
          ) &mdash; {format(new Date(end_date), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex gap-5 mt-auto items-baseline">
          <p className="text-xl font-semibold">{formatCurrency(total_price)}</p>
          <p className="">&bull;</p>
          <p className="text-lg ">
            {num_guests} guest{num_guests > 1 && "s"}
          </p>
          <p className="ml-auto text-sm">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex flex-col border-l w-[100px]">
        {!isPast(new Date(start_date)) && (
          <>
            <Link
              href={`/account/reservations/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold  border-b flex-grow px-3"
            >
              <PencilSquareIcon className="h-5 w-5" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} />
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationCard;
